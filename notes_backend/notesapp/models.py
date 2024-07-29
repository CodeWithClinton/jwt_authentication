from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Note(models.Model):

    CATEGORY = (('BUSINESS', 'Business'),
                ('PERSONAL', 'Personal'),
                ('IMPORTANT', 'Important'))

    user = models.ForeignKey(User, related_name="notes", on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=100)
    body = models.TextField()
    category = models.CharField(max_length=15, choices=CATEGORY, default="PERSONAL")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return self.title