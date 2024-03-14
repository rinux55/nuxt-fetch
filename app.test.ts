import { it, vi, beforeEach, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { ofetch, fetch, createFetch } from 'ofetch'
import app from './app.vue'


it('should mock globalThisfetch', async () => {
  // this works
  const res = await globalThis.fetch('https://example.com')
  expect(await res.text()).toBe('request mocked')
})

it('should mock fetch', async () => {
  // this doesn't
  const res = await fetch('https://example.com')
  expect(await res.text()).toBe('request mocked')
})

it('should mock useFetch', async () => {
  // and this doesn't work as well
  const {getByText} = await renderSuspended(app)
  getByText('request mocked')
})

