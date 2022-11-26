from django.contrib import admin
from store.models import Case, Case_Category, Case_Division

# Register your models here.
admin.site.register(Case_Category)
admin.site.register(Case_Division)
admin.site.register(Case)
