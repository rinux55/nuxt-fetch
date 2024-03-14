import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const handlers = [ 
  http.get('https://example.com', () => {
    return HttpResponse.text('request mocked')
  })
]

export const server = setupServer(...handlers)