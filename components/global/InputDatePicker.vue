<script setup lang="ts">
const menu = ref<boolean>(false);

const props = defineProps<{
  modelValue: Date | string | null;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Date | string | null): void;
}>();

// Ensure internalValue is always a Date object when it's not null
const internalValue = ref<Date | null>(
  props.modelValue ? new Date(props.modelValue) : null
);

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue ? new Date(newValue) : null;
  }
);

const computedValue = computed({
  get: () => internalValue.value,
  set: (value) => {
    // Ensure we're working with Date objects
    const dateValue = value ? new Date(value) : null;
    internalValue.value = dateValue;
    emit("update:modelValue", dateValue);
  },
});

const formattedValue = computed(() => {
  if (internalValue.value) {
    return formatDate(internalValue.value);
  }
  return "";
});

const clearValue = () => {
  menu.value = false;
  internalValue.value = null;
  emit("update:modelValue", null);
};
</script>

<template>
  <section>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template #activator="{ props }">
        <v-text-field
          :value="formattedValue"
          v-bind="props"
          hide-details
          variant="outlined"
          density="compact"
          clearable
          color="primary"
          :placeholder="placeholder || 'DD/MM/YYYY'"
          append-inner-icon="mdi-calendar-range"
          @click="menu = true"
          @click:clear="clearValue"
          rounded="lg"
        ></v-text-field>
      </template>
      <div class="d-flex justify-center">
        <div class="box-shadow">
          <v-date-picker
            v-model="computedValue"
            @update:model-value="menu = false"
            locale="th"
            show-adjacent-months
            color="primary"
          >
            <template v-slot:actions>
              <v-btn
                size="small"
                color="primary"
                elevation="0"
                variant="text"
                @click="menu = false"
                >Confirm</v-btn
              >
              <v-btn
                size="small"
                color="#999"
                elevation="0"
                variant="text"
                @click="clearValue"
                >Clear</v-btn
              >
            </template>
          </v-date-picker>
        </div>
      </div>
    </v-menu>
  </section>
</template>
<style scoped>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px !important;
}
</style>
