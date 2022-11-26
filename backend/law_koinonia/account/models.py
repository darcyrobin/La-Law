from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
User = get_user_model()

class FollowerRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey("Profile", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.ImageField(upload_to='client/images/profile_pics/', blank=True, default='client/default/sample.png')
    username=models.CharField(max_length=40,unique=True)
    email=models.CharField(max_length=80,unique=True)
    phone_number=PhoneNumberField(unique=True,null=False,blank=False)
    followers = models.ManyToManyField(User, related_name='following', blank=True)
    description = models.TextField(blank=True)
    dob = models.DateField(blank=True, null=True)
    designation = models.CharField(max_length=50, blank=True)
    court = models.CharField(max_length=250, blank=True)
    barId = models.CharField(max_length=250, blank=True)
    website = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.full_name}'s Profile"

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if instance.practice_court == True:
        if created:
            Profile.objects.create(user=instance , full_name=f"{instance.first_name} {instance.last_name}", court=instance.current_status, barId="Waiting For Bar Exam", username = instance.username, email = instance.email, phone_number = instance.phone_number)
    else:
        if created:
            Profile.objects.create(user=instance , full_name=f"{instance.first_name} {instance.last_name}", barId=instance.current_status,court = "Court will be added Soon", username = instance.username, email = instance.email, phone_number = instance.phone_number)

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()


