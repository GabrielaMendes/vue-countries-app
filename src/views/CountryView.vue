<script setup>
import countries from "@/data/countries.json"
import { useRoute } from 'vue-router';

const route = useRoute()
const countryName = route.params.name

const country = countries.find(c => c.name === countryName)
</script>

<template>
  <div>{{ country.name }}</div>
</template>