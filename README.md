# Validador de Producción Rural

## Descripción
Mini-solución web que valida registros de producción rural y muestra mensajes de error, advertencia o éxito.

## Cómo ejecutar
1. Abrir la carpeta en VS Code.
2. Abrir `index.html` en el navegador o usar Live Server.

## Casos de prueba
- Campos vacíos → Error.
- Cantidad no numérica → Error.
- Cantidad negativa o cero → Error.
- Cantidad mayor a 10000 → Advertencia.
- Datos correctos → Éxito.
