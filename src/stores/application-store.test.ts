import { beforeEach, describe, expect, test } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useApplicationStore } from './application-store'

describe('Application Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('default state values', () => {
    const app = useApplicationStore()

    expect(app.$state).toStrictEqual({ counter: 0 })
  })

  test('increment', () => {
    const app = useApplicationStore()
    app.increment()

    expect(app.counter).toBe(1)
  })

  test('decrement', () => {
    const app = useApplicationStore()
    app.decrement()

    expect(app.counter).toBe(-1)
  })
})