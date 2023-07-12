<script setup>
defineProps({
  country: Object,
});
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        v-bind="props"
        :elevation="isHovering ? 6 : 2"
        class="mx-auto" width="300"
      >
        <v-img
          class="align-end"
          height="200"
          width="300"
          :src="country.flags.png"
          cover
        ></v-img>
        
        <v-card-title class="font-weight-bold">
          {{ country.name }}
        </v-card-title>
        
        <v-card-text>
          <div><span class="font-weight-bold">Population:</span> {{ country.population }}</div>
          <div><span class="font-weight-bold">Region:</span> {{ country.region }}</div>
          <div><span class="font-weight-bold">Capital:</span> {{ country.capital }}</div>
        </v-card-text>
        
        <v-card-actions>
          <v-btn color="primary"> See More </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>
