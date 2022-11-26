# from django.shortcuts import render
from account.models import Profile
from account.serializer import ProfileSerializer
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

# Create your views here.

User = get_user_model()

@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Account"}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    user = request.user
    # print(user.username, 'This is')
    profile = Profile.objects.filter(user=user)
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    data = request.data
    profile = Profile.objects.get(user=request.user)
    serializer = ProfileSerializer(profile, many=False)
    profile.description = data['description']
    profile.dob = data['dob']
    profile.designation = data['designation']
    profile.website = data['website']
    profile.facebook = data['facebook']
    profile.save()
    return Response(data=serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_allprofile(request):
    profile = Profile.objects.all()
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadProfileImage(request):
    data = request.data
    profile_id = data['profile_id']
    profile = Profile.objects.get(id=profile_id)
    profile.profile_pic = request.FILES.get('profile_image')
    profile.save()
    return Response('Profile pic upload')

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username ,*args, **kwargs):
    current_user = request.user
    to_follow_user_qs = User.objects.filter(username=username)
    if current_user.username == username:
        my_profile = Profile.objects.filter(user__username=current_user.username).first()
        my_followers = my_profile.followers.all()
        return Response({"my followers count": my_followers.count()}, status=status.HTTP_200_OK)
    if not to_follow_user_qs.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    to_follow_user = to_follow_user_qs.first()
    profile = Profile.objects.filter(user__username=username).first()
    if current_user in profile.followers.all():
        profile.followers.remove(current_user)
    else:
        profile.followers.add(current_user)
    current_follower_qs = profile.followers.all()
    return Response({"followers": current_follower_qs.count()}, status=status.HTTP_400_BAD_REQUEST)
    





