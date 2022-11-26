from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()

class LawyerGroupMember(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lawyer_group_user', db_constraint=False)
    group = models.ForeignKey("LawyerGroup", on_delete=models.CASCADE, related_name='member_of_lawyer_group', db_constraint=False)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.group} => {self.user}"



class LawyerGroup(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    group_admin = models.ForeignKey(User, on_delete=models.CASCADE, db_constraint=False)
    group_name= models.CharField(max_length=100, blank=False, null=False)
    group_desc = models.TextField(blank=True)
    group_member = models.ManyToManyField(LawyerGroupMember, related_name='lawyer_group_member', blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.group_name)


class LawyerGroupPostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lawyer_group_post_liker', db_constraint=False)
    # group = models.ForeignKey(LawyerGroup, on_delete=models.CASCADE, related_name='lawyer_like_group', db_constraint=False)
    post = models.ForeignKey("LawyerGroupPost", on_delete=models.CASCADE, related_name='group_liked_post', db_constraint=False)
    date_created = models.DateTimeField(auto_now_add=True)

class LawyerGroupPostOpinion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='lawyer_group_post_opioner', db_constraint=False)
    # group = models.ForeignKey(LawyerGroup, on_delete=models.CASCADE, related_name='lawyer_like_group', db_constraint=False)
    post = models.ForeignKey("LawyerGroupPost", on_delete=models.CASCADE, related_name='group_opnion_post', db_constraint=False)
    comment = models.CharField(max_length=100, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)


class LawyerGroupPost(models.Model):
    group = models.ForeignKey(LawyerGroup, on_delete=models.CASCADE, null=True, blank=True, db_constraint=False)
    author = models.ForeignKey(LawyerGroupMember, on_delete=models.CASCADE, blank=True ,null=True, db_constraint=False)
    caption = models.CharField(max_length=250, blank=True)
    likes = models.ManyToManyField(User,  blank=True, through=LawyerGroupPostLike)
    opinion = models.ManyToManyField(LawyerGroupPostOpinion, related_name='lawyer_group_opinioner', blank=True)
    file = models.FileField(upload_to='client/images/group_storage', blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.upload_date)

    
    @classmethod
    def create_from_dict(cls, d):
        return cls.objects.create()