from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils import timezone

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    full_name = models.CharField(max_length=200)
    bio = models.TextField(null=True,blank=True)
    profile_picture = models.ImageField(upload_to='profile',blank=True,null=True)
    facebook = models.URLField(blank=True,null=True,max_length=255)
    twitter = models.URLField(blank=True,null=True,max_length=255)
    instagram = models.URLField(blank=True,null=True,max_length=255)
    youtube = models.URLField(blank=True,null=True,max_length=255)
    
    def __str__(self):
        return self.full_name
    
class Blog(models.Model):
    CATEGORY = (("Frontend", "Frontend"),
                ("Backend", "Backend"),
                ("Fullstack", "Fullstack"),
                ("Design", "Design"),
                ("Blockchain", "Blockchain")
                )
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True,blank=True,max_length=255)
    content = models.TextField()
    author = models.ForeignKey(User,on_delete=models.SET_NULL,related_name='blogs',null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True,null=True)
    is_draft = models.BooleanField(default=True)
    category = models.CharField(max_length=255,choices=CATEGORY,blank=True,null=True)
    featured_image = models.ImageField(upload_to='blog_img',blank=True,null=True)
    
    class Meta:
        ordering = ['-published_at']
        
    def __str__(self):
        return self.title
    
    def save(self,*args,**kwargs):
        base_slug = slugify(self.title)
        slug = base_slug
        num = 1
        while Blog.objects.filter(slug=slug).exists():
            slug = f'{base_slug}-{num}'
            num += 1
        self.slug = slug
        
        if not self.is_draft and self.published_at is None:
            self.published_at = timezone.now()
        super().save(*args,**kwargs)
        
