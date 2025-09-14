import { useState, useEffect } from 'react'
import { 
  Assignment, 
  Add, 
  Search, 
  Edit, 
  Delete, 
  CheckCircle, 
  RadioButtonUnchecked,
  Clear
} from '@mui/icons-material'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const startEdit = (task) => {
    setEditingId(task.id)
    setEditText(task.text)
  }

  const saveEdit = () => {
    if (editText.trim() !== '') {
      setTasks(tasks.map(task => 
        task.id === editingId ? { ...task, text: editText.trim() } : task
      ))
    }
    setEditingId(null)
    setEditText('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  // Filter and search tasks
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'all' || 
      (filter === 'active' && !task.completed) || 
      (filter === 'completed' && task.completed)
    
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  const activeTasksCount = tasks.filter(task => !task.completed).length
  const completedTasksCount = tasks.filter(task => task.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>Stay organized and productive</p>
      </header>

      <main className="app-main">
        {/* Add Task Section */}
        <div className="add-task-section">
          <div className="input-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="What needs to be done?"
              className="task-input"
            />
            <button onClick={addTask} className="add-btn">
              <Add className="btn-icon" />
              Add Task
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="controls-section">
          <div className="search-group">
            <div className="search-input-container">
              <Search className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tasks..."
                className="search-input"
              />
            </div>
          </div>
          
          <div className="filter-group">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button 
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active ({activeTasksCount})
            </button>
            <button 
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedTasksCount})
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="tasks-section">
          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              {searchTerm ? (
                <p>No tasks found matching "{searchTerm}"</p>
              ) : (
                <p>No tasks yet. Add one above to get started!</p>
              )}
            </div>
          ) : (
            <ul className="tasks-list">
              {filteredTasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    {task.completed ? (
                      <CheckCircle 
                        className="task-checkbox-icon completed"
                        onClick={() => toggleTask(task.id)}
                      />
                    ) : (
                      <RadioButtonUnchecked 
                        className="task-checkbox-icon"
                        onClick={() => toggleTask(task.id)}
                      />
                    )}
                    
                    {editingId === task.id ? (
                      <div className="edit-group">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                          className="edit-input"
                          autoFocus
                        />
                        <button onClick={saveEdit} className="save-btn">Save</button>
                        <button onClick={cancelEdit} className="cancel-btn">Cancel</button>
                      </div>
                    ) : (
                      <span 
                        className="task-text"
                        onDoubleClick={() => startEdit(task)}
                      >
                        {task.text}
                      </span>
                    )}
                  </div>
                  
                  <div className="task-actions">
                    {editingId !== task.id && (
                      <>
                        <button 
                          onClick={() => startEdit(task)}
                          className="edit-btn"
                          title="Edit task"
                        >
                          <Edit />
                        </button>
                        <button 
                          onClick={() => deleteTask(task.id)}
                          className="delete-btn"
                          title="Delete task"
                        >
                          <Delete />
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Actions */}
        {completedTasksCount > 0 && (
          <div className="footer-actions">
            <button onClick={clearCompleted} className="clear-btn">
              <Clear className="btn-icon" />
              Clear Completed ({completedTasksCount})
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
