# TaskFlow — Front-end (GA7-220501096-AA4-EV03)

Aplicación web de gestión de tareas desarrollada con React y Vite como evidencia de componente front-end del proyecto formativo.

## Funcionalidades
- Panel con indicadores de tareas, pendientes, completadas y porcentaje de progreso.
- Crear tareas con título, categoría, fecha límite y prioridad.
- Marcar tareas como completadas y eliminarlas.
- Búsqueda por título y filtros por estado.
- Cambio entre tema claro y oscuro.
- Diseño adaptable a escritorio, tableta y móvil.
- Comentarios en el código para documentar lógica y componentes.

## Requisitos
Node.js 18 o superior y npm.

## Ejecución
1. Descomprimir la carpeta.
2. Abrir una terminal en el directorio del proyecto.
3. Ejecutar `npm install`.
4. Ejecutar `npm run dev`.
5. Abrir en el navegador la URL que indique Vite (usualmente http://localhost:5173).

Para validar la compilación: `npm run build`.

## Versionamiento con Git
```bash
git init
git add .
git commit -m "Entrega inicial front-end TaskFlow GA7-AA4-EV03"
```
Crear un repositorio remoto en GitHub y seguir sus instrucciones para vincularlo:
```bash
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git branch -M main
git push -u origin main
```
El enlace del repositorio debe ser completado en `ENLACE_REPOSITORIO.txt`.

## Alcance
La evidencia corresponde al front-end. Los datos de tareas son de demostración y se guardan en el estado de la aplicación; no existe aún persistencia en base de datos ni autenticación.
