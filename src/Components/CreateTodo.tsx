import { useState } from 'react'
import { type TodoTitle } from '../types'

/* The `interface Props` defines the props that the `CreateTodo` component expects. It has a single
prop called `saveTodo`, which is a function that takes an object with a `title` property of type
`TodoTitle` and returns `void`. This prop is used to save a new todo item. */
interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')
  /**
   * The handleSubmit function is used to handle form submission in a TypeScript React component.
   * @param event - The event parameter is of type React.FormEvent<HTMLFormElement>. It represents the
   * form submission event that triggered the handleSubmit function.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={() => {}}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      ></input>
    </form>
  )
}

export default CreateTodo
