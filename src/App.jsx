import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Plus, Search, Sun, Moon, CalendarDays, LayoutDashboard, ListTodo, ChartNoAxesColumn, Trash2, Clock3 } from "lucide-react";

// Datos de demostración iniciales; las tareas nuevas se mantienen en el estado de React.
const initialTasks = [
  { id: 1, title: "Preparar entrega del proyecto SENA", category: "Estudio", due: "2026-11-05", priority: "Alta", done: false },
  { id: 2, title: "Revisar diseño de la interfaz TaskFlow", category: "Proyecto", due: "2026-11-04", priority: "Media", done: false },
  { id: 3, title: "Organizar pendientes de la semana", category: "Personal", due: "2026-11-06", priority: "Baja", done: true },
];

const dateLabel = (value) => new Date(`${value}T12:00:00`).toLocaleDateString("es-CO", { day: "numeric", month: "short" });

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todas");
  const [dark, setDark] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "Estudio", due: "2026-11-07", priority: "Media" });

  // Filtra las tareas por texto y estado seleccionado.
  const visibleTasks = useMemo(() => tasks.filter((task) => {
    const matchesText = task.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "Todas" || (filter === "Pendientes" && !task.done) || (filter === "Completadas" && task.done);
    return matchesText && matchesFilter;
  }), [tasks, query, filter]);

  const pending = tasks.filter((task) => !task.done).length;
  const completed = tasks.filter((task) => task.done).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  function addTask(event) {
    event.preventDefault();
    if (!form.title.trim()) return;
    // Se agrega una tarea con identificador único y los valores del formulario.
    setTasks((current) => [{ ...form, id: Date.now(), title: form.title.trim(), done: false }, ...current]);
    setForm({ title: "", category: "Estudio", due: "2026-11-07", priority: "Media" });
    setShowForm(false);
  }
  function toggleTask(id) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, done: !task.done } : task));
  }
  function deleteTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return <div className={`app ${dark ? "dark" : ""}`}>
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">T</span><span>TaskFlow</span></div>
      <div className="nav-caption">MENÚ PRINCIPAL</div>
      <button className="nav-item active"><LayoutDashboard size={18}/> Panel principal</button>
      <button className="nav-item" onClick={() => setFilter("Todas")}><ListTodo size={18}/> Mis tareas</button>
      <button className="nav-item" onClick={() => setFilter("Pendientes")}><CalendarDays size={18}/> Pendientes</button>
      <button className="nav-item" onClick={() => setFilter("Completadas")}><ChartNoAxesColumn size={18}/> Estadísticas</button>
      <div className="sidebar-bottom"><div className="tip"><b>¡Sigue avanzando!</b><p>Cada tarea completada te acerca a tus objetivos.</p><div className="mini-progress"><span style={{width:`${progress}%`}}/></div></div><div className="profile"><div className="avatar">JD</div><div><b>Juan David</b><small>Aprendiz</small></div></div></div>
    </aside>

    <main className="main">
      <header className="topbar"><div><span className="eyebrow">LUNES, 2 DE NOVIEMBRE</span><h1>Panel principal</h1><p className="subtitle">¡Hola! Este es tu espacio para organizar el día.</p></div>
        <button className="icon-button" aria-label="Cambiar tema" onClick={() => setDark(!dark)}>{dark ? <Sun size={20}/> : <Moon size={20}/>}</button>
      </header>
      <section className="stats">
        <article className="stat-card"><div className="stat-icon purple"><ListTodo size={20}/></div><span>Total de tareas</span><strong>{tasks.length}</strong><small>En tu lista actual</small></article>
        <article className="stat-card"><div className="stat-icon orange"><Clock3 size={20}/></div><span>Pendientes</span><strong>{pending}</strong><small>Por completar</small></article>
        <article className="stat-card"><div className="stat-icon green"><CheckCircle2 size={20}/></div><span>Completadas</span><strong>{completed}</strong><small>Buen trabajo</small></article>
        <article className="stat-card"><div className="stat-icon blue"><ChartNoAxesColumn size={20}/></div><span>Progreso</span><strong>{progress}%</strong><small>De tus objetivos</small></article>
      </section>

      <section className="task-section">
        <div className="section-heading"><div><h2>Mis tareas</h2><p>Administra tus actividades y prioridades.</p></div><button className="primary-button" onClick={() => setShowForm(!showForm)}><Plus size={18}/> Nueva tarea</button></div>
        {showForm && <form className="task-form" onSubmit={addTask}>
          <label>Nombre de la tarea<input required maxLength="100" placeholder="¿Qué necesitas hacer?" value={form.title} onChange={(e) => setForm({...form, title:e.target.value})}/></label>
          <div className="form-row"><label>Categoría<select value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}><option>Estudio</option><option>Proyecto</option><option>Personal</option><option>Trabajo</option></select></label><label>Fecha límite<input type="date" value={form.due} onChange={(e)=>setForm({...form,due:e.target.value})}/></label><label>Prioridad<select value={form.priority} onChange={(e)=>setForm({...form,priority:e.target.value})}><option>Alta</option><option>Media</option><option>Baja</option></select></label></div>
          <div className="form-actions"><button type="button" className="secondary-button" onClick={()=>setShowForm(false)}>Cancelar</button><button className="primary-button" type="submit">Guardar tarea</button></div>
        </form>}
        <div className="toolbar"><div className="search"><Search size={18}/><input placeholder="Buscar tarea..." value={query} onChange={(e)=>setQuery(e.target.value)}/></div><div className="filters">{["Todas","Pendientes","Completadas"].map((name)=><button key={name} className={filter===name?"selected":""} onClick={()=>setFilter(name)}>{name}</button>)}</div></div>
        <div className="task-list">{visibleTasks.map((task)=><article className={`task-row ${task.done?"done":""}`} key={task.id}>
          <button className="check" aria-label={task.done?"Marcar pendiente":"Completar tarea"} onClick={()=>toggleTask(task.id)}>{task.done?<CheckCircle2 size={22}/>:<Circle size={22}/>}</button>
          <div className="task-info"><b>{task.title}</b><div className="task-meta"><span className="category">{task.category}</span><span><CalendarDays size={14}/> {dateLabel(task.due)}</span></div></div>
          <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span><button className="delete-button" aria-label="Eliminar tarea" onClick={()=>deleteTask(task.id)}><Trash2 size={17}/></button>
        </article>)}
        {visibleTasks.length===0 && <div className="empty"><ListTodo size={30}/><b>No hay tareas para mostrar</b><span>Prueba otro filtro o crea una nueva tarea.</span></div>}</div>
      </section>
      <footer>TaskFlow · Organiza tu tiempo, alcanza tus metas.</footer>
    </main>
  </div>;
}