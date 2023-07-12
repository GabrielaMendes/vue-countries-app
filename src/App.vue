<script setup>
import TheAppBar from './components/TheAppBar.vue';
</script>

<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
