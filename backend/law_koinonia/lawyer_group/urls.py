from django.urls import path
from lawyer_group import views

urlpatterns = [
    path('', views.all_group, name="lawyer-group"),
    path('post-create/<str:group_id>', views.lawyer_group_post_create, name="lawyer-group-post-create"),
    path('update-post/<str:post_id>/group/<str:group_id>', views.lawyer_group_post_update, name="lawyer-group-post-update"),
    path('delete-post/<str:post_id>/group/<str:group_id>', views.lawyer_group_post_delete, name="lawyer-group-post-delete"),
    path('admin/posts', views.lawyer_group_all_post_view, name="lawyer-group-all-posts"),
    path('myposts/<str:group_id>', views.lawyer_group_my_post_view, name="lawyer-group-my-posts"),
    path('create-group', views.lawyer_group_create, name="lawyer-group-create"),
    path('add-group-member/group/<str:group_id>/member/<str:member_id>', views.add_group_member, name="lawyer-group-member-add"),
    path('remove-group-member/group/<str:group_id>/member/<str:member_id>', views.remove_group_member, name="lawyer-group-member-remove"),
    path('<str:group_id>', views.group_details, name="lawyer-group-view"),
    path('<str:group_id>/update', views.group_update, name="lawyer-group-update"),
    path('<str:group_id>/delete', views.group_delete, name="lawyer-group-delete"),
    path('<str:group_id>/post', views.group_feed_view, name="lawyer-group-post-view"),
    path('<str:group_id>/post/<str:post_id>', views.group_post_view_details, name="lawyer-group-post-view-details"),
    path('<str:group_id>/post/<str:post_id>/react', views.group_post_like_toggle_view, name="lawyer-group-post-like"),
    path('<str:group_id>/post/<str:post_id>/opinion', views.group_post_opinion_view, name="lawyer-group-post-opinion"),
]