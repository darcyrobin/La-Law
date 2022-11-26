# from django.shortcuts import render
from publicpost.models import Post, PostOpinion
from publicpost.serializer import PostOpinionSerializer, PostSerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import (IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response

# Create your views here.

def get_paginated_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = PostSerializer(paginated_qs, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Public Post"}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_create(request, *args, **kwargs):
    data = request.data
    serializer = PostSerializer(data=data, many=False)
    print("This is POst From ", data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(author=request.user)
        return Response(data=serializer.data, status = 201)
    return Response({}, status=400)


@api_view(['GET'])
def post_list_view(request, *args, **kwargs):
    qs = Post.objects.all()
    username = request.GET.get('username')
    if username != None:
        qs = qs.by_username(username)
    # serializer = PostSerializer(qs, many=True)
    return get_paginated_queryset_response(qs, request)


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def user_feed_view(request ,*args, **kwargs):
#     user = request.user
#     profiles_exists = user.following.exists()
#     profiles = user.following.all()
#     followed_user_id = []
#     if profiles_exists:
#         followed_user_id = [x.user.id for x in profiles]
#     followed_user_id.append(user.id)
#     qs = Post.objects.filter(author__id__in=followed_user_id).order_by("-upload_date")
#     serializer = PostSerializer(qs, many=True)
#     return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_feed_view(request ,*args, **kwargs):
    user = request.user
    qs = Post.objects.feed(user)
    return get_paginated_queryset_response(qs, request)
    # return Response(serializer.data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly, IsAuthenticated])
def my_post_list_view(request):
    user = request.user
    qs = Post.objects.filter(author=user)
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def post_detail_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id=post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = PostSerializer(obj, many=False)
    return Response(serializer.data, status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadFilePost(request):
    data = request.data
    file_id = data['file_id']
    post = Post.objects.get(id=file_id)
    post.file = request.FILES.get('file')
    post.save()
    return Response('File is upload')



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def post_edit(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id=post_id, author=request.user)
    data = request.data
    if not qs.exists():
        return Response({"message": "Post not exist or you are not authenticate"}, status=404)
    obj = qs.first()
    serializer = PostSerializer(obj, many=False)
    obj.content = data['content']
    obj.save()
    return Response(serializer.data, status=200)
    


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def post_delete_view(request, post_id, *args, **kwargs):
    print(request.user)
    qs = Post.objects.filter(id=post_id)
    if not qs.exists():
        return Response({"message": "Post doesn't exit"}, status=404)
    qs = qs.filter(author=request.user)
    if not qs.exists():
        return Response({"message": "You can't delete this Post"}, status=401)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Post Removed"}, status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_like_toggle_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id = post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    if request.user in obj.likes.all():
        obj.likes.remove(request.user)
        return Response({"message": "UnLike Done"}, status=status.HTTP_200_OK)
    else:
        obj.likes.add(request.user)
        return Response({"message": "Like Done"}, status=status.HTTP_200_OK)
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_opinion_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id= post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    user = request.user
    data = request.data
    comment_add = PostOpinion.objects.create(
        user = user,
        post = obj,
        comment = data['comment']
    )
    obj.opinion.add(comment_add)
    serializer = PostOpinionSerializer(comment_add, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

