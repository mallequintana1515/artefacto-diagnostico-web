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

## Preguntas de reflexión final
1. ¿Qué error fue más difícil de detectar durante el desarrollo?
   - El error más difícil fue detectar las inconsistencias en la lógica de validación cuando se ingresaban cantidades muy altas. El sistema debía distinguir entre un valor válido y un valor atípicamente alto que todavía pudiera ser correcto, por lo que tuve que ajustar el mensaje para que fuera una advertencia y no un rechazo absoluto.

2. ¿Qué herramienta te ayudó más a revisar el funcionamiento del proyecto?
   - La herramienta que más ayudó fue el navegador web con la consola de desarrollador y la recarga en vivo (Live Server). Esto permitió probar los formularios rápidamente y revisar los mensajes de validación en tiempo real.

3. ¿Por qué es importante validar los datos antes de procesarlos?
   - Es importante validar los datos porque evita que información incorrecta o incompleta ingrese al sistema. La validación protege la calidad del registro, reduce errores posteriores y garantiza que solo se procese información confiable.

4. ¿Qué diferencia encontraste entre un error visible y un error lógico?
   - Un error visible es un fallo que se aprecia inmediatamente en la interfaz, como un campo que no se muestra o un botón que no funciona. Un error lógico es una inconsistencia en la forma en que el programa interpreta los datos, como aceptar una cantidad inválida o manejar mal una condición de validación.

5. ¿Cómo podrías mejorar este artefacto en una siguiente versión?
   - En una siguiente versión podría incluir validación más avanzada de unidades, soporte para listas de productos predefinidos, un historial de registros guardado y la exportación de resultados. También sería útil añadir mensajes más específicos según el tipo de producción.

6. ¿Cómo se relaciona esta actividad con la creación de páginas web reales?
   - Esta actividad se relaciona con la creación de páginas web reales porque involucra diseño de interfaz, validación de datos del usuario, interacción con formularios y pruebas de usabilidad. Estos son elementos clave en cualquier proyecto web para asegurar que la aplicación funcione correctamente y sea confiable.
