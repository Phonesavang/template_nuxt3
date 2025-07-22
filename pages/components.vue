<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { count } = storeToRefs(useStoreGlobal());
const { increment } = useStoreGlobal();
const lists = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
  { id: "3", name: "C" },
];
const date = ref<Date | null>(null);
const page = ref<number>(1);
const limit = ref<number>(10);
const totalPage = ref<number>(5);
const list_path: { name: string; to: string; disable: boolean }[] = [
  { name: "Home", to: "/", disable: false },
  { name: "About", to: "/", disable: true },
];
const combo = ref<string | null>(null);
</script>
<template>
  <section>
    <v-container class="mt-16">
      <v-row align="center">
        <v-col cols="4">
          <Breadcrumbs :items="list_path" />
        </v-col>
        <v-col cols="4">
          <InputTextField
            label-text="Text Field"
            placeholder-text="your message"
            :rules-field="[]"
            :required="true"
          />
        </v-col>
        <v-col cols="4">
          <AutocompleteInput
            label="AutocompleteInput"
            placeholder="AutocompleteInput"
            :items="lists"
          />
        </v-col>
        <v-col cols="4">
          <SelectInput
            label="Select Input"
            placeholder="Select"
            :items="lists"
          />
        </v-col>
        <v-col cols="4">
          <p class="mb-1" style="font-size: 14px">Datepicker</p>
          <InputDatePicker v-model="date" />
        </v-col>
        <v-col cols="4">
          <p class="mb-1">Pagination</p>
          <Pagination
            v-model="page"
            :limit="limit"
            :itemPerPageOptions="[10, 20, 50]"
            :totalPage="totalPage"
            @update:limit="(val:number) => (limit = val)"
          />
        </v-col>
        <v-col cols="4">
          <p class="mb-1">Store</p>
          <v-btn color="success" elevation="0" @click="increment">{{
            count
          }}</v-btn>
        </v-col>
        <v-col cols="4">
          <ComboboxInput
            v-model="combo"
            :items="lists"
            label="Combobox"
            placeholder="combobox input"
            :rules="[]"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
