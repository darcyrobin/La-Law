from django.contrib import admin
from news.models import News, News_Category, NewsLike, NewsOpinion

# Register your models here.

class NewsLikeAdmin(admin.TabularInline):
    model = NewsLike

class NewsOpinionAdmin(admin.TabularInline):
    model = NewsOpinion

class NewsAdmin(admin.ModelAdmin):
    inlines = [NewsLikeAdmin, NewsOpinionAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = News

admin.site.register(News, NewsAdmin)
admin.site.register(News_Category)