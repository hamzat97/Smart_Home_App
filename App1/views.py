from django.shortcuts import render
from App1.models import tb1,tb2,tb3,tb4,tb5,tb6,tb7,tb8,tb9,tb10
from django.http import JsonResponse
from django.http import HttpResponse

def Index(request):
    S1 = tb1.objects.last()
    if S1 is None:
        p = tb1(id=1, State=0) 
        p.save()
        S1 = tb1.objects.last()   
    S2 = tb2.objects.last()
    if S2 is None:
        p = tb2(id=1, State=0) 
        p.save()
        S2 = tb2.objects.last() 
    S3 = tb3.objects.last()
    if S3 is None:
        p = tb3(id=1, State=0) 
        p.save()
        S3 = tb3.objects.last() 
    S4 = tb4.objects.last()
    if S4 is None:
        p = tb4(id=1, State=0) 
        p.save()
        S4 = tb4.objects.last() 
    S5 = tb5.objects.last()
    if S5 is None:
        p = tb5(id=1, State=0) 
        p.save()
        S5 = tb5.objects.last() 
    S6 = tb6.objects.last()
    if S6 is None:
        p = tb6(id=1, State=0) 
        p.save()
        S6 = tb6.objects.last() 
    S7 = tb7.objects.last()
    if S7 is None:
        p = tb7(id=1, State=0) 
        p.save()
        S7 = tb7.objects.last() 
    S8 = tb8.objects.last()
    if S8 is None:
        p = tb8(id=1, State=0) 
        p.save()
        S8 = tb8.objects.last() 
    S9 = tb9.objects.last()
    if S9 is None:
        p = tb9(id=1, State=0) 
        p.save()
        S9 = tb9.objects.last() 
    S10 = tb10.objects.last()
    if S10 is None:
        p = tb10(id=1, State=0) 
        p.save()
        S10 = tb10.objects.last() 
    context = {"state1": S1, "state2": S2, "state3": S3, "state4": S4, "state5": S5, "state6": S6, "state7": S7, "state8": S8, "state9": S9, "state10": S10} 
    return render(request, "index.html", context)

def ChangeState1(request,cid):
    CT = tb1.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")

def ChangeState2(request,cid):
    CT = tb2.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")     

def ChangeState3(request,cid):
    CT = tb3.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")      

def ChangeState4(request,cid):
    CT = tb4.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command") 

def ChangeState5(request,cid):
    CT = tb5.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")  

def ChangeState6(request,cid):
    CT = tb6.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command") 

def ChangeState7(request,cid):
    CT = tb7.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")  

def ChangeState8(request,cid):
    CT = tb8.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command") 

def ChangeState9(request,cid):
    CT = tb9.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")  

def ChangeState10(request,cid):
    CT = tb10.objects.get(id=cid)
    if request.GET.get("cmd"):
        CT.State = request.GET.get("cmd")
        CT.save()
        print("Done successfully")
        return HttpResponse("Done successfully")
    print("There is no Command !!!")   
    return HttpResponse("There is no Command")      

def API(request):
    S1 = tb1.objects.last()
    S2 = tb2.objects.last()
    S3 = tb3.objects.last()
    S4 = tb4.objects.last()
    S5 = tb5.objects.last()
    S6 = tb6.objects.last()
    S7 = tb7.objects.last()
    S8 = tb8.objects.last()
    S9 = tb9.objects.last()
    S10 = tb10.objects.last()
    states = {
      'lamp1': S1.State,
      'lamp2': S2.State,
      'lamp3': S3.State,
      'lamp4': S4.State,
      'lamp5': S5.State,
      'air conditioner': S6.State,
      'door1': S7.State,
      'car garage': S8.State,
      'door2': S9.State,
      'cctv camera': S10.State
    }
    return JsonResponse(states)    
