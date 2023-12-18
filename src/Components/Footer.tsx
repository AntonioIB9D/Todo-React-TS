import { Filters } from './Filter'
import { type FilterValue } from '../types'

/* The `interface Props` defines the props that the `Footer` component expects to receive. It specifies
the types and names of the props that the component needs in order to render correctly. */
interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

/* The code is defining a functional component called `Footer` using the arrow function syntax. The
component takes in props of type `Props` and returns JSX that represents the footer section of a
todo list application. */
export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  )
}
