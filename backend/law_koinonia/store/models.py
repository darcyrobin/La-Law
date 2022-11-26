from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()
class Case_Category(models.Model):
    name = models.CharField(max_length=60, blank=False, null=False)
    parent = models.ForeignKey('self', related_name='case_category_children', on_delete=models.CASCADE, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'Categories'

class Case_Division(models.Model):
    name = models.CharField(max_length=60, blank=False, null=False)
    parent = models.ForeignKey('self', related_name='case_division_children', on_delete=models.CASCADE, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'Case_Divisions'

class Case(models.Model):
    CASE_RESPONSE=(
        ('FIR/PRIVATE_COMPLAINT', 'fir/private_complaint'),
        ('ACCUSED_BROUGHT_BEFORE_THE_COURT', 'accused_brought_before_the_court'),
        ('PLEAD_GUILTY', 'plead_guilty'),
        ('PROSECUTION_EVIDENCE', 'prosecution_evidence'),
        ('EXAMINATION_OF_THE_ACCUSED', 'examination_of_the_accused'),
        ('DEFENSE_EVIDENCE', 'defense_evidence'),
        ('FIXED_FOR_HEARING', 'fixed_for_hearing'),
        ('JUDGEMENT', 'judgement'),
        
    )
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    case_number = models.CharField(max_length=100, null=False, blank=False)
    case_title = models.CharField(max_length=100, null=True, blank=True)
    case_category = models.CharField(max_length=200, blank=True, null=True)
    case_details = models.TextField(max_length=500, null=True, blank=True)
    complainant = models.CharField(max_length=100, null=True, blank=True)
    defendant = models.CharField(max_length=100, null=True, blank=True)
    case_docs = models.FileField(upload_to="client/images/case_file", blank=True)
    division = models.CharField(max_length=200, blank=True, null=True)
    case_respondent = models.CharField(max_length=50, choices = CASE_RESPONSE, default=CASE_RESPONSE[0][0])
    createAt = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.case_number

