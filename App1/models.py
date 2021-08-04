from django.db import models

class tb1(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Lamp1" 

class tb2(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Lamp2"

class tb3(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Lamp3"

class tb4(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Lamp4"
      
class tb5(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Lamp5"

class tb6(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Air_Conditioner"

class tb7(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Door1"

class tb8(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Car_Garage"

class tb9(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "Door2"
                                    
class tb10(models.Model):
    State = models.IntegerField()
    class Meta:
        db_table = "CCTV_Camera"                                    