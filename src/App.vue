<script setup>
import TheAppBar from '@/components/TheAppBar.vue';
</script>

<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <v-container class="mt-12">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
