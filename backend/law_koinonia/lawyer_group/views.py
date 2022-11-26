# from django.shortcuts import render
from django.contrib.auth import get_user_model
from lawyer_group.models import (LawyerGroup, LawyerGroupMember,
                                 LawyerGroupPost, LawyerGroupPostOpinion)
from lawyer_group.serializer import (LawyerGroupMemberSerializer,
                                     LawyerGroupPostOpinionSerializer,
                                     LawyerGroupPostSerializer,
                                     LawyerGroupSerializer)
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response

User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def all_group(request, *args, **kwargs):
    obj = LawyerGroup.objects.all()
    serializer = LawyerGroupSerializer(obj, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def lawyer_group_create(request, *args, **kwargs):
    serializer = LawyerGroupSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save(group_admin=request.user)
        return Response(data=serializer.data, status = status.HTTP_201_CREATED)
    return Response({'message': 'Not Create Now '}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def group_details(request, group_id, *args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id)
    if not qs.exists():
        return Response({'message': 'No Data Found'}, status=status.HTTP_400_BAD_REQUEST)
    obj = qs.first()
    serializer = LawyerGroupSerializer(obj, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def group_update(request, group_id, *args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id, group_admin=user)
    if not qs.exists():
        return Response({'message': 'No Data Found Our Not Authorized'}, status=status.HTTP_400_BAD_REQUEST)
    obj = qs.first()
    data = request.data
    serializer = LawyerGroupSerializer(obj, many=False)
    obj.group_name = data['group_name']
    obj.group_desc = data['group_desc']
    obj.save()
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def group_delete(request, group_id, *args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id)
    if not qs.exists():
        return Response({'message': 'No Data Found '}, status=status.HTTP_400_BAD_REQUEST)
    qs = qs.filter(group_admin=user)
    if not qs.exists():
        return Response({"message": "You are not Authorize for  delete this Post"}, status=status.HTTP_401_UNAUTHORIZED)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Group Deleted"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_group_member(request, group_id, member_id, *args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id, group_admin=user)
    if not qs.exists():
        return Response({"message": "Group Not Exist Or You are not authentic"}, status=status.HTTP_400_BAD_REQUEST)
    obj = qs.first()
    group_members = obj.group_member.values()
    if not group_members.exists():
        admin_add = LawyerGroupMember.objects.create(
        user = user,
        group = obj,
        )
        obj.group_member.add(admin_add)
    member = User.objects.get(id=member_id)
    group_member = [member['user_id'] for member in group_members]
    if member.id not in group_member:
        member_add = LawyerGroupMember.objects.create(
            user = member,
            group = obj,
        )
        obj.group_member.add(member_add)
        serializer = LawyerGroupMemberSerializer(member_add, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({"message":"You Are Already In This Group"}, status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def remove_group_member(request, group_id, member_id, *args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id, group_admin=user)
    if not qs.exists():
        return Response({"message": "Group Not Exist Or You are not authentic"}, status=status.HTTP_400_BAD_REQUEST)
    obj = qs.first()
    group_members = obj.group_member.values()
    member = User.objects.get(id=member_id)
    group_member = [member['user_id'] for member in group_members]
    if member.id in group_member:
        member_remove = LawyerGroupMember.objects.filter(
                user = member,
                group = obj,
            )
        ng = member_remove.delete()
        return Response({"message":"Member Removed From This Group"}, status=status.HTTP_200_OK)
    return Response({"message":"Member Not Found In This Group"}, status=status.HTTP_406_NOT_ACCEPTABLE)


# Post Group ==========================================

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def lawyer_group_post_create(request, group_id ,*args, **kwargs):
    user = request.user
    data = request.data
    user_group = LawyerGroup.objects.filter(_id=group_id)
    if not user_group.exists():
        return Response({'message': 'Group Not Found Or Deleted'}, status=status.HTTP_404_NOT_FOUND)
    if data['file'] is None:
        file = None
    else:
        file = data['file']
    user_group = user_group.first()
    group_members = user_group.group_member.values()
    request_member = user_group.group_member.filter(user= user.id).first()
    member = User.objects.get(id=user.id)
    group_member = [member['user_id'] for member in group_members]
    if member.id in group_member:
        group_post = LawyerGroupPost.objects.create(
            group = user_group,
            author = request_member,
            caption = data['caption'],
            file = file
        )
        serializer = LawyerGroupPostSerializer(group_post, many=False)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    return Response({"message": "You Not Member In This Group"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def lawyer_group_post_update(request, group_id, post_id, *args, **kwargs):
    user = request.user
    data = request.data
    user_group = LawyerGroup.objects.filter(_id=group_id)
    if not user_group.exists():
        return Response({'message': 'Group Not Found Or Deleted'}, status=status.HTTP_404_NOT_FOUND)
    user_group = user_group.first()
    if data['file'] is None:
        file = None
    else:
        file = data['file']
    if data['caption'] is None:
        caption = None
    else:
        caption = data['caption']
    group_members = user_group.group_member.values()
    request_member = user_group.group_member.filter(user= user.id).first()
    member = User.objects.get(id=user.id)
    group_member = [member['user_id'] for member in group_members]
    if member.id in group_member:
        group_post = LawyerGroupPost.objects.filter(
            id=post_id,
            group = user_group,
            author = request_member,
        )
        if not group_post.exists():
            return Response({'message': 'Post Not Found Or Deleted'}, status=status.HTTP_404_NOT_FOUND)
        obj = group_post.first()
        obj.caption = caption
        obj.file = file
        serializer = LawyerGroupPostSerializer(obj, many=False)
        return Response(serializer.data, status = status.HTTP_200_OK)
    return Response({"message": "You Not Member In This Group"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def lawyer_group_post_delete(request, group_id, post_id, *args, **kwargs):
    user = request.user
    data = request.data
    user_group = LawyerGroup.objects.filter(_id=group_id)
    if not user_group.exists():
        return Response({'message': 'Group Not Found Or Deleted'}, status=status.HTTP_404_NOT_FOUND)
    user_group = user_group.first()
    group_members = user_group.group_member.values()
    request_member = user_group.group_member.filter(user= user.id).first()
    member = User.objects.get(id=user.id)
    group_member = [member['user_id'] for member in group_members]
    if member.id in group_member:
        group_post = LawyerGroupPost.objects.filter(
            id=post_id,
            group = user_group,
            author = request_member,
        )
        if not group_post.exists():
            return Response({'message': 'Post Not Found Or Deleted'})
        obj = group_post.first()
        obj.delete()
        return Response({'message': 'Group Post Delete Successfully'}, status = status.HTTP_200_OK)
    return Response({"message": "You Not Member In This Group"}, status=status.HTTP_401_UNAUTHORIZED)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def lawyer_group_all_post_view(request, *args, **kwargs):
    group_posts = LawyerGroupPost.objects.all()
    serializer = LawyerGroupPostSerializer(group_posts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def lawyer_group_my_post_view(request, group_id,*args, **kwargs):
    user = request.user
    user_group = LawyerGroup.objects.filter(_id=group_id)
    if not user_group.exists():
        return Response({'message': 'Group Not Found Or Deleted'}, status=status.HTTP_404_NOT_FOUND)
    user_group = user_group.first()
    group_members = user_group.group_member.values()
    request_member = user_group.group_member.filter(user= user.id).first()
    group_posts = LawyerGroupPost.objects.filter(group=user_group, author=request_member)
    if not group_posts.exists():
        return Response({"message": "You don't any post in this group"}, status=status.HTTP_204_NO_CONTENT)
    serializer = LawyerGroupPostSerializer(group_posts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def group_feed_view(request,group_id ,*args, **kwargs):
    user = request.user
    qs = LawyerGroup.objects.filter(_id=group_id)
    if not qs.exists():
        return Response({'message': 'Group Not Exists'}, status=status.HTTP_404_NOT_FOUND)
    group = qs.first()
    group_members = group.group_member.values()
    feed_view_member = []
    group_member = [member['user_id'] for member in group_members]
    if user.id in group_member:
        for id in group_member:
            request_member = group.group_member.filter(user= id).first()
            feed_view_member.append(request_member)
        qs = LawyerGroupPost.objects.filter(group=group, author__in=feed_view_member)
        serializer = LawyerGroupPostSerializer(qs, many=True)
        
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response({'message': 'You are not Authorize'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def group_post_view_details(request, group_id ,post_id, *args, **kwargs):
    user = request.user
    group_query = LawyerGroup.objects.filter(_id = group_id)
    if not group_query.exists():
        return Response({"message": "Group Not Found"}, status=status.HTTP_404_NOT_FOUND)
    group = group_query.first()
    group_members = group.group_member.values()
    group_member = [member['user_id'] for member in group_members]
    print(group_member)
    if user.id in group_member:
        group_post_query = LawyerGroupPost.objects.filter(id=post_id,group=group)
        if not group_post_query.exists():
            return Response({"message": "Post Not Found"}, status=status.HTTP_404_NOT_FOUND)
        group_post = group_post_query.first()
        serializer = LawyerGroupPostSerializer(group_post, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({'message': 'You are not authorize'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def group_post_like_toggle_view(request, group_id ,post_id, *args, **kwargs):
    user = request.user
    group_query = LawyerGroup.objects.filter(_id = group_id)
    if not group_query.exists():
        return Response({"message": "Group Not Found"}, status=status.HTTP_404_NOT_FOUND)
    group = group_query.first()
    group_post_query = LawyerGroupPost.objects.filter(id=post_id,group=group)
    if not group_post_query.exists():
        return Response({"message": "Post Not Found"}, status=status.HTTP_404_NOT_FOUND)
    group_post = group_post_query.first()
    if user in group_post.likes.all():
        group_post.likes.remove(user)
        return Response({"message": "UnLike Done"}, status=status.HTTP_200_OK)
    else:
        group_post.likes.add(user)
        return Response({"message": "Like Done"}, status=status.HTTP_200_OK)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def group_post_opinion_view(request, group_id ,post_id, *args, **kwargs):
    user = request.user
    data = request.data
    group_query = LawyerGroup.objects.filter(_id = group_id)
    if not group_query.exists():
        return Response({"message": "Group Not Found"}, status=status.HTTP_404_NOT_FOUND)
    group = group_query.first()
    group_post_query = LawyerGroupPost.objects.filter(id=post_id,group=group)
    if not group_post_query.exists():
        return Response({"message": "Post Not Found"}, status=status.HTTP_404_NOT_FOUND)
    group_post = group_post_query.first()
    comment_add = LawyerGroupPostOpinion.objects.create(
        user = user,
        post = group_post,
        comment = data['comment']
    )
    group_post.opinion.add(comment_add)
    serializer = LawyerGroupPostOpinionSerializer(comment_add, many=False)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

