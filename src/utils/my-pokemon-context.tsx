import { createContext, useContext, useEffect, useState } from "react";

export type PokemonLocal = {
  id: number;
  name: string;
  sprites: string;
  types: string[];
  nickname?: string;
};

type MyPokemonContextType = {
  myPokemon: PokemonLocal[];
  savePokemon: (pokemon: Pokemon.Pokemon, nickname: string) => void;
};
