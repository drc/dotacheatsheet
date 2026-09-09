import { heroes } from '$lib/data'
import type { RequestHandler } from './$types'

const origin = 'https://www.dotabuff.com/assets'

const slugify = (value: string) => value.toLowerCase().replace(/["']/g, '').replace(/[^a-z0-9]+/g, '-')

const items = new Set(
  heroes.flatMap((hero) => [
    ...hero.build.map(({ item }) => slugify(item.name)),
    ...hero.situations.map(({ item }) => slugify(item.name))
  ])
)

const heroesBySlug = new Set(heroes.map((hero) => slugify(hero.name)))

export const GET: RequestHandler = async ({ params, fetch }) => {
  const { type, slug } = params
  const allowed = type === 'items' ? items : type === 'heroes' ? heroesBySlug : undefined

  if (!allowed?.has(slug)) {
    return new Response('Not found', { status: 404 })
  }

  const response = await fetch(`${origin}/${type}/${slug}.jpg`)

  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
    return new Response('Image unavailable', { status: 502 })
  }

  return new Response(response.body, {
    headers: {
      'Content-Type': response.headers.get('content-type') ?? 'image/jpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800'
    }
  })
}
