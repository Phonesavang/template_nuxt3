<script lang="ts" setup>
import { manages, reports } from "./dataTab";
const router = useRouter();
const pathName = useRoute();
const drawer = ref<boolean>(true);
const rail = ref<boolean>(true);
const report = ref<string[]>([]);
const checkPath = (path: string) => {
  if (pathName.path.startsWith(path)) return true;
  else false;
};
</script>

<template>
  <v-layout style="max-width: 1920px; margin: 0 auto">
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      class="py-6 text-white"
      :class="`${!rail ? 'px-5' : ''}`"
      color="#EC1B2E"
      width="300"
      permanent
      @click="rail = false"
    >
      <v-list-item nav class="text-center mb-6">
        <template v-slot>
          <div class="d-flex justify-center align-center" style="gap: 12px">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              style="height: 40px; width: 40px"
              alt="logo"
              loading="lazy"
              class="rounded-circle"
            />
            <h2 v-if="!rail" class="text-logo text-white">template</h2>
          </div>
        </template>
      </v-list-item>

      <v-list density="compact" nav v-model:opened="report">
        <v-list-item
          :class="`${pathName.path == '/' ? 'active-class' : 'hover-list'}`"
          to="/"
        >
          <div class="d-flex align-center cursor-pointer" style="gap: 12px">
            <v-icon :style="{ fontWeight: pathName.path == '/' ? 'bold' : '' }"
              >mdi-monitor-dashboard</v-icon
            >
            <v-list-item-title
              :style="{ fontWeight: pathName.path == '/' ? 'bold' : '' }"
              style="font-size: 16px"
              >Dashboard</v-list-item-title
            >
          </div>
        </v-list-item>

        <div class="my-5">
          <p v-if="!rail" class="text-white">ການຈັດການ</p>
          <v-progress-linear
            color="#fff"
            model-value="100"
            rounded
            height="2"
          ></v-progress-linear>
        </div>

        <!-- manage -->
        <v-list-item
          v-for="(m, idx) in manages"
          :key="idx"
          :class="`${checkPath(m?.path) ? 'active-class' : 'hover-list'} py-2`"
          :to="m?.path"
        >
          <div class="d-flex align-center cursor-pointer" style="gap: 12px">
            <v-icon :style="{ fontWeight: checkPath(m?.path) ? 'bold' : '' }">{{
              m?.icon
            }}</v-icon>
            <v-list-item-title
              :style="{ fontWeight: checkPath(m?.path) ? 'bold' : '' }"
              style="font-size: 16px"
              class="py-2"
              >{{ m?.name }}</v-list-item-title
            >
          </div>
        </v-list-item>

        <!-- report -->
        <div class="my-5">
          <p v-if="!rail" class="text-white">ລາຍງານ</p>
          <v-progress-linear
            color="#fff"
            model-value="100"
            rounded
            height="2"
          ></v-progress-linear>
        </div>
        <v-list-item
          v-if="rail"
          @click="rail = false"
          :class="`${
            checkPath('/reports') ? 'active-class' : 'hover-list'
          } py-2`"
        >
          <div class="d-flex align-center cursor-pointer" style="gap: 12px">
            <v-icon>mdi-text-box-outline</v-icon>
            <v-list-item-title
              style="font-size: 16px"
              class="py-2"
              :style="{ fontWeight: checkPath('/reports') ? 'bold' : '' }"
              >ລາຍງານທັງໝົດ</v-list-item-title
            >
          </div>
        </v-list-item>
        <v-list-group value="reports" v-else>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              @click="rail = false"
              :class="`${
                checkPath('/reports') ? 'active-class' : 'hover-list'
              } py-2`"
            >
              <div class="d-flex align-center cursor-pointer" style="gap: 12px">
                <v-icon>mdi-text-box-outline</v-icon>
                <v-list-item-title
                  style="font-size: 16px"
                  class="py-2"
                  :style="{ fontWeight: checkPath('/reports') ? 'bold' : '' }"
                  >ລາຍງານທັງໝົດ</v-list-item-title
                >
              </div>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(m, idx) in reports"
            :key="idx"
            :class="`${checkPath(m.path) ? 'active-class' : 'hover-list'} py-1`"
            style="padding-left: 12px !important"
            :to="m.path"
          >
            <div class="d-flex align-center cursor-pointer" style="gap: 12px">
              <div
                class="icon-bar"
                style="height: 20px; width: 6px; border-radius: 12px"
                :style="{ background: checkPath(m.path) ? '#fff' : '' }"
              ></div>
              <v-list-item-title
                :style="{ fontWeight: checkPath(m.path) ? 'bold' : '' }"
                style="font-size: 14px"
                class="py-1"
                >{{ m?.name }}</v-list-item-title
              >
            </div>
          </v-list-item>
        </v-list-group>
      </v-list>

      <!-- setting -->
      <template v-slot:append>
        <v-list density="compact" nav>
          <v-progress-linear
            color="#fff"
            model-value="100"
            rounded
            height="2"
          ></v-progress-linear>
          <v-list-item
            :class="`${
              checkPath('/settings') ? 'active-class' : 'hover-list'
            } py-2`"
          >
            <div class="d-flex align-center cursor-pointer" style="gap: 12px">
              <v-icon
                :style="{ fontWeight: checkPath('/settings') ? 'bold' : '' }"
                >mdi-tune</v-icon
              >
              <v-list-item-title
                :style="{ fontWeight: checkPath('/settings') ? 'bold' : '' }"
                style="font-size: 16px"
                class="py-2"
                >ການຕັ້ງຄ່າ</v-list-item-title
              >
            </div>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <AppHeader @click="rail = true" />
    <v-main @click="rail = true">
      <div class="px-6 py-4">
        <slot />
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.text-logo {
  font-size: 24px;
  font-weight: 700;
}
.active-class {
  background-color: #a91422;
  font-weight: bold;
}
.font-menu {
  font-size: 16px;
}
.hover-list:hover {
  background-color: #fff;
  color: #2b2b2b;
}
.icon-bar {
  background-color: #a91422;
}
.hover-list:hover .icon-bar {
  background-color: #2b2b2b;
}
.v-navigation-drawer ::-webkit-scrollbar {
  width: 0px;
  overflow-y: auto;
}
/* .v-navigation-drawer ::-webkit-scrollbar-thumb {
  background-color: #fff;
}
.v-navigation-drawer ::-webkit-scrollbar-track {
  background-color: #a91422;
} */
</style>
