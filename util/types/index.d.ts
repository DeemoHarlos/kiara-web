import { PropType } from 'vue'

export type Props<T> = {
  [K in keyof T]: (T[K] extends Object ? PropType<T[K]> : T[K]);
}
