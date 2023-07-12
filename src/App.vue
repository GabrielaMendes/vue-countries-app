<script setup>
import TheAppBar from "@/components/TheAppBar.vue";
</script>

<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <v-container class="mt-5 mt-md-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
