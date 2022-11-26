from django.urls import path
from store import views

urlpatterns = [
    path('', views.intro, name="Store"),
    path('case', views.case_list_view, name="case_view"),
    path('case-create', views.case_create, name="case_create"),
    path('case/<str:case_id>', views.case_details_view, name="case_details_view"),
    path('case/<str:case_id>/delete', views.case_delete, name="case_details_view"),
    path('case/update/<str:case_id>', views.case_update, name="case_update"),
    path('casefile-upload/', views.uploadCaseFile, name="case_file_upload"),

    path('case-category', views.case_category_view, name="view-case-category"),
    path('case-category/add', views.case_category_create, name="add-case-category"),
    path('case-category/edit/<str:category_id>', views.case_category_edit, name="edit-case-category"),
    path('case-category/delete/<str:category_id>', views.case_category_delete, name="edit-case-delete"),
    path('case-division', views.case_division_view, name="view-case-division"),
    path('case-division/add', views.case_division_create, name="add-case-division"),
    path('case-division/edit/<str:division_id>', views.case_division_edit, name="edit-case-division"),
    path('case-division/delete/<str:division_id>', views.case_division_delete, name="delete-case-division"),
]