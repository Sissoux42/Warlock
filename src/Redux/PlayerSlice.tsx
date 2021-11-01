import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRemainingTalentPoints } from "../Common";
import { RotationGroup, Spell, PlayerState, InitialPlayerStats, InitialSelectedItemsAndEnchants, InitialSettings, Profile, InitialSelectedGems, ItemSlotKey, TalentName, Setting, StatsCollection, InitialSetCounts, SetsStruct, AurasStruct, ItemAndEnchantStruct, SelectedGemsStruct } from "../Types";

const initialPlayerState : PlayerState = {
  talents: JSON.parse(localStorage.getItem('talents') || '{}'),
  talentPointsRemaining: getRemainingTalentPoints(JSON.parse(localStorage.getItem('talents') || '{}')),
  selectedItems: JSON.parse(localStorage.getItem('selectedItems') || JSON.stringify(InitialSelectedItemsAndEnchants)),
  selectedEnchants: JSON.parse(localStorage.getItem('selectedEnchants') || JSON.stringify(InitialSelectedItemsAndEnchants)),
  selectedGems: JSON.parse(localStorage.getItem('selectedGems') || JSON.stringify(InitialSelectedGems)),
  auras: JSON.parse(localStorage.getItem('auras') || '{}'),
  rotation: JSON.parse(localStorage.getItem('rotation') || '{}'),
  stats: { base: InitialPlayerStats, auras: InitialPlayerStats, items: InitialPlayerStats, gems: InitialPlayerStats, enchants: InitialPlayerStats },
  settings: JSON.parse(localStorage.getItem('settings') || JSON.stringify(InitialSettings)),
  profiles: JSON.parse(localStorage.getItem('profiles') || '{}'),
  sets: InitialSetCounts,
}

export const PlayerSlice = createSlice({
  name: 'player',
  initialState: initialPlayerState,
  reducers: {
    setTalentPointValue: (state, talent: PayloadAction<{name: TalentName, points: number}>) => {
      state.talents[talent.payload.name] = talent.payload.points;
      state.talentPointsRemaining = getRemainingTalentPoints(state.talents);
      localStorage.setItem('talents', JSON.stringify(state.talents));
    },
    setSelectedItems: (state, action: PayloadAction<ItemAndEnchantStruct>) => {
      state.selectedItems = action.payload;
      localStorage.setItem('selectedItems', JSON.stringify(state.selectedItems));
    },
    setSelectedEnchants: (state, action: PayloadAction<ItemAndEnchantStruct>) => {
      state.selectedEnchants = action.payload;
      localStorage.setItem('selectedEnchants', JSON.stringify(state.selectedEnchants));
    },
    setSelectedAuras: (state, action: PayloadAction<AurasStruct>) => {
      state.auras = action.payload;
      localStorage.setItem('auras', JSON.stringify(state.auras));
    },
    toggleRotationSpellSelection: (state, action: PayloadAction<{rotationGroup: RotationGroup, spell: Spell}>) => {
      if (state.rotation[action.payload.rotationGroup.varName] == null) {
        state.rotation[action.payload.rotationGroup.varName] = {};
      }
      
      const isSpellDisabled = state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName] == null || state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName] === false;
      // If a filler/curse is being enabled then disable all other curses/fillers
      if (isSpellDisabled) {
        if (['filler', 'curse'].includes(action.payload.rotationGroup.varName)) {
          action.payload.rotationGroup.spells.forEach((e) => state.rotation[action.payload.rotationGroup.varName][e.varName] = false);
        }
      }
      if (state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName] == null) {
        state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName] = true;
      } else {
        state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName] = !state.rotation[action.payload.rotationGroup.varName][action.payload.spell.varName];
      }

      localStorage.setItem('rotation', JSON.stringify(state.rotation));
    },
    setBaseStats: (state, action: PayloadAction<StatsCollection>) => {
      state.stats.base = action.payload;
    },
    setAurasStats: (state, action: PayloadAction<StatsCollection>) => {
      state.stats.auras = action.payload;
    },
    setItemsStats: (state, action: PayloadAction<StatsCollection>) => {
      state.stats.items = action.payload;
    },
    setGemsStats: (state, action: PayloadAction<StatsCollection>) => {
      state.stats.gems = action.payload;
    },
    setEnchantsStats: (state, action: PayloadAction<StatsCollection>) => {
      state.stats.enchants = action.payload;
    },
    setItemSetCounts: (state, action: PayloadAction<SetsStruct>) => {
      state.sets = action.payload;
    },
    modifySettingValue: (state, action: PayloadAction<{setting: Setting, value: string}>) => {
      state.settings[action.payload.setting] = action.payload.value;
      localStorage.setItem('settings', JSON.stringify(state.settings));
    },
    setProfile: (state, action: PayloadAction<{profile: Profile, name: string}>) => {
      state.profiles[action.payload.name] = action.payload.profile;
      localStorage.setItem('profiles', JSON.stringify(state.profiles));
    },
    loadProfile: (state, action: PayloadAction<Profile>) => {
      localStorage.setItem('auras', JSON.stringify(action.payload.auras));
      localStorage.setItem('rotation', JSON.stringify(action.payload.rotation));
      localStorage.setItem('selectedItems', JSON.stringify(action.payload.items));
      localStorage.setItem('selectedGems', JSON.stringify(action.payload.gems));
      localStorage.setItem('selectedEnchants', JSON.stringify(action.payload.enchants));
      localStorage.setItem('settings', JSON.stringify(action.payload.simSettings));
      localStorage.setItem('talents', JSON.stringify(action.payload.talents));
      window.location.reload();
    },
    setSelectedGems: (state, action: PayloadAction<SelectedGemsStruct>) => {
      state.selectedGems = action.payload;
      localStorage.setItem('selectedGems', JSON.stringify(state.selectedGems));
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      if (state.profiles[action.payload]) {
        delete state.profiles[action.payload];
        localStorage.setItem('profiles', JSON.stringify(state.profiles));
        localStorage.removeItem('selectedProfile');
      }
    },
    renameProfile: (state, action: PayloadAction<{oldName: string, newName: string}>) => {
      if (state.profiles[action.payload.oldName]) {
        // Create a copy of the old profile with the new name and delete the old profile.
        state.profiles[action.payload.newName] = state.profiles[action.payload.oldName];
        delete state.profiles[action.payload.oldName];
        localStorage.setItem('profiles', JSON.stringify(state.profiles));
        localStorage.setItem('selectedProfile', action.payload.newName);
      }
    }
  }
});

export const { setSelectedGems, setSelectedEnchants, setSelectedItems, setSelectedAuras, setItemSetCounts, setAurasStats, setBaseStats, setEnchantsStats, setGemsStats,setItemsStats, renameProfile, deleteProfile, loadProfile, setTalentPointValue, toggleRotationSpellSelection, modifySettingValue, setProfile } = PlayerSlice.actions;
export default PlayerSlice.reducer;