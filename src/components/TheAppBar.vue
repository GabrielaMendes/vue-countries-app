<script setup>
import { ref, onMounted } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";
import BarIcon from "./Icons/BarIcon.vue";

const darkMode = ref(false);
const theme = useTheme();

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  const themeValue = darkMode.value ? "dark" : "light";
  theme.global.name.value = themeValue;
  localStorage.setItem("theme", themeValue);
};

onMounted(() => {
  if (localStorage.getItem("theme")) {
    darkMode.value = localStorage.getItem("theme") === "dark";
  }
});
</script>

<template>
  <v-app-bar scroll-behavior="hide" color="background">
    <!-- Logo -->
    <template v-slot:prepend>
      <BarIcon :width="35" :height="35" :color="theme.global.current.value.colors.primary" />
    </template>
    <v-app-bar-title class="font-weight-medium">
      <span class="logo">Where in the world?</span>
    </v-app-bar-title>

    <!-- Actions -->
    <template v-slot:append>
      <v-divider :vertical="true" :inset="true" class="ml-2 d-none d-sm-flex"></v-divider>

      <v-switch inset color="primary" class="ml-6 d-none d-sm-flex" @change="toggleTheme">
        <template v-slot:label>
          <v-icon v-if="darkMode" size="x-large" class="material-symbols-outlined" color="primary"
            >dark_mode</v-icon
          >
          <v-icon v-else size="x-large" class="material-symbols-outlined">brightness_5</v-icon>
        </template>
      </v-switch>
    </template>

    <!-- Smaller screens -->

    <v-btn icon @click="toggleTheme" class="d-flex d-sm-none">
      <v-icon v-if="darkMode" size="x-large" class="material-symbols-outlined" color="primary"
        >dark_mode</v-icon
      >
      <v-icon v-else size="x-large" class="material-symbols-outlined" color="text-secondary"
        >brightness_5</v-icon
      >
    </v-btn>
  </v-app-bar>
</template>
