from rest_framework import routers
from .api import LeadViewset

router = routers.DefaultRouter()
router.register('api/lead', LeadViewset, 'lead')

urlpatterns = router.urls
