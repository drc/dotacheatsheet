export type Item = {
  name: string
  short: string
  tone: string
}

export type Situation = {
  trigger: string
  item: Item
  replaces: string
  shape: 'circle' | 'shield' | 'triangle' | 'diamond' | 'cross'
  color: 'yellow' | 'blue' | 'red' | 'green' | 'purple'
}

export type BuildStep = {
  label: string
  item: Item
  note: string
}

export type Guide = {
  name: string
  shortName: string
  role: string
  patch: string
  tagline: string
  pattern: string[]
  build: BuildStep[]
  situations: Situation[]
}

export const windranger: Guide = {
  name: 'Windranger',
  shortName: 'WR',
  role: 'Core / position 1-2',
  patch: '7.41',
  tagline: 'Find the angle. Lock the target. Keep moving.',
  pattern: ['ANGLE', 'BKB', 'FOCUS FIRE', 'RESET'],
  build: [
    { label: 'START', item: { name: 'Power Treads', short: 'PT', tone: 'gold' }, note: 'Switch stats' },
    { label: 'FARM', item: { name: 'Maelstrom', short: 'MA', tone: 'blue' }, note: 'Build speed' },
    { label: 'SURVIVE', item: { name: 'Black King Bar', short: 'BKB', tone: 'red' }, note: 'Attack through spells' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'AS', tone: 'violet' }, note: 'Default shard' },
    { label: 'ANGLE', item: { name: 'Blink Dagger', short: 'BD', tone: 'teal' }, note: 'Start fights' },
    { label: 'DAMAGE', item: { name: 'Mjollnir', short: 'MJ', tone: 'orange' }, note: 'Upgrade Maelstrom' },
    { label: 'FINISH', item: { name: 'Daedalus', short: 'DA', tone: 'crimson' }, note: 'Default damage' }
  ],
  situations: [
    {
      trigger: 'Evasion / Butterfly',
      item: { name: 'Monkey King Bar', short: 'MKB', tone: 'orange' },
      replaces: 'Daedalus',
      shape: 'circle',
      color: 'yellow'
    },
    {
      trigger: 'Ghost Scepter / defensive buffs',
      item: { name: 'Nullifier', short: 'NU', tone: 'slate' },
      replaces: 'Daedalus',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Doom / Hex / Duel / Lasso',
      item: { name: "Linken's Sphere", short: 'LS', tone: 'blue' },
      replaces: 'Blink Dagger',
      shape: 'triangle',
      color: 'red'
    },
    {
      trigger: 'Melee heroes stick to you',
      item: { name: 'Hurricane Pike', short: 'HP', tone: 'teal' },
      replaces: 'Blink Dagger',
      shape: 'diamond',
      color: 'green'
    },
    {
      trigger: 'You die after BKB ends',
      item: { name: 'Satanic', short: 'SA', tone: 'crimson' },
      replaces: 'Daedalus',
      shape: 'cross',
      color: 'purple'
    }
  ] satisfies Situation[]
}

export const bristleback: Guide = {
  name: 'Bristleback',
  shortName: 'BB',
  role: 'Core / position 3',
  patch: '7.41',
  tagline: 'Face the fight. Spray everything. Never stop walking.',
  pattern: ['WALK IN', 'TURN YOUR BACK', 'QUILL SPRAY', 'KEEP WALKING'],
  build: [
    { label: 'START', item: { name: 'Phase Boots', short: 'PB', tone: 'gold' }, note: 'Armor and chase' },
    { label: 'SURVIVE', item: { name: 'Vanguard', short: 'VG', tone: 'red' }, note: 'Block damage' },
    { label: 'DAMAGE', item: { name: "Aghanim's Scepter", short: 'AS', tone: 'violet' }, note: 'Upgrade Quill Spray' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'blue' }, note: 'Default shard' },
    { label: 'CATCH', item: { name: 'Harpoon', short: 'HP', tone: 'teal' }, note: 'Reach targets' },
    { label: 'LOCK', item: { name: 'Abyssal Blade', short: 'AB', tone: 'orange' }, note: 'Reliable stun' },
    { label: 'FINISH', item: { name: 'Heart of Tarrasque', short: 'HT', tone: 'crimson' }, note: 'Keep standing' }
  ],
  situations: [
    {
      trigger: 'Too much magic / lockdown',
      item: { name: 'Black King Bar', short: 'BKB', tone: 'red' },
      replaces: 'Abyssal Blade',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy keeps running away',
      item: { name: 'Blink Dagger', short: 'BD', tone: 'teal' },
      replaces: 'Harpoon',
      shape: 'triangle',
      color: 'green'
    },
    {
      trigger: 'Enemy has strong healing',
      item: { name: 'Eye of Skadi', short: 'SK', tone: 'blue' },
      replaces: 'Heart of Tarrasque',
      shape: 'circle',
      color: 'purple'
    },
    {
      trigger: 'Enemy right-clicks hurt',
      item: { name: 'Assault Cuirass', short: 'AC', tone: 'slate' },
      replaces: 'Heart of Tarrasque',
      shape: 'diamond',
      color: 'yellow'
    },
    {
      trigger: 'You need to save an ally',
      item: { name: 'Lotus Orb', short: 'LO', tone: 'teal' },
      replaces: 'Abyssal Blade',
      shape: 'cross',
      color: 'red'
    }
  ]
}

export const axe: Guide = {
  name: 'Axe',
  shortName: 'AX',
  role: 'Core / position 3',
  patch: '7.41',
  tagline: 'Start the fight. Force the call. Spin through the line.',
  pattern: ['BLINK', 'CALL', 'COUNTER HELIX', 'CULL'],
  build: [
    { label: 'START', item: { name: 'Quelling Blade', short: 'QB', tone: 'gold' }, note: 'Secure last hits' },
    { label: 'SURVIVE', item: { name: 'Vanguard', short: 'VG', tone: 'red' }, note: 'Walk into the wave' },
    { label: 'CATCH', item: { name: 'Blink Dagger', short: 'BD', tone: 'teal' }, note: 'Start the fight' },
    { label: 'DAMAGE', item: { name: 'Blade Mail', short: 'BM', tone: 'orange' }, note: 'Punish the call' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'More spins' },
    { label: 'AURA', item: { name: 'Crimson Guard', short: 'CG', tone: 'blue' }, note: 'Protect the push' },
    { label: 'FINISH', item: { name: 'Heart of Tarrasque', short: 'HT', tone: 'crimson' }, note: 'Keep initiating' }
  ],
  situations: [
    {
      trigger: 'Too much magic / lockdown',
      item: { name: 'Black King Bar', short: 'BKB', tone: 'red' },
      replaces: 'Heart of Tarrasque',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy has strong healing',
      item: { name: 'Spirit Vessel', short: 'SV', tone: 'slate' },
      replaces: 'Heart of Tarrasque',
      shape: 'circle',
      color: 'purple'
    },
    {
      trigger: 'Your team needs magic resistance',
      item: { name: 'Pipe of Insight', short: 'PI', tone: 'teal' },
      replaces: 'Crimson Guard',
      shape: 'diamond',
      color: 'green'
    },
    {
      trigger: 'Enemy right-clicks are the threat',
      item: { name: 'Assault Cuirass', short: 'AC', tone: 'orange' },
      replaces: 'Heart of Tarrasque',
      shape: 'cross',
      color: 'yellow'
    },
    {
      trigger: 'You need to catch mobile heroes',
      item: { name: 'Harpoon', short: 'HP', tone: 'blue' },
      replaces: 'Crimson Guard',
      shape: 'triangle',
      color: 'red'
    }
  ]
}

export const enchantress: Guide = {
  name: 'Enchantress',
  shortName: 'EN',
  role: 'Core / position 2-3',
  patch: '7.41',
  tagline: 'Keep your distance. Break their rhythm. Hit forever.',
  pattern: ['POSITION', 'IMPETUS', 'UNTUCHED', 'RESET'],
  build: [
    { label: 'START', item: { name: 'Null Talisman', short: 'NT', tone: 'gold' }, note: 'Lane pressure' },
    { label: 'MOVE', item: { name: 'Power Treads', short: 'PT', tone: 'blue' }, note: 'Stats and speed' },
    { label: 'RANGE', item: { name: 'Dragon Lance', short: 'DL', tone: 'teal' }, note: 'Keep your distance' },
    { label: 'CATCH', item: { name: 'Hurricane Pike', short: 'HP', tone: 'orange' }, note: 'Force the angle' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'More Impetus' },
    { label: 'AURA', item: { name: 'Solar Crest', short: 'SC', tone: 'blue' }, note: 'Buff the carry' },
    { label: 'FINISH', item: { name: 'Butterfly', short: 'BF', tone: 'crimson' }, note: 'Scale right-clicks' }
  ],
  situations: [
    {
      trigger: 'Enemy has hard lockdown',
      item: { name: 'Black King Bar', short: 'BKB', tone: 'red' },
      replaces: 'Butterfly',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy has heavy healing',
      item: { name: 'Eye of Skadi', short: 'SK', tone: 'blue' },
      replaces: 'Butterfly',
      shape: 'circle',
      color: 'purple'
    },
    {
      trigger: 'You need reliable damage',
      item: { name: 'Monkey King Bar', short: 'MKB', tone: 'orange' },
      replaces: 'Butterfly',
      shape: 'diamond',
      color: 'yellow'
    },
    {
      trigger: 'Your team needs a save',
      item: { name: 'Glimmer Cape', short: 'GC', tone: 'slate' },
      replaces: 'Solar Crest',
      shape: 'cross',
      color: 'green'
    },
    {
      trigger: 'You need to survive burst',
      item: { name: 'Satanic', short: 'SA', tone: 'crimson' },
      replaces: 'Butterfly',
      shape: 'triangle',
      color: 'red'
    }
  ]
}

export const razor: Guide = {
  name: 'Razor',
  shortName: 'RZ',
  role: 'Core / position 1-2',
  patch: '7.41',
  tagline: 'Link the target. Run them down. Let the storm finish.',
  pattern: ['LINK', 'CHASE', 'STATIC LINK', 'STORM'],
  build: [
    { label: 'START', item: { name: 'Power Treads', short: 'PT', tone: 'gold' }, note: 'Flexible stats' },
    { label: 'SURVIVE', item: { name: 'Vanguard', short: 'VG', tone: 'red' }, note: 'Stand in the wave' },
    { label: 'DAMAGE', item: { name: 'Mage Slayer', short: 'MS', tone: 'blue' }, note: 'Chase spell casters' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'More Plasma Field' },
    { label: 'LOCK', item: { name: 'Black King Bar', short: 'BKB', tone: 'red' }, note: 'Keep the link' },
    { label: 'ARMOR', item: { name: "Shiva's Guard", short: 'SG', tone: 'slate' }, note: 'Slow and survive' },
    { label: 'FINISH', item: { name: 'Refresher Orb', short: 'RO', tone: 'crimson' }, note: 'Double the storm' }
  ],
  situations: [
    {
      trigger: 'Enemy can burst through BKB',
      item: { name: 'Satanic', short: 'SA', tone: 'crimson' },
      replaces: 'Refresher Orb',
      shape: 'circle',
      color: 'purple'
    },
    {
      trigger: 'Enemy has instant lockdown',
      item: { name: "Linken's Sphere", short: 'LS', tone: 'blue' },
      replaces: 'Refresher Orb',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy right-clicks are the threat',
      item: { name: 'Assault Cuirass', short: 'AC', tone: 'orange' },
      replaces: "Shiva's Guard",
      shape: 'diamond',
      color: 'yellow'
    },
    {
      trigger: 'Enemy has evasion',
      item: { name: 'Monkey King Bar', short: 'MKB', tone: 'orange' },
      replaces: 'Refresher Orb',
      shape: 'triangle',
      color: 'red'
    },
    {
      trigger: 'You need to catch mobile heroes',
      item: { name: 'Harpoon', short: 'HP', tone: 'teal' },
      replaces: 'Refresher Orb',
      shape: 'cross',
      color: 'green'
    }
  ]
}

export const luna: Guide = {
  name: 'Luna',
  shortName: 'LU',
  role: 'Core / position 1',
  patch: '7.41',
  tagline: 'Farm the map. Group with the team. Let the eclipse land.',
  pattern: ['FARM', 'GATHER', 'ECLIPSE', 'CLEAN UP'],
  build: [
    { label: 'START', item: { name: 'Power Treads', short: 'PT', tone: 'gold' }, note: 'Switch for farm' },
    { label: 'RANGE', item: { name: 'Dragon Lance', short: 'DL', tone: 'blue' }, note: 'Attack from safety' },
    { label: 'ILLUSIONS', item: { name: 'Manta Style', short: 'MS', tone: 'teal' }, note: 'Dispel and scale' },
    { label: 'SURVIVE', item: { name: 'Black King Bar', short: 'BKB', tone: 'red' }, note: 'Cast Eclipse' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'More Moon Glaives' },
    { label: 'SUSTAIN', item: { name: 'Satanic', short: 'SA', tone: 'crimson' }, note: 'Turn fights around' },
    { label: 'FINISH', item: { name: 'Butterfly', short: 'BF', tone: 'orange' }, note: 'Scale right-clicks' }
  ],
  situations: [
    {
      trigger: 'Enemy has evasion',
      item: { name: 'Monkey King Bar', short: 'MKB', tone: 'orange' },
      replaces: 'Butterfly',
      shape: 'circle',
      color: 'yellow'
    },
    {
      trigger: 'Enemy has strong healing',
      item: { name: 'Eye of Skadi', short: 'SK', tone: 'blue' },
      replaces: 'Butterfly',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'You need to jump the backline',
      item: { name: 'Swift Blink', short: 'SB', tone: 'teal' },
      replaces: 'Butterfly',
      shape: 'triangle',
      color: 'green'
    },
    {
      trigger: 'Enemy has heavy lockdown',
      item: { name: "Linken's Sphere", short: 'LS', tone: 'slate' },
      replaces: 'Butterfly',
      shape: 'diamond',
      color: 'purple'
    },
    {
      trigger: 'You need one huge target burst',
      item: { name: 'Daedalus', short: 'DA', tone: 'red' },
      replaces: 'Butterfly',
      shape: 'cross',
      color: 'red'
    }
  ]
}

export const slardar: Guide = {
  name: 'Slardar',
  shortName: 'SL',
  role: 'Core / position 3',
  patch: '7.41',
  tagline: 'Sprint into range. Corrode the armor. Bash until silence.',
  pattern: ['SPRINT', 'CRUSH', 'CORROSIVE HAZE', 'BASH'],
  build: [
    { label: 'START', item: { name: 'Phase Boots', short: 'PB', tone: 'gold' }, note: 'Armor and chase' },
    { label: 'CATCH', item: { name: 'Blink Dagger', short: 'BD', tone: 'teal' }, note: 'Start the stun' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'Dive through terrain' },
    { label: 'SURVIVE', item: { name: 'Black King Bar', short: 'BKB', tone: 'red' }, note: 'Stay in the fight' },
    { label: 'ARMOR', item: { name: 'Assault Cuirass', short: 'AC', tone: 'slate' }, note: 'Amplify the team' },
    { label: 'REACH', item: { name: 'Harpoon', short: 'HP', tone: 'blue' }, note: 'Keep targets close' },
    { label: 'FINISH', item: { name: 'Abyssal Blade', short: 'AB', tone: 'crimson' }, note: 'Lock the carry' }
  ],
  situations: [
    {
      trigger: 'Enemy has heavy magic damage',
      item: { name: 'Pipe of Insight', short: 'PI', tone: 'teal' },
      replaces: 'Assault Cuirass',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy has a single-target save',
      item: { name: 'Lotus Orb', short: 'LO', tone: 'blue' },
      replaces: 'Harpoon',
      shape: 'circle',
      color: 'purple'
    },
    {
      trigger: 'You need to dispel buffs',
      item: { name: 'Nullifier', short: 'NU', tone: 'orange' },
      replaces: 'Harpoon',
      shape: 'diamond',
      color: 'yellow'
    },
    {
      trigger: 'You need a second initiation',
      item: { name: 'Refresher Orb', short: 'RO', tone: 'violet' },
      replaces: 'Harpoon',
      shape: 'triangle',
      color: 'red'
    },
    {
      trigger: 'Enemy right-clicks are the threat',
      item: { name: "Shiva's Guard", short: 'SG', tone: 'slate' },
      replaces: 'Harpoon',
      shape: 'cross',
      color: 'green'
    }
  ]
}

export const warlock: Guide = {
  name: 'Warlock',
  shortName: 'WK',
  role: 'Support / position 5',
  patch: '7.41',
  tagline: 'Heal the lane. Chain the fight. Drop the golem.',
  pattern: ['BOND', 'UPHEAVAL', 'CHAOS', 'RESET'],
  build: [
    { label: 'START', item: { name: 'Magic Wand', short: 'MW', tone: 'gold' }, note: 'Win the trade' },
    { label: 'MANA', item: { name: 'Arcane Boots', short: 'AB', tone: 'blue' }, note: 'Cast every spell' },
    { label: 'SAVE', item: { name: 'Glimmer Cape', short: 'GC', tone: 'teal' }, note: 'Keep allies alive' },
    { label: 'UPGRADE', item: { name: "Aghanim's Shard", short: 'SH', tone: 'violet' }, note: 'More Bonds' },
    { label: 'CONTROL', item: { name: "Aghanim's Scepter", short: 'AS', tone: 'orange' }, note: 'Split the golem' },
    { label: 'RESET', item: { name: 'Refresher Orb', short: 'RO', tone: 'red' }, note: 'Two ultimates' },
    { label: 'FINISH', item: { name: 'Octarine Core', short: 'OC', tone: 'crimson' }, note: 'More casts' }
  ],
  situations: [
    {
      trigger: 'You need to reposition an ally',
      item: { name: 'Force Staff', short: 'FS', tone: 'teal' },
      replaces: 'Octarine Core',
      shape: 'circle',
      color: 'green'
    },
    {
      trigger: 'Your team needs stronger auras',
      item: { name: 'Guardian Greaves', short: 'GG', tone: 'blue' },
      replaces: 'Arcane Boots',
      shape: 'shield',
      color: 'blue'
    },
    {
      trigger: 'Enemy has instant lockdown',
      item: { name: "Linken's Sphere", short: 'LS', tone: 'slate' },
      replaces: 'Octarine Core',
      shape: 'diamond',
      color: 'purple'
    },
    {
      trigger: 'You need to survive the initiation',
      item: { name: 'Black King Bar', short: 'BKB', tone: 'red' },
      replaces: 'Octarine Core',
      shape: 'triangle',
      color: 'red'
    },
    {
      trigger: 'Enemy has strong dispels',
      item: { name: 'Scythe of Vyse', short: 'SV', tone: 'orange' },
      replaces: 'Octarine Core',
      shape: 'cross',
      color: 'yellow'
    }
  ]
}

export const heroes: Guide[] = [windranger, bristleback, axe, enchantress, razor, luna, slardar, warlock]
