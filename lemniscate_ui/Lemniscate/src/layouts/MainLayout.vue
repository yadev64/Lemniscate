<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Lemniscate </q-toolbar-title>
        <q-avatar>
          <img
            src="https://images.unsplash.com/photo-1639165637996-d6e79aff8823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
        </q-avatar>
        <!-- <h6 class="q-my-md q-mx-md">Daniel</h6> -->

        <q-btn-dropdown class="q-ml-md" stretch flat label="Daniel">
          <q-list>
            <!-- <q-item-label header>Folders</q-item-label> -->

            <!-- <q-separator inset spaced /> -->
            <q-item-label header>Sign out</q-item-label>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="inset-shadow">
      <q-list class="q-pt-md">
        <!-- <q-item-label header> Essential Links </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    title: "Analytics",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/analytics",
  },
  {
    title: "Customers",
    caption: "chat.quasar.dev",
    icon: "person",
    link: "/customers",
  },
  {
    title: "Collections",
    caption: "forum.quasar.dev",
    icon: "collections",
    link: "/collections",
  },
  {
    title: "Apps",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "/apps",
  },
  // {
  //   title: "Facebook",
  //   caption: "@QuasarFramework",
  //   icon: "public",
  //   link: "https://facebook.quasar.dev",
  // },
  // {
  //   title: "Quasar Awesome",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
