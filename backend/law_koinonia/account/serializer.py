from account.models import Profile
from rest_framework import serializers


class FollwingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'full_name', 'profile_pic', 'username']

class ProfileSerializer(serializers.ModelSerializer):
    followers_count = serializers.SerializerMethodField(read_only=True)
    following_count = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Profile
        # fields = '__all__'
        fields = ['id', 'full_name', 'profile_pic', 'username','email','followers', 'following', 'followers_count','following_count', 'phone_number', 'description', 'dob', 'designation', 'court', 'barId', 'website', 'facebook']
    
    def get_followers_count(self, obj):
        return obj.followers.count()
    
    def get_following_count(self, obj):
        return obj.user.following.count()
    
    def get_following(self, obj):
        following =  obj.user.following.all()
        serializers = FollwingSerializer(following, many=True)
        return serializers.data