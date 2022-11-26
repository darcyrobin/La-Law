# from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from store.models import Case, Case_Category, Case_Division
from store.serializer import (CaseCategorySerializer, CaseDivisionSerializer,
                              CaseSerializer)


# Create your views here.
@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Store"}, status=status.HTTP_200_OK)

# Case Category ========================

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def case_category_view(request, *args, **kwargs):
    qs = Case_Category.objects.all()
    serializer = CaseCategorySerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def case_category_create(request, *args, **kwargs):
    serializer = CaseCategorySerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(data=serializer.data, status = status.HTTP_201_CREATED)
    return Response({'message': 'Not Create Now '}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def case_category_edit(request, category_id ,*args, **kwargs):
    qs = Case_Category.objects.filter(id=category_id)
    data = request.data
    if not qs.exists():
        return Response({"message": "Category not exist"}, status=404)
    obj = qs.first()
    serializer = CaseCategorySerializer(obj, many=False)
    obj.name = data['name']
    obj.save()
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def case_category_delete(request, category_id ,*args, **kwargs):
    qs = Case_Category.objects.filter(id=category_id)
    if not qs.exists():
        return Response({"message": "Doesn't Exit"}, status=404)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Category Removed"}, status=200)


# Case Division ======================

@api_view(['GET'])
@permission_classes([IsAdminUser])
def case_division_view(request, *args, **kwargs):
    qs = Case_Division.objects.all()
    serializer = CaseDivisionSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_302_FOUND)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def case_division_create(request, *args, **kwargs):
    serializer = CaseDivisionSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(data=serializer.data, status = status.HTTP_201_CREATED)
    return Response({'message': 'Not Create Now '}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def case_division_edit(request, division_id ,*args, **kwargs):
    qs = Case_Division.objects.filter(id=division_id)
    data = request.data
    if not qs.exists():
        return Response({"message": "Division not exist"}, status=404)
    obj = qs.first()
    serializer = CaseDivisionSerializer(obj, many=False)
    obj.name = data['name']
    obj.save()
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def case_division_delete(request, division_id ,*args, **kwargs):
    qs = Case_Division.objects.filter(id=division_id)
    if not qs.exists():
        return Response({"message": "Doesn't Exit"}, status=404)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Division Removed"}, status=200)


# Case ===================================


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def case_create(request, *args, **kwargs):
    serializer = CaseSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(data=serializer.data, status=201)
    return Response({"message": "Not Valid"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def case_list_view(request, *args, **kwargs):
    user = request.user
    case_list = Case.objects.filter(user=user)
    if not case_list.exists():
        return Response({"message": "No Case Record"}, status=404)
    serializer = CaseSerializer(case_list, many=True)
    return Response(serializer.data, status=201)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def case_update(request, case_id, *args, **kwargs):
    user = request.user
    case = Case.objects.filter(_id=case_id, user=user)
    data = request.data
    if not case.exists():
        return Response({"message": "Case not exist or you are not authenticate"}, status=404)
    obj = case.first()
    serializer = CaseSerializer(obj, many=False)
    obj.case_number = data['case_number']
    obj.case_title = data['case_title']
    obj.case_category = data['case_category']
    obj.case_details = data['case_details']
    obj.complainant = data['complainant']
    obj.defendant = data['defendant']
    obj.division = data['division']
    obj.case_respondent = data['case_respondent']
    obj.save()
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadCaseFile(request):
    data = request.data
    case_id = data['case_id']
    case = Case.objects.get(_id=case_id)
    case.profile_pic = request.FILES.get('case_file')
    case.save()
    return Response('File upload Done')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def case_details_view(request,case_id ,*args, **kwargs):
    qs = Case.objects.filter(_id=case_id, user=request.user)
    if not qs.exists():
        return Response({"message": "You are not authorize or Case not exits"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    serializer  = CaseSerializer(obj, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])
def case_delete(request,case_id ,*args, **kwargs):
    qs = Case.objects.filter(_id=case_id, user=request.user)
    if not qs.exists():
        return Response({"message": "You are not authorize or Case not exits"}, status=status.HTTP_404_NOT_FOUND)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Case Removed"}, status=200)


