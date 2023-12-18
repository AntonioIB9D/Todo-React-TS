import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

/* The `interface Props` defines the props that the `Filters` component expects to receive. It has two
properties: */
interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

/**
 * The `Filters` component is a TypeScript React component that renders a list of filter buttons and
 * handles the selection and change of filters.
 * @param  - - `filterSelected`: The currently selected filter value.
 * @returns The code is returning a React functional component called "Filters". It renders a list of
 * filter buttons based on the "FILTERS_BUTTONS" object. Each filter button is represented by an `<a>`
 * tag inside an `<li>` tag. The selected filter button is given the "selected" class, and when
 * clicked, it calls the "onFilterChange" function with the corresponding filter key.
 */
export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
