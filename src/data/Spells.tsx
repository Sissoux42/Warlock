import { RotationGroup, Spell } from '../Types';

export const Spells: Spell[] = [
  { group: RotationGroup.Dots, name: 'Immolate', varName: 'immolate', iconName: 'spell_fire_immolation', id: 27215 },
  { group: RotationGroup.Dots, name: 'Corruption', varName: 'corruption', iconName: 'spell_shadow_abominationexplosion', id: 27216 },
  { group: RotationGroup.Dots, name: 'Siphon Life', varName: 'siphonLife', iconName: 'spell_shadow_requiem', id: 30911 },
  { group: RotationGroup.Dots, name: 'Unstable Affliction', varName: 'unstableAffliction', iconName: 'spell_shadow_unstableaffliction_3', id: 30405 },

  { group: RotationGroup.Filler, name: 'Searing Pain', varName: 'searingPain', iconName: 'spell_fire_soulburn', id: 30459 },
  { group: RotationGroup.Filler, name: 'Shadow Bolt', varName: 'shadowBolt', iconName: 'spell_shadow_shadowbolt', id: 27209 },
  { group: RotationGroup.Filler, name: 'Incinerate', varName: 'incinerate', iconName: 'spell_fire_burnout', id: 32231 },

  { group: RotationGroup.Curse, name: 'Curse of Recklessness', varName: 'curseOfRecklessness', iconName: 'spell_shadow_unholystrength', id: 27226 },
  { group: RotationGroup.Curse, name: 'Curse of the Elements', varName: 'curseOfTheElements', iconName: 'spell_shadow_chilltouch', id: 27228 },
  { group: RotationGroup.Curse, name: 'Curse of Doom', varName: 'curseOfDoom', iconName: 'spell_shadow_auraofdarkness', id: 30910 },
  { group: RotationGroup.Curse, name: 'Curse of Agony', varName: 'curseOfAgony', iconName: 'spell_shadow_curseofsargeras', id: 27218 },

  { group: RotationGroup.Finishers, name: 'Death Coil', varName: 'deathCoil', iconName: 'spell_shadow_deathcoil', id: 27223 },
  { group: RotationGroup.Finishers, name: 'Shadowburn', varName: 'shadowburn', iconName: 'spell_shadow_scourgebuild', id: 30546 },
  { group: RotationGroup.Finishers, name: 'Conflagrate', varName: 'conflagrate', iconName: 'spell_fire_fireball', id: 30912 },

  { group: RotationGroup.Other, name: 'Shadowfury', varName: 'shadowfury', iconName: 'spell_shadow_shadowfury', id: 30414 },
  { group: RotationGroup.Other, name: 'Amplify Curse', varName: 'amplifyCurse', iconName: 'spell_shadow_contagion', id: 18288 },
  { group: RotationGroup.Other, name: 'Dark Pact', varName: 'darkPact', iconName: 'spell_shadow_darkritual', id: 27265 },

  { name: 'Life Tap', varName: 'lifeTap', iconName: 'spell_shadow_burningspirit', id: 27222 },
  { name: 'Mp5', varName: 'mp5', iconName: 'inv_elemental_mote_mana', id: 0 },
  { name: 'Melee', varName: 'melee', iconName: 'ability_meleedamage', id: 0 },
  { name: 'Cleave', varName: 'cleave', iconName: 'ability_warrior_cleave', id: 30224 },
  { name: 'Lash of Pain', varName: 'lashOfPain', iconName: 'spell_shadow_curse', id: 27274 },
  { name: 'Firebolt', varName: 'firebolt', iconName: 'spell_fire_firebolt', id: 27267 },
  { name: 'Seed of Corruption', varName: 'seedOfCorruption', iconName: 'spell_shadow_seedofdestruction', id: 27243 },
]