from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index),
    path('change_state1/<cid>', views.ChangeState1),
    path('change_state2/<cid>', views.ChangeState2),
    path('change_state3/<cid>', views.ChangeState3),
    path('change_state4/<cid>', views.ChangeState4),
    path('change_state5/<cid>', views.ChangeState5),
    path('change_state6/<cid>', views.ChangeState6),
    path('change_state7/<cid>', views.ChangeState7),
    path('change_state8/<cid>', views.ChangeState8),
    path('change_state9/<cid>', views.ChangeState9),
    path('change_state10/<cid>', views.ChangeState10),
    path('api/auth/4615d8d6-8b66-41b4-81f4-6502a2fee7ab', views.API)
]