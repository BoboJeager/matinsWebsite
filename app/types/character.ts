export interface Character {
    name: string;
    class: string;
    colors: string[];
    stats: Stats[];
    ideals: string;
    bonds: string;
    flaws: string;
}

export interface Stats {
  abilities: Ability;
  val: string;
  mod: string;
}

export enum Ability {
    STR = "STR",
    DEX = "DEX",
    CON = "CON",
    INT = "INT",
    WIS = "WIS",
    CHA = "CHA",
  }
  