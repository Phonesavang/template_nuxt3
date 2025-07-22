<script setup lang="ts">
import { computed } from "vue";

type SelectItem = {
  [key: string]: any;
};

const props = withDefaults(
  defineProps<{
    modelValue: string | number | object | null | undefined;
    item_value?: string;
    item_title?: string;
    items?: SelectItem[];
    label?: string;
    placeholder?: string;
    rules?: ((v: any) => boolean)[];
    multiple?: boolean;
    disabled?: boolean;
    returnObject?: boolean;
    required?: boolean;
  }>(),
  {
    modelValue: null,
    item_value: "id",
    item_title: "name",
    items: () => [],
    label: "",
    placeholder: "",
    rules: () => [(v: any) => !!v],
    multiple: false,
    disabled: false,
    returnObject: false,
    required: false,
  }
);

const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: string | number | object | null | undefined
  ): void;
}>();

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
<template>
  <div>
    <p class="mb-1" style="font-size: 14px">
      {{ label }} <span v-if="required" class="text-red">*</span>
    </p>
    <v-select
      style="width: 100%"
      v-model="computedValue"
      clearable
      :items="items"
      :item-value="item_value"
      :item-title="item_title"
      variant="outlined"
      :placeholder="placeholder"
      density="compact"
      hide-details
      :rules="rules"
      no-data-text="ບໍ່ມີຂໍ້ມູນ.."
      :multiple="multiple"
      :disabled="disabled"
      rounded="lg"
      color="primary"
      :return-object="returnObject"
    ></v-select>
  </div>
</template>
