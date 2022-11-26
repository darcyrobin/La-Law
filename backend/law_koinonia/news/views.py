# from django.shortcuts import render
from news.models import News, News_Category, NewsOpinion
from news.serializer import (NewsCategorySerializer, NewsOpinionSerializer,
                             NewsSerializer)
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import (IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response


def get_paginated_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = NewsSerializer(paginated_qs, many=True)
    return paginator.get_paginated_response(serializer.data)

# Create your views here.
@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello News"}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def news_create(request, *args, **kwargs):
    serializer = NewsSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(data=serializer.data, status = status.HTTP_201_CREATED)
    return Response({}, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def get_news(request, *args, **kwargs):
    qs = News.objects.all()
    return get_paginated_queryset_response(qs, request)


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def get_news_details(request,news_id, *args, **kwargs):
    news_qs = News.objects.filter(_id=news_id)
    if not news_qs.exists():
        return Response({'message': 'News Not Found'}, status=status.HTTP_404_NOT_FOUND)
    news = news_qs.first()
    serializer  = NewsSerializer(news, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def news_update(request, news_id, *args, **kwargs):
    news = News.objects.filter(_id=news_id)
    data = request.data
    if not news.exists():
        return Response({"message": "News not exist "}, status=404)
    obj = news.first()
    serializer = NewsSerializer(obj, many=False)
    obj.title = data['title']
    obj.news_category = data['news_category']
    obj.news_details = data['news_details']
    obj.video = data['video']
    obj.country = data['country']
    obj.save()
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def news_delete(request,news_id ,*args, **kwargs):
    qs = News.objects.filter(_id=news_id)
    if not qs.exists():
        return Response({"message": "News not exits"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    obj.delete()
    return Response({"message": "News Removed"}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadNewsFile(request):
    data = request.data
    news_id = data['news_id']
    news = News.objects.get(_id=news_id)
    news.profile_pic = request.FILES.get('news_file')
    news.save()
    return Response('News File upload Done')

# News Like Opinion ====================>
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def news_like_toggle_view(request, news_id, *args, **kwargs):
    qs = News.objects.filter(_id = news_id)
    if not qs.exists():
        return Response({"message": "News Not Found"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    if request.user in obj.likes.all():
        obj.likes.remove(request.user)
        return Response({"message": "UnLike Done"}, status=status.HTTP_200_OK)
    else:
        obj.likes.add(request.user)
        return Response({"message": "Like Done"}, status=status.HTTP_200_OK)
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def news_opinion_create(request, news_id, *args, **kwargs):
    qs = News.objects.filter(_id= news_id)
    if not qs.exists():
        return Response({"message": "News Not Found"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    user = request.user
    data = request.data
    comment_add = NewsOpinion.objects.create(
        user = user,
        post = obj,
        comment = data['comment']
    )
    obj.opinion.add(comment_add)
    serializer = NewsOpinionSerializer(comment_add, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


# news category ===================>

@api_view(['POST'])
@permission_classes([IsAdminUser])
def news_category_create(request, *args, **kwargs):
    serializer = NewsCategorySerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(data=serializer.data, status = status.HTTP_201_CREATED)
    return Response({"message": "Invalid"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def news_category_view(request, *args, **kwargs):
    print("This is purpose", request.user.id)
    qs = News_Category.objects.all()
    serializer = NewsCategorySerializer(qs, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def news_category_update(request, category_id, *args, **kwargs):
    news = News_Category.objects.filter(id=category_id)
    data = request.data
    if not news.exists():
        return Response({"message": "Category not exist "}, status=404)
    obj = news.first()
    serializer = NewsCategorySerializer(obj, many=False)
    obj.name = data['name']
    obj.save()
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def news_category_delete(request,category_id ,*args, **kwargs):
    qs = News_Category.objects.filter(id=category_id)
    if not qs.exists():
        return Response({"message": "News Category not exits"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    obj.delete()
    return Response({"message": "News Category Removed"}, status=status.HTTP_200_OK)