<script setup>
import countries from "@/data/countries.json"
import TheFilters from "@/components/TheFilters.vue";
import CountryCard from "../components/CountryCard.vue";
</script>

<template>
  <TheFilters />
  
  <div
    class="mt-8 d-flex justify-center flex-wrap" 
    style="gap: 5rem"
  >
    <CountryCard
      v-for="country in countries"
      :key="country.alpha3Code"
      :country="country"
    />
  </div>
</template>