export interface Types {
  [key: string]: {
    clazz: string
    values: Value[]
  }
}
export interface Value {
  field: string
  name: string
  descr: string
  type: string
  values?: any
}
