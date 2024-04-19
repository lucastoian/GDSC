<template>
  <v-layout>
    <v-app-bar>
      <template #image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        />
      </template>

      <v-app-bar-title>CardMarket</v-app-bar-title>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-avatar>
        <v-icon icon="mdi-account-circle" />
      </v-avatar>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer>
      <Menu />
    </v-navigation-drawer>

    <v-main>
      <div class="page-wrapper">
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>

<script>
  import Menu from '@/components/menu/Menu.vue'
  export default {
  }
</script>

<style lang="sass" scoped>

.page-wrapper
  min-height: 100vh
  padding-bottom: 20px
</style>
