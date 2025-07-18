<script setup>
// import { computed } from "vue";
const props = defineProps({
  modelValue: { type: [String, Number, Object, null], default: null },
  item_value: { type: String, default: "id" },
  item_title: { type: String, default: "name" },
  items: { type: Array, default: [] },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  rules: { type: Array, default: () => [(v) => !!v] },
  multiple: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  returnObject: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);

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
