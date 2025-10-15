<script setup lang="ts">
const { t, setLocale } = useI18n();
</script>
<template>
  <section>
    <div class="pa-6">
      <h1>{{ t("welcome") }}</h1>
      <p>{{ t("hello") }}</p>
      <v-btn color="success" @click="setLocale('lo')">lo</v-btn>
      <v-btn color="primary" @click="setLocale('en')">en</v-btn>
      <v-card class="pa-4 mt-4">
        <v-card-title>{{ t("menu.home") }}</v-card-title>
        <v-card-text>
          <p>{{ t("common.success") }}</p>
        </v-card-text>
      </v-card>
    </div>
  </section>
</template>
