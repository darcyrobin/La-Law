from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


# Create your models here.
class PostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liker')
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name='liked_post')
    date_created = models.DateTimeField(auto_now_add=True)

class PostOpinion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='opioner')
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name='opnion_post')
    comment = models.CharField(max_length=100, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

from django.db.models import Q


class PostQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username__iexact=username)
    def feed(self, user):
        profiles_exists = user.following.exists()
        followed_user_id = []
        if profiles_exists:
            followed_user_id = user.following.values_list("user__id", flat=True)
        return self.filter(
            Q(author__id__in=followed_user_id) |
            Q(author=user)
        ).distinct().order_by("-upload_date")
class PostManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return PostQuerySet(self.model, using=self._db)

    def feed(self, user):
        return self.get_queryset().feed(user)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post')
    likes = models.ManyToManyField(User, related_name='post_user_likes', blank=True, through=PostLike)
    opinion = models.ManyToManyField(PostOpinion, related_name='post_user_opinion', blank=True)
    content = models.CharField(max_length=500, blank=True)
    file = models.FileField(upload_to='client/images/file',default='', blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    objects = PostManager()

    def __str__(self):
        return str(self.content)

    class Meta:
        ordering = ['-id']



