import type { Guide } from '$lib/data'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, url }) => {
  const selected = url.searchParams.get('hero')
  const response = await fetch('/api/guides')
  const heroes = await response.json() as Guide[]

  return {
    heroes,
    hero: heroes.find((hero) => hero.name.toLowerCase() === selected) ?? heroes[0]
  }
}
