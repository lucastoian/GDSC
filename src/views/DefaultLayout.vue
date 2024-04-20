<template>
  <v-layout>
    <v-app-bar primary class="bg-purple-darken-4">
      <v-app-bar-title>Fin Ai Learning</v-app-bar-title>
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


    <v-main>
      <div class="page-wrapper">
        <router-view />
      </div>
    </v-main>
  </v-layout>
  <v-bottom-navigation>
  <v-btn value="recent">
    <v-icon>mdi-text-box-multiple-outline</v-icon>

    <span>News</span>
  </v-btn>

  <v-btn value="favorites">
    <v-icon>mdi-play-circle-outline</v-icon>

    <span>Accademy</span>
  </v-btn>

  <v-btn value="nearby">
    <v-icon>mdi-account</v-icon>

    <span>Profile</span>
  </v-btn>
</v-bottom-navigation>
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>

.page-wrapper
  min-height: 100vh
  padding-bottom: 20px
</style>
