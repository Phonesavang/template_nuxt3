<script setup lang="ts">
import { ref, watch } from "vue";

interface Pagination {
  modelValue: number; // page
  limit: number;
  totalPage: number;
  itemPerPageOptions: number[];
}

// รับ props
const props = defineProps<Pagination>();
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "update:limit", value: number): void;
}>();

// ตัวแปรภายใน (local state)
const currentPage = ref(props.modelValue);
const currentLimit = ref(props.limit);

// sync เมื่อ props เปลี่ยน
watch(
  () => props.modelValue,
  (val) => {
    currentPage.value = val;
  }
);

watch(
  () => props.limit,
  (val) => {
    currentLimit.value = val;
  }
);

// emit เมื่อ user เปลี่ยนหน้า
watch(currentPage, (val) => {
  emit("update:modelValue", val);
});

// emit เมื่อ user เปลี่ยนจำนวน row
const onLimitChange = (val: number) => {
  currentLimit.value = val;
  emit("update:limit", val);
};
</script>

<template>
  <div class="px-4 mt-4 d-flex justify-space-between align-center">
    <div class="d-flex align-center ga-4">
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            elevation="0"
            variant="outlined"
            color="#2b2b2b"
            v-bind="props"
            append-icon="mdi-chevron-down"
          >
            {{ currentLimit }} ແຖວ
          </v-btn>
        </template>
        <v-list class="shadow-main">
          <v-list-item
            v-for="(item, index) in props.itemPerPageOptions"
            :key="index"
            @click="onLimitChange(item)"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <p>ຕໍ່ໜ້າ</p>
    </div>

    <div class="text-center">
      <v-pagination
        v-model="currentPage"
        :length="props.totalPage"
        :total-visible="5"
        elevation="1"
        density="comfortable"
        active-color="primary"
        variant="flat"
      />
    </div>
  </div>
</template>
