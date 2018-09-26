from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from braces.views import CsrfExemptMixin
from rest_framework.views import APIView


def index(request):
    return HttpResponse("Hello, world. You're at the predict index.")

@require_POST
@csrf_exempt
def predict(request):
    image = request.body
    print(type(image))
    imgtxt = image.decode("utf-8")
    print(type(imgtxt))
    print(imgtxt[:20])
    # Predicciones de la imagen

    prediction = {}
    prediction['imagen'] = imgtxt[:20]
    prediction['saludos'] = "hola"

    return JsonResponse(prediction)
