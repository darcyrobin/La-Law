from authentication.models import User
from news.models import News, News_Category, NewsOpinion
from rest_framework import serializers


class NewsOpinionSerializer(serializers.ModelSerializer):
    
    opioner = serializers.SerializerMethodField(read_only=True)
    news_id = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = NewsOpinion
        fields = ['user', 'news_id' ,'opioner', 'comment']

    def get_opioner(self, obj):
        return obj.user.username
    def get_news_id(self, obj):
        return obj.post._id

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']

    
        

class NewsSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    opinion_count = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    user_id = serializers.SerializerMethodField(read_only=True)
    opinion = NewsOpinionSerializer(many=True, read_only=True)
    class Meta:
        model = News
        fields = ['_id','user','user_id','title', 'news_category' ,'likes', 'opinion', 'opinion_count', 'news_details', 'image', 'video', 'country']
    
    def get__id(self, obj):
        return obj._id

    def get_likes(self, obj):
        return obj.likes.count()
    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        user_name = f"{serializer.data['first_name']} {serializer.data['last_name']}"
        return user_name
    def get_opinion_count(self, obj):
        return obj.opinion.count()
    def user_id(self, obj):
        return obj.user.id

class NewsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = News_Category
        fields = '__all__'