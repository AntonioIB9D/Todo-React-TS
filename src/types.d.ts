import { type TODO_FILTERS } from './consts'

/* The `interface Todo` is defining the structure of a single todo item. It specifies that a todo item
should have an `id` property of type `string`, a `title` property of type `string`, and a
`completed` property of type `boolean`. This interface is used to ensure that all todo items in the
`todos` array have the same structure. */
export interface Todo {
  id: string
  title: string
  completed: boolean
}

/* Pick permite elegir del Todo la propiedad mencionada */
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

/* type `ListOfTodos` is an array of `Todo` objects */
export type ListOfTodos = Todo[]

/* El tipo que tendrá será de typeof TODO_FILTERS y se accederá a la key del type de TODO_FILTERS */
/* Accederá a la llave y una vez que la tenga le sacará el type */
export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
