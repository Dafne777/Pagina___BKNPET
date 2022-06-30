from .models import Producto
from rest_framework import serializers



class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'


# class CategoriaSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Categoria
#         fields = '__all__'






# class ProductoSerializer(serializers.ModelSerializer):
#     nombre_categoria = serializers.CharField(read_only=True, source="categoria.nombre")
#     categoria = CategoriaSerializer(read_only=True)
#     marca_id = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all(), source = "categoria")
#     nombre = serializers.CharField(required=True, min_length=3)
    
#     def validate_nombre(self, value):
#         existe = Producto.objects.filter(nombre__iexact = value).exists()
        
#         if existe:
#             raise serializers.ValidationError("Este producto ya existe")
        
#         return value
    
#     class Meta:
#         model = Producto
#         fields = '__all__'
        # exclude = ['cambo_que_quiere_exlcuir']