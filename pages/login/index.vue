<script setup lang="ts">
definePageMeta({
  layout: false,
});
const showPass = ref<boolean>(false);
</script>
<template>
  <section>
    <v-row
      style="height: 100vh; background-color: #f6f6f6"
      no-gutters
      align="center"
      justify="center"
    >
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <v-form style="width: 100%" class="pa-10 border rounded-lg bg-white">
          <div class="text-center mb-10">
            <h3 class="text-h4">Login</h3>
          </div>
          <div>
            <InputTextField
              label-text="ຊື່ຜູ້ໃຊ້ງານ"
              placeholderText="ປ້ອນຊື່ຜູ້ໃຊ້"
            />
          </div>
          <div class="mt-4">
            <InputTextField
              label-text="ລະຫັດຜ່ານ"
              placeholder-text="ປ້ອນລະຫັດຜ່ານ"
              :typeField="showPass ? 'text' : 'password'"
            />
          </div>
          <div class="d-flex justify-end">
            <v-checkbox
              v-model="showPass"
              label="ສະແດງລະຫັດຜ່ານ"
              :value="true"
              hide-details
              color="primary"
            ></v-checkbox>
          </div>
          <div class="d-flex justify-center mt-4">
            <v-btn
              type="submit"
              elevation="0"
              block
              rounded="lg"
              size="large"
              color="primary"
              style="font-weight: 600"
              >ລົງຊື່ເຂົ້າໃຊ້</v-btn
            >
          </div>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>
