/* The code is exporting a constant object named `TODO_FILTERS`. This object has three properties:
`ALL`, `ACTIVE`, and `COMPLETED`, each with a corresponding string value. The `as const` assertion
is used to make the object's properties read-only, preventing any modifications to their values. */
export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

/* The code is exporting a constant object named `FILTERS_BUTTONS`. This object is used to define the
literal values and href values for different filters. The keys of the object are the values from the
`TODO_FILTERS` object (`TODO_FILTERS.ALL`, `TODO_FILTERS.ACTIVE`, `TODO_FILTERS.COMPLETED`), and the
values are objects with two properties: `literal` and `href`. */
/* Diccionario */
export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
