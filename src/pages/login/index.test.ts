import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import LoginPage from './index.vue'

describe('Login Page', () => {
  test('renders correctly', () => {
    const { findByTestId } = render(LoginPage)

    const title = findByTestId('page-title')

    expect(title).not.toBeNull()
  })
})