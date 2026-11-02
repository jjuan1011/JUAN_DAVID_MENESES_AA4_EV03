# Artefactos de apoyo — TaskFlow

## Objetivo
Construir una interfaz web sencilla que permita a una persona organizar sus actividades, establecer fechas y prioridades y hacer seguimiento a su progreso.

## Historias de usuario
- HU-01: Como usuario, quiero crear una tarea con título, categoría, fecha y prioridad para planificar mis actividades.
- HU-02: Como usuario, quiero marcar una tarea como completada para visualizar mi avance.
- HU-03: Como usuario, quiero buscar tareas por título y filtrar por estado para encontrar actividades rápidamente.
- HU-04: Como usuario, quiero eliminar tareas que ya no necesito.
- HU-05: Como usuario, quiero ver indicadores de progreso y alternar tema visual.

## Casos de uso
Actor principal: Usuario.
1. Gestionar tareas (crear, completar, eliminar).
2. Consultar tareas por texto.
3. Filtrar tareas por estado.
4. Consultar resumen de productividad.
5. Cambiar tema de interfaz.

## Requisitos funcionales
- RF-01: El sistema permite registrar tareas con título, categoría, fecha límite y prioridad.
- RF-02: El sistema permite cambiar el estado de una tarea.
- RF-03: El sistema permite borrar una tarea.
- RF-04: El sistema filtra la lista mediante búsqueda y estado.
- RF-05: El sistema calcula métricas en función de las tareas actuales.

## Requisitos no funcionales
- RNF-01: Interfaz responsive y usable en navegadores modernos.
- RNF-02: Código organizado en componentes/archivos y con comentarios.
- RNF-03: Controles de formulario con etiquetas y validación básica.

## Modelo de clases conceptual
- Task: id, title, category, due, priority, done.
- TaskManager: tasks, addTask(), toggleTask(), deleteTask(), filterTasks().
- Dashboard: total, pending, completed, progress.
- User: name, role (representación de perfil en UI).

## Diseño
Dashboard lateral, cabecera con saludo, tarjetas estadísticas, sección de tareas, barra de búsqueda/filtros y formulario de alta. Paleta morado, blanco y grises, con adaptación responsive.
