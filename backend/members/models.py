from django.db import models

class Member(models.Model):
    fullname = models.CharField(max_length=255)
    role = models.CharField(max_length=55)
    
    def __srt__(self):
        return self.fullname
