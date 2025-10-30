from django.db import models

# Create your models here.

class UserProfile(models.Model):
    full_name = models.CharField(max_length=200)
    bio = models.TextField(null=True,blank=True)
    profile_picture = models.ImageField(upload_to='profile',blank=True,null=True)
    facebook = models.URLField(blank=True,null=True,max_length=255)
    twitter = models.URLField(blank=True,null=True,max_length=255)
    instagram = models.URLField(blank=True,null=True,max_length=255)
    youtube = models.URLField(blank=True,null=True,max_length=255)
    
    def __str__(self):
        return self.full_name