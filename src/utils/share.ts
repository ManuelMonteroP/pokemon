import type { PokemonDetail } from '@/types/Pokemon'

export function copyPokemonToClipboard(pokemon: PokemonDetail): void {
  const data = `Name: ${pokemon.name}, Types: ${pokemon.types
    .map((t) => t.type.name)
    .join(', ')}, Abilities: ${pokemon.abilities
    .map((a) => a.ability?.name)
    .filter(Boolean)
    .join(', ')}`

  navigator.clipboard.writeText(data)
  alert('Pokémon copied to clipboard!')
}
