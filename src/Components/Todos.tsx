/* The line `import { type ListOfTodos } from '../types'` is importing the `ListOfTodos` type from the
`../types` file. This allows the `ListOfTodos` type to be used in the current file. */
import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

/* The `interface Props` is defining the structure of the props that the `todos` component expects to
receive. It specifies that the `todos` prop should be of type `ListOfTodos`, which is an array of
`Todo` objects. This ensures that the `todos` prop passed to the component has the correct structure
and type. */
interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

/**
 * The `Todos` component is a React functional component that renders a list of todos based on the
 * `todos` prop.
 * @param  - - `todos`: an array of objects representing individual todos. Each todo object has the
 * following properties:
 * @returns The Todos component is returning an unordered list (ul) with each todo item rendered as a
 * list item (li). Each todo item is rendered using the Todo component, passing in the todo's id,
 * title, and completed status as props. The key prop is set to the todo's id to ensure uniqueness in
 * the list. The className of the list item is conditionally set to "completed" if
 */
export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}

/* React.FC<Props> - Indicarle al functional component la forma en la que recibirá las props  * */
