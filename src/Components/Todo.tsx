/* The line `import { type Todo as TodoType } from '../types'` is importing the `Todo` type from the
`../types` file and assigning it the name `TodoType`. This allows us to use the `TodoType` type in
our component's props definition. */
import { type TodoId, type Todo as TodoType } from '../types'

/* The `interface Props` is extending the `TodoType` interface, which means it inherits all the
properties and types defined in the `TodoType` interface. Additionally, it adds a new property
`onRemoveTodo` which is a function that takes a string `id` as a parameter and returns `void`
(nothing). This allows the `Todo` component to receive the `onRemoveTodo` function as a prop and use
it to remove a todo item when the corresponding button is clicked. */
interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

/**
 * The Todo component is a functional component in TypeScript React that renders a checkbox, a label,
 * and a button for a todo item.
 * @param  - - `id`: The unique identifier of the todo item.
 * @returns The Todo component is being returned.
 */
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
