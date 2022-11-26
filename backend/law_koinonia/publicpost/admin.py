from django.contrib import admin
from publicpost.models import Post, PostLike, PostOpinion


# Register your models here.
class PostLikeAdmin(admin.TabularInline):
    model = PostLike

class PostOpinionAdmin(admin.TabularInline):
    model = PostOpinion

class PostAdmin(admin.ModelAdmin):
    inlines = [PostLikeAdmin, PostOpinionAdmin]
    list_display = [ '__str__', 'author']
    search_fields = ['content', 'author__username', 'author__email']
    class Meta:
        model = Post


admin.site.register(Post, PostAdmin)

