from django.urls import path
from .views import MemberListCreateView, MemberDetailView

urlpatterns = [
    path('members/', MemberListCreateView.as_view(), name='member-list'),
    path('member/<int:pk>/', MemberDetailView.as_view(), name='member'),
]