<script setup lang="ts">
const router = useRouter();
const props = defineProps<{
  items: { name: string; to: string; disable: boolean }[];
}>();
const toPath = (path: string, status: boolean) => {
  if (!status) {
    router.push(path);
  }
};
</script>
<template>
  <div>
    <div class="d-flex align-center" style="gap: 0.5rem">
      <div
        v-for="(data, idx) in props?.items"
        :key="idx"
        @click="toPath(data?.to, data?.disable)"
        :style="{ color: items?.length == idx + 1 ? '#FFAB00' : '#999999' }"
      >
        <span style="cursor: pointer; font-size: 14px">
          {{ data?.name }}
        </span>
        <span v-if="idx + 1 < items?.length" class="ml-1">
          <v-icon icon="mdi-chevron-right"></v-icon>
        </span>
      </div>
    </div>
  </div>
</template>
