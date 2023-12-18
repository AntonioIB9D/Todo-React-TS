import { type TodoTitle } from '../types'
import CreateTodo from './CreateTodo'

/* The `interface Props` is defining the props that can be passed to the `Header` component. It has a
single prop `onAddTodo` which is a function that takes an object with a `title` property of type
`TodoTitle` and returns `void`. This prop is used to handle the event of adding a new todo item. */
interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

/**
 * The `Header` component is a functional component in TypeScript React that renders a header with a
 * title and a `CreateTodo` component.
 * @param  - - `Header` is a functional component that renders the header section of a todo
 * application.
 * @returns The `Header` component is returning a JSX element. It is rendering a `header` element with
 * a class name of "header". Inside the `header` element, there is an `h1` element with the text "Todo
 * React-TS", and a `CreateTodo` component with a prop `saveTodo` that is set to the `onAddTodo`
 * function.
 */
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo React-TS</h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header
