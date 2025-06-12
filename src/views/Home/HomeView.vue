<template>
  <div class="home-container">
    <Transition name="fade">
      <AppLoader :model-value="loading" />
    </Transition>

    <div v-if="!loading" class="home-wrapper">
      <div class="fixed-header">
        <BaseInput v-model="search" :icon="searchIcon" placeholder="Search" :disabled="loading" />
      </div>

      <EmptyState v-if="filteredPokemons.length === 0" @goBack="goToWelcome" />
      <PokemonList v-else :pokemons="filteredPokemons" :favorites="favorites" @toggleFavorite="toggleFavorite"
        @select="openPokemon" @loadMore="loadMorePokemons" />

      <FooterTabs v-model="selectedTab" v-if="filteredPokemons.length !== 0" />
    </div>
    <PokemonModal v-if="showModal && selectedPokemon" :pokemon="selectedPokemon"
      :isFavorite="selectedPokemon ? favorites.includes(selectedPokemon.name) : false" @toggleFavorite="toggleFavorite"
      @share="handleShare" @close="showModal = false" />
  </div>
</template>


<script setup lang="ts">
import { useHomeView } from './useHomeView'
import searchIcon from '@/assets/icons/search.svg'

import AppLoader from '@/components/Loading/AppLoader/AppLoader.vue'
import PokemonList from '@/components/List/PokemonList.vue'
import FooterTabs from '@/components/Footer/FooterTabs.vue'
import EmptyState from '@/components/Empty/EmptyState.vue'
import BaseInput from '@/components/UiKit/Input/BaseInput.vue'
import PokemonModal from '@/components/Modal/PokemonModal.vue'
import './HomeView.css'

const {
  favorites,
  loading,
  search,
  selectedTab,
  selectedPokemon,
  showModal,
  filteredPokemons,
  handleShare,
  openPokemon,
  toggleFavorite,
  goToWelcome,
  loadMorePokemons,
} = useHomeView()
</script>
