<script setup>
const props = defineProps({
  modelValue: { type: [String, null], default: null },
  labelText: { type: String, default: "" },
  placeholderText: { type: String, default: "" },
  variantField: { type: String, default: "outlined" },
  densityField: { type: String, default: "compact" },
  width: { type: String, default: "100%" },
  typeField: { type: String, default: "text" },
  hideDetails: { default: true },
  propsDisabled: { type: Boolean, default: false },
  rulesField: {
    type: Array,
    default: () => [(v) => !!v],
  },
  prependInnerIcon: { type: String, default: undefined },
  appendInnerIcon: { type: String, default: undefined },
  clickAppendInner: {
    type: Function,
    default: function () {
      return;
    },
  },
  valueFormat: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  max_length: { type: Number, default: 100 },
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
      {{ labelText }} <span v-if="required" class="color-main">*</span>
    </p>
    <v-text-field
      v-if="!valueFormat"
      :variant="variantField"
      :placeholder="placeholderText"
      :density="densityField"
      :hide-details="hideDetails"
      rounded="lg"
      :style="{ width: width, color: '#000' }"
      :type="typeField"
      :rules="rulesField"
      clearable
      v-model="computedValue"
      color="#ffab00"
      :disabled="propsDisabled"
      :append-inner-icon="appendInnerIcon"
      :prepend-inner-icon="prependInnerIcon"
      @click:append-inner="clickAppendInner"
      :maxLength="max_length"
    ></v-text-field>
  </div>
</template>
