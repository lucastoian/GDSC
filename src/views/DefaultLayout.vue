<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>

        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-title>CardMarket</v-app-bar-title>
         <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-avatar>
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>


    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 100vh;">
       <div class="page-wrapper"><router-view /></div>
    </v-main>
  </v-layout>
</template>

<script>
  export default {
  }
</script>
