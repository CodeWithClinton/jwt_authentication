from django.urls import path 
from . import views 


urlpatterns = [
    path("notes/", views.notes, name="notes"),
    path("register/", views.register_user, name="register-user"),
    path("get-username/", views.get_username, name='get-username')

]


# api endpoints:

# get and create notes - http://127.0.0.1:8000/notes/
# user login - http://127.0.0.1:8000/token/
# refresh token - http://127.0.0.1:8000/token/refresh/
# user registration - http://127.0.0.1:8000/register/
# get username - http://127.0.0.1:8000/get-username/
