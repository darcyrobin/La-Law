# from django.shortcuts import render
# from pusher import pusher_client
# Create your views here.
# @api_view(['GET'])
# def intro(request):
#     return Response(data={"message": "Hello Chat"}, status=status.HTTP_200_OK)
import pusher
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

pusher_client = pusher.Pusher(
  app_id='1509330',
  key='c9ec9500a03d93ad9099',
  secret='1e18470b7cdd32cb16d7',
  cluster='ap2',
  ssl=True
)
@api_view(['POST'])
def get_messages(request):
    data = request.data
    pusher_client.trigger('chat', 'message', {
        'username': data['username'],
        'message': data['message']
        })
    return Response([], status=status.HTTP_200_OK)