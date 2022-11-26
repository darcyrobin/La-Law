from lawyer_group.models import (LawyerGroup, LawyerGroupMember,
                                 LawyerGroupPost, LawyerGroupPostOpinion)
from rest_framework import serializers


class LawyerGroupMemberSerializer(serializers.ModelSerializer):
    member = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = LawyerGroupMember
        fields = ['user', 'member', 'group']
    def get_member(self, obj):
        return obj.user.username

class LawyerGroupSerializer(serializers.ModelSerializer):
    group_admin = serializers.SerializerMethodField(read_only=True)
    group_member = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = LawyerGroup
        fields = '__all__'
    
    def get_group_admin(self, obj):
        return obj.group_admin.username
    
    def get_group_member(self, obj):
        serializers = LawyerGroupMemberSerializer(obj.group_member, many=True)
        # return obj.group_member
        return serializers.data
    
class LawyerGroupPostOpinionSerializer(serializers.ModelSerializer):
    opioner = serializers.SerializerMethodField(read_only=True)
    group_post_id = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = LawyerGroupPostOpinion
        fields = ['user', 'group_post_id', 'opioner', 'comment']

    def get_opioner(self, obj):
        return obj.user.username
        
    def get_group_post_id(self, obj):
        return obj.post.id

class LawyerGroupPostSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField(read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    opinion = LawyerGroupPostOpinionSerializer(many=True, read_only=True)
    opinion_count = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = LawyerGroupPost
        fields = ['group', 'author', 'caption', 'file', 'likes', 'opinion_count', 'opinion', 'upload_date', 'update_date']
    def get_author(self, obj):
        author_obj = obj.author
        serializer = LawyerGroupMemberSerializer(author_obj, many=False)
        return serializer.data
    def get_likes(self, obj):
        return obj.likes.count()
    def get_opinion_count(self, obj):
        return obj.opinion.count()
    
    


    

