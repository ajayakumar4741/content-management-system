from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserRegistrationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name','password']
        extra_kwargs = {
            'password':{'write_only':True}
        }
        
    def create(self,validated_data):
        
        username = validated_data['username']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        password = validated_data['password']
        
        
        user = User.objects.create(username=username,first_name=first_name,last_name=last_name)
        
        user.set_password(password)
        user.save()
        UserProfile.objects.create(user=user)
        return user
    

    
class SimpleAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name']
        
class UserProfileSerializer(serializers.ModelSerializer):
    user = SimpleAuthorSerializer(read_only=True)
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'full_name', 'bio', 'profile_picture', 'facebook', 'twitter', 'instagram', 'youtube','job_title']
        
    
        
class UpdateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['full_name','bio','profile_picture','facebook','twitter','youtube','instagram']
    
class BlogSerializer(serializers.ModelSerializer):
    author = UserProfileSerializer(read_only=True)
    class Meta:
        model =Blog
        fields = '__all__'
        
class UserInfoSerializer(serializers.ModelSerializer):
    author_posts = serializers.SerializerMethodField()
    class Meta:
        model = UserProfile
        fields = ["id", "full_name","job_title", "bio", "profile_picture", "author_posts"]
        
    def get_author_posts(self,user):
        blogs = Blog.objects.filter(author=user)[:9]
        serializer = BlogSerializer(blogs,many=True)
        return serializer.data