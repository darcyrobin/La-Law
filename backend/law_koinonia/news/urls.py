from django.urls import path
from news import views

urlpatterns = [
    path('', views.intro, name="news"),
    # news category ===================>
    path('create-category', views.news_category_create, name="news-category-create"),
    path('category', views.news_category_view, name="news-category-view"),
    path('category/edit/<str:category_id>', views.news_category_update, name="news-category-update"),
    path('category/delete/<str:category_id>', views.news_category_delete, name="news-category-delete"),
    # news  ===================>
    path('create', views.news_create, name="news-create"),
    path('all', views.get_news, name="news-all"),
    path('<str:news_id>', views.get_news_details, name="news-details"),
    path('<str:news_id>/edit', views.news_update, name="news-update"),
    path('<str:news_id>/delete', views.news_delete, name="news-delete"),
    path('<str:news_id>/like', views.news_like_toggle_view, name="news-like"),
    path('<str:news_id>/opinion', views.news_opinion_create, name="news-opinion"),
    path('newsfile-upload', views.uploadNewsFile, name="upload-news-photo"),

]