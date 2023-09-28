# PPI Challenge

[] manejar el error si se ingresa una moneda no valida
[] corregir el script npm run lint que falla
[] es necesario obtener los nombres de las monedas del servicio https://api.vatcomply.com/currencies
[] es necesario obtener los valores actualizados con la api https://api.vatcomply.com/rates?symbols=USD,GBP
[] hacer la calculadora
[] al modificar el input de texto se debe calcular el importe a recibir
[] el monto no puede ser negativo
[] se puede intercambiar el from to


1. Usa el verbo imperativo (Add, Change, Fix, Remove, …) Estamos tentados a escribir “Added…”, “Fixed…” o “Removed…” pero cada commit es una instrucción para cambiar el estado del proyecto. Fíjate cómo los añade Git (al hacer merge de una rama usa "Merge branch"). 

2. No uses punto final ni puntos suspensivos en tus mensajes El primer mensaje del commit es el título. Los títulos no se puntúan. git commit -m "Add new search feature." ❌ git commit -m "Fix a problem with the topbar..." ❌ git commit -m "Change the default system color" ✅ 

3. Usa como máximo 50 carácteres para tu mensaje de commit Si tienes que explicar demasiadas cosas, seguramente es que has hecho demasiadas cosas en tu commit. Haz que el mensaje sea claro, directo y que realmente refleje los cambios que lleva. 

4. Usa el cuerpo del commit Si el primer mensaje del commit es el título, los siguientes serían el cuerpo. Ahí puedes usar la puntuación y además describir qué hace el commit: git commit -m "Add summary of commit" -m "This is a message to add more context." 

5. Usa commits semánticos Cuando un proyecto crece, es necesario que existan ciertas reglas para que el historial sea legible o para poder hacer releases automáticas. [tipo-de-commit][scope]: [descripcion] 

6. Aprovecha los mensajes ❌ "Remove CSS unused" ✅ "Remove unused button styles from landing page /cities" ❌ "Add new feature" ✅ "Add search functionality by city for registered users" ❌ "Fix bug" ✅ "Fix auth flow adding a redirection to home page" 

7. Considera usar utilidades para hacer commit Usa husky para ejecutar scripts o comandos antes de realizar diferentes acciones sobre el repositorio, gracias a los hooks de git. Y commitlint para asegurarte que tus commits siguen ciertas reglas.