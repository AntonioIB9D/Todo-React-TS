import { useState } from 'react'
import { Todos } from './Components/todos'
import {
  type FilterValue,
  type TodoId,
  type Todo as TodoType,
  type TodoTitle
} from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './Components/Footer'
import Header from './Components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Nintendo Switch Oled ✨',
    completed: true
  },
  {
    id: '2',
    title: 'iPhone 15 Pro Max 🚀',
    completed: false
  },
  {
    id: '3',
    title: 'Macbook Pro Max ✈️',
    completed: false
  }
]
/**
 * The App component renders a TodoList component with a list of todos.
 * @returns The App component is returning a JSX element.
 */
const App = (): JSX.Element => {
  /* The code `const [todos, setTodos] = useState(mockTodos)` is using the `useState` hook to create a
  state variable called `todos` and a corresponding setter function called `setTodos`. The initial
  value of `todos` is set to `mockTodos`, which is an array of todo objects. */
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  /**
   * The handleRemove function removes a todo item from the todos array based on its id.
   * @param {string} id - A string representing the id of the todo item that needs to be removed.
   */
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  /**
   * The function `handleCompleted` updates the `completed` property of a todo item in an array of todos.
   * @param  - The parameters for the `handleCompleted` function are `id` and `completed`. These
   * parameters are of type `Pick<TodoType, 'id' | 'completed'>`, which means they are an object that
   * must have the properties `id` and `completed` of type `TodoType`.
   */
  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  /**
   * The function `handleFilterChange` updates the selected filter value.
   * @param {FilterValue} filter - The parameter "filter" is of type "FilterValue".
   */
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  /**
   * The function removes all completed todos from the todos array.
   */
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  /* The code `const activeCount = todos.filter((todo) => !todo.completed).length` is counting the
  number of active todos in the `todos` array. It filters the array to only include todos that are
  not completed (`!todo.completed`) and then calculates the length of the filtered array. */
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  /* The code `const filteredTodos = todos.filter((todo) => {
     if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
     if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
     return todo
   })` is filtering the `todos` array based on the selected filter value (`filterSelected`). */
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  /**
   * The function `handleAddTodo` adds a new todo item to the existing list of todos.
   * @param {TodoTitle}  - The above code defines a function called `handleAddTodo` that takes in an
   * object with a property called `title`. The `title` property is of type `TodoTitle`. The function
   * does not return anything (`void`).
   */
  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
