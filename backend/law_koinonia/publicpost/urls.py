from django.urls import path
from publicpost import views

urlpatterns = [
    path('', views.intro, name="post"),
    path('create', views.post_create, name="post"),
    path('posts', views.user_feed_view, name="posts"),
    path('admin/allposts', views.post_list_view, name="post-list"),
    path('myposts', views.my_post_list_view, name="my-post-list"),
    path('posts-upload/', views.uploadFilePost, name='post-upload'),
    path('posts/<str:post_id>', views.post_detail_view, name="post-details"),
    path('posts/edit/<str:post_id>', views.post_edit, name="post-edit"),
    path('posts/like/<str:post_id>', views.post_like_toggle_view, name="post-like"),
    path('posts/opinion/<str:post_id>', views.post_opinion_view, name="post-opinion"),
    path('posts/delete/<str:post_id>', views.post_delete_view, name="Home"),
]