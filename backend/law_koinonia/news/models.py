from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()

class NewsLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='news_liker')
    post = models.ForeignKey("News", on_delete=models.CASCADE, related_name='news_liked_post')
    date_created = models.DateTimeField(auto_now_add=True)

class NewsOpinion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='news_opioner')
    post = models.ForeignKey("News", on_delete=models.CASCADE, related_name='news_opnion_post')
    comment = models.CharField(max_length=100, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)


class News_Category(models.Model):
    name = models.CharField(max_length=60, blank=False, null=False)
    parent = models.ForeignKey('self', related_name='news_category_children', on_delete=models.CASCADE, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'Categories'


class News(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250, blank=False, null=False )
    news_category = models.CharField(max_length=250, blank=False, null=False)
    likes = models.ManyToManyField(User, related_name='news_user_likes', blank=True, through=NewsLike)
    opinion = models.ManyToManyField(NewsOpinion, related_name='news_user_opinion', blank=True)
    news_details = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='editor/news/images', blank=True, null=True, default='editor/news/default/news_sample.jpg')
    video = models.URLField(blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.title)
    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'News'


