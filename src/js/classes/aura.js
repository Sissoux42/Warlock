class Aura {
	constructor(player) {
		this.durationTotal = 0;
		this.durationRemaining = 0;
		this.player = player;
		this.active = false;
		this.isImportant = false;
	}

	tick(t) {
		this.durationRemaining = Math.max(0, this.durationRemaining - t);

		if (this.durationRemaining == 0) {
			this.fade();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.active = false;
			if (!endOfIteration) {
				this.player.combatLog(this.name + " faded");
			}
			if (this.isImportant) {
				this.player.importantAuraCounter--;
				this.player.combatLog(this.player.importantAuraCounter + " important auras active");
			}
		}
	}

	apply() {
		if (this.active) this.player.combatLog(this.name + " refreshed");
		else this.player.combatLog(this.name + " applied");
		this.durationRemaining = this.durationTotal;
		this.active = true;
		if (this.isImportant) {
			this.player.importantAuraCounter++;
			this.player.combatLog(this.player.importantAuraCounter + " important auras active");
		}
	}
}

class ImprovedShadowBolt extends Aura {
	constructor(player) {
		super(player);
		this.name = "Improved Shadow Bolt";
		this.durationTotal = 12;
		this.stacks = 0;
		this.maxStacks = 4;
		this.modifier = 1 + (this.player.talents.improvedShadowBolt * 0.04);
	}

	apply() {
		super.apply();
		this.stacks = this.maxStacks;
	}

	fade(endOfIteration = false) {
		this.stacks = 0;
		super.fade(endOfIteration);
	}

	decrementStacks() {
		this.stacks--;

		if (this.stacks <= 0) {
			this.active = false;
			this.player.combatLog(this.name + " faded");
		} else {
			this.player.combatLog(this.name + "(" + this.stacks + ")")
		}
	}
}

class CurseOfTheElementsAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Curse of the Elements";
		this.durationTotal = 300;
	}
}

class CurseOfRecklessnessAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Curse of Recklessness";
		this.durationTotal = 120;
	}
}

class ShadowTrance extends Aura {
	constructor(player) {
		super(player);
		this.name = "Shadow Trance (Nightfall)";
		this.durationTotal = 10;
		this.isImportant = true;
	}
}

class ShadowFlameShadow extends Aura {
	constructor(player) {
		super(player);
		this.name = "Shadow Flame (shadow) (T4 2pc bonus)";
		this.durationTotal = 15;
		this.procChance = 10;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.shadowPower += 135;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.shadowPower -= 135;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}

		super.fade(endOfIteration);
	}
}

class ShadowFlameFire extends Aura {
	constructor(player) {
		super(player);
		this.name = "Shadow Flame (fire) (T4 2pc bonus)";
		this.durationTotal = 15;
		this.procChance = 10;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.firePower += 135;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.firePower -= 135;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

class SpellstrikeProc extends Aura {
	constructor(player) {
		super(player);
		this.name = "Spellstrike Proc";
		this.durationTotal = 10;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.spellPower += 92;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.spellPower -= 92;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

class PowerInfusion extends Aura {
	constructor(player) {
		super(player);
		this.name = "Power Infusion";
		this.durationTotal = 15;
		this.cooldown = 180;
		this.cooldownRemaining = 0;
		this.hasteModifier = 20;
		this.manaModifier = 0.8;
		this.isImportant = true;
	}

	reset() {
		this.cooldownRemaining = 0;
	}

	apply() {
		if (!this.active) {
			this.player.stats.hasteRating += hasteRatingPerPercent * this.hasteModifier;
			this.player.stats.manaCostModifier *= this.manaModifier;
		}
		this.cooldownRemaining = this.cooldown;
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.hasteRating -= hasteRatingPerPercent * this.hasteModifier;
			this.player.stats.manaCostModifier /= this.manaModifier;
		}
		super.fade(endOfIteration);
	}

	tick(t) {
		this.cooldownRemaining = Math.max(0,this.cooldownRemaining - t);
		super.tick(t);
	}

	ready() {
		return this.cooldownRemaining <= 0;
	}
}

class EyeOfMagtheridon extends Aura {
	constructor(player) {
		super(player);
		this.name = "Eye of Magtheridon";
		this.durationTotal = 10;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.spellPower += 170;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.spellPower -= 170;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

class SextantOfUnstableCurrents extends Aura {
	constructor(player) {
		super(player);
		this.name = "Sextant of Unstable Currents";
		this.durationTotal = 15;
		this.hiddenCooldown = 45;
		this.hiddenCooldownRemaining = 0;
		this.procChance = 20;
		this.isImportant = true;
	}

	apply() {
		if (!this.active && this.hiddenCooldownRemaining == 0) {
			this.player.stats.spellPower += 190;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
			this.hiddenCooldownRemaining = this.hiddenCooldown;
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.spellPower -= 190;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}

	tick(t) {
		this.hiddenCooldownRemaining = Math.max(0,this.hiddenCooldownRemaining - t);
		super.tick(t);
	}
}

class QuagmirransEye extends Aura {
	constructor(player) {
		super(player);
		this.name = "Quagmirran's Eye";
		this.hiddenCooldown = 45;
		this.hiddenCooldownRemaining = 0;
		this.durationTotal = 6;
		this.procChance = 10;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.hasteRating += 320;
			this.hiddenCooldownRemaining = this.hiddenCooldown;
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.hasteRating -= 320;
		}
		super.fade(endOfIteration);
	}

	tick(t) {
		this.hiddenCooldownRemaining = Math.max(0,this.hiddenCooldownRemaining - t);
		super.tick(t);
	}
}

class ShiffarsNexusHorn extends Aura {
	constructor(player) {
		super(player);
		this.name = "Shiffar's Nexus-Horn";
		this.hiddenCooldown = 45;
		this.hiddenCooldownRemaining = 0;
		this.durationTotal = 10;
		this.procChance = 20;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.spellPower += 225;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
			this.hiddenCooldownRemaining = this.hiddenCooldown;
			super.apply();
		}
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.spellPower -= 225;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}

	tick(t) {
		this.hiddenCooldownRemaining = Math.max(0,this.hiddenCooldownRemaining - t);
		super.tick(t);
	}
}

class ManaEtched4Set extends Aura {
	constructor(player) {
		super(player);
		this.name = "Mana-Etched 4-Set Bonus";
		this.durationTotal = 15;
		this.procChance = 2;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.stats.spellPower += 110;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.stats.spellPower -= 110;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

class DestructionPotionAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Destruction Potion";
		this.durationTotal = 15;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Spell Power + 120 (" + Math.round(this.player.stats.spellPower) + " -> " + Math.round(this.player.stats.spellPower + 120) + ")");
			this.player.combatLog("Crit Chance + 2% (" + Math.round(this.player.stats.critChance * 100) / 100 + "% -> " + Math.round((this.player.stats.critChance + 2) * 100) / 100 + "%)");
			this.player.stats.spellPower += 120;
			this.player.stats.critChance += 2;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Spell Power - 120 (" + Math.round(this.player.stats.spellPower) + " -> " + Math.round(this.player.stats.spellPower - 120) + ")");
			this.player.combatLog("Crit Chance - 2% (" + Math.round(this.player.stats.critChance * 100) / 100 + "% -> " + Math.round((this.player.stats.critChance - 2) * 100) / 100 + "%)");
			this.player.stats.spellPower -= 120;
			this.player.stats.critChance -= 2;
			if (!endOfIteration && this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade();
	}
}

class FlameCapAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Flame Cap";
		this.durationTotal = 60;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Fire Power + 80 (" + Math.round(this.player.stats.firePower) + " -> " + Math.round(this.player.stats.firePower + 80) + ")");
			this.player.stats.firePower += 80;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Fire Power - 80 (" + Math.round(this.player.stats.firePower) + " -> " + Math.round(this.player.stats.firePower - 80) + ")");
			this.player.stats.firePower -= 80;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

class BloodFuryAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Blood Fury";
		this.durationTotal = 15;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Spell Power + 140 (" + Math.round(this.player.stats.spellPower) + " -> " + Math.round(this.player.stats.spellPower + 140) + ")");
			this.player.stats.spellPower += 140;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Spell Power - 80 (" + Math.round(this.player.stats.spellPower) + " -> " + Math.round(this.player.stats.spellPower - 140) + ")");
			this.player.stats.spellPower -= 140;
			if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

// todo add haste to pet and maybe make a separate variable for haste % instead of converting it to haste rating.
class BloodlustAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Bloodlust";
		this.durationTotal = 40;
		this.isImportant = true;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Haste + 30% (" + (Math.round((this.player.stats.hasteRating / hasteRatingPerPercent) * 100) / 100) + "% -> " + (Math.round((this.player.stats.hasteRating / hasteRatingPerPercent) + 30) * 100) / 100 + "%)");
			this.player.stats.hasteRating += 30 * hasteRatingPerPercent;
			//if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Haste - 30% (" + (Math.round((this.player.stats.hasteRating / hasteRatingPerPercent) * 100) / 100) + "% -> " + (Math.round((this.player.stats.hasteRating / hasteRatingPerPercent) - 30) * 100) / 100 + "%)");
			this.player.stats.hasteRating -= 30 * hasteRatingPerPercent;
			//if (this.player.pet) this.player.pet.calculateStatsFromPlayer();
		}
		super.fade(endOfIteration);
	}
}

//todo add effects to pet
class DrumsOfBattleAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Drums of Battle";
		this.durationTotal = 30;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Haste rating + 80 (" + (Math.round((this.player.stats.hasteRating) / hasteRatingPerPercent) * 100) / 100 + "% -> " + (Math.round((this.player.stats.hasteRating + 80) / hasteRatingPerPercent) * 100) / 100 + "%)");
			this.player.stats.hasteRating += 80;
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Haste rating - 80 (" + (Math.round((this.player.stats.hasteRating / hasteRatingPerPercent) * 100) / 100) + "% -> " + (Math.round((this.player.stats.hasteRating - 80) / hasteRatingPerPercent) * 100) / 100 + "%)");
			this.player.stats.hasteRating -= 80;
		}
		super.fade(endOfIteration);
	}
}

class DrumsOfWarAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Drums of War";
		this.durationTotal = 30;
	}

	apply() {
		if (!this.active) {
			this.player.combatLog("Spell Power + 30 (" + this.player.stats.spellPower + " -> " + (this.player.stats.spellPower + 30) + ")");
			this.player.stats.spellPower += 30;
		}
		super.apply();
	}

	fade(endOfIteration = false) {
		if (this.active) {
			this.player.combatLog("Spell Power - 30 (" + this.player.stats.spellPower + " -> " + (this.player.stats.spellPower - 30) + ")");
			this.player.stats.spellPower -= 30;
		}
		super.fade(endOfIteration);
	}
}

class DrumsOfRestorationAura extends Aura {
	constructor(player) {
		super(player);
		this.name = "Drums of Restoration";
		this.durationTotal = 15;
		this.tickTimerTotal = 3;
		this.tickTimerRemaining = 0;
		this.ticksRemaining = 0;
		this.ticksTotal = Math.round(this.durationTotal / this.tickTimerTotal);
		this.manaGain = 600 / (this.durationTotal / this.tickTimerTotal);
	}

	apply() {
		this.active = true;
		this.tickTimerRemaining = this.tickTimerTotal;
		this.ticksRemaining = this.ticksTotal;
	}

	tick(t) {
		if (this.active) {
			this.tickTimerRemaining = Math.max(0, this.tickTimerRemaining - t);

			if (this.tickTimerRemaining == 0) {
				this.player.combatLog("Player gains " + this.manaGain + " mana from Drums of Restoration (" + Math.round(this.player.mana) + " -> " + Math.round(this.player.mana + this.manaGain) + ")");
				this.player.mana = Math.min(this.player.stats.maxMana, this.player.mana + this.manaGain);
				this.ticksRemaining--;
				this.tickTimerRemaining = this.tickTimerTotal;

				if (this.ticksRemaining <= 0) {
					super.fade();
				}
			}
		}
	}
}