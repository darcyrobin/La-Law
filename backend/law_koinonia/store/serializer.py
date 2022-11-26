from rest_framework import serializers
from store.models import Case, Case_Category, Case_Division


class CaseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Case_Category
        fields = '__all__'

class CaseDivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case_Division
        fields = '__all__'

class CaseSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Case
        fields = '__all__'
    def get_user(self, obj):
        return obj.user.username

