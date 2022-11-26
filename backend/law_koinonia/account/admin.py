from account.models import FollowerRelation, Profile
from django.contrib import admin


# Register your models here.
class PostFollowerRelation(admin.TabularInline):
    model = FollowerRelation

class ProfileAdmin(admin.ModelAdmin):
    inlines = [PostFollowerRelation]
    list_display = ['__str__', 'username']
    search_fields = ['author__username', 'author__email']
    class Meta:
        model = Profile

admin.site.register(Profile, ProfileAdmin)
