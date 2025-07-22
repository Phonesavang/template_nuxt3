<script lang="ts" setup>
const router = useRoute();
const dialog = ref<boolean>(false);
const onLogout = async () => {
  const s = await dialogConfirm("Logout?", null, null);
  if (!s) return;
  localStorage.clear();
  await notification(null, null, null);
  window.location.href = "/login";
};
</script>
<template>
  <v-app-bar
    color="#fff"
    class="py-1 px-6"
    scroll-behavior="elevate"
    style="z-index: 100"
    :height="router.path === '/' ? '80' : '60'"
  >
    <!-- <div class="text-start mx-0"> -->
    <div class="d-flex align-end ga-6">
      <p class="style-title">App template</p>
    </div>
    <!-- </div> -->
    <template v-slot:append>
      <v-card
        class="pa-2 d-flex align-center justify-space-between box_shadow"
        color="#FFF7E7"
        style="gap: 12px; border-radius: 16px"
        min-width="200"
      >
        <v-avatar>
          <v-img
            alt="profile"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
        <!--  -->
        <div>
          <p style="font-size: 14px">Username</p>
          <p style="font-size: 10px; color: #e59a00; font-weight: 700">
            ຕໍາແໜ່ງ:
            <span style="color: #2b2b2b">Admin</span>
          </p>
        </div>
        <!--  -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn size="small" v-bind="props" icon="mdi-dots-vertical"></v-btn>
          </template>
          <v-list nav class="box_shadow">
            <v-list-item value="profile">
              <div class="d-flex" style="gap: 12px">
                <v-icon>mdi-account-outline</v-icon>
                <p>ໂປຣໄຟລ</p>
              </div>
            </v-list-item>
            <v-list-item value="logout" @click="onLogout()">
              <div class="d-flex" style="gap: 12px">
                <v-icon>mdi-logout</v-icon>
                <p>ອອກຈາກລະບົບ</p>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card>
    </template>
  </v-app-bar>
</template>
<style scoped>
.name {
  font-size: 10px;
}
.box_shadow {
  box-shadow: #00000029 0px 1px 4px !important;
}
.shadow {
  box-shadow: 0px 0px 6px 0px rgba(166, 0, 15, 0.1);
}
.style-title {
  color: #ffab00;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.box-auto {
  width: 300px;
}
.box-date {
  width: 200px;
}
@media only screen and (max-width: 1278px) {
  .box-auto {
    width: 200px;
  }
  .box-date {
    width: 120px;
  }
}
@media only screen and (max-width: 1200px) {
  .box-auto {
    width: 150px;
  }
}
</style>
