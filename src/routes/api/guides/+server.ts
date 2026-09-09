import { heroes } from '$lib/data'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = () => {
  return Response.json(heroes, {
    headers: { 'Cache-Control': 'no-store' }
  })
}
