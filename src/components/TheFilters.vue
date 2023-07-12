<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const country = ref("");

const regions = ["All Regions", "Africa", "America", "Asia", "Europe", "Oceania"];
const currRegion = ref("All Regions");
</script>

<template>
  <div 
    class="mx-auto d-md-flex justify-space-between"
    style="max-width: 1440px;"
  >
    <!-- Search Bar -->
    <v-responsive :max-width="mdAndUp ? 500 : 'auto'">
      <v-text-field
        v-model="country"
        variant="filled"
        placeholder="Search for a country..."
        rounded="lg"
        base-color="transparent"
        color="transparent"
      >
        <template v-slot:append-inner>
          <v-btn type="submit" icon flat color="transparent">
            <v-icon size="large" color="primary" class="mr-1">search</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-responsive>

    <!-- Filter bt Region -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="text-body-1 py-7 px-5 d-flex justify-space-between">
          <span>{{ currRegion === "All Regions" ? "Filter by Region" : currRegion }}</span>
          <v-icon class="ml-3" size="x-large" color="primary">expand_more</v-icon>
        </v-btn>
      </template>
      <v-list elevation="3">
        <div v-for="region in regions" :key="region">
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item
              v-bind="props"
              style="cursor: pointer"
              :class="{ 'bg-tertiary': isHovering }"
            >
              <v-list-item-title :value="region">{{ region }}</v-list-item-title>
            </v-list-item>
          </v-hover>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>
