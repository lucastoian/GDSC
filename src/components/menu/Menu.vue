<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card
    class="mx-auto"
    width="256"
  >
    <v-layout>
      <v-navigation-drawer
        absolute
        permanent
      >
        <v-list>
          <v-list-item
            prepend-avatar="@/assets/pokemon/logo.png"
            title="Pokémon"
            href="/"
          />
        </v-list>
  
        <v-divider />
  
        <v-list
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            :href="item.to"
            color="primary"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>
  
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main style="height: 354px;" />
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { text: 'Singles', icon: 'mdi-cards-outline', to:'/cards' },
        { text: 'Booster', icon: 'mdi-mirror-rectangle', to:'/cards' },
        { text: 'Booster Boxes', icon: 'mdi-package-variant-closed', to:'/cards' },
        { text: 'Accessories', icon: 'mdi-toolbox-outline', to:'/cards' },
        { text: 'Expansions', icon: 'mdi-expand-all-outline', to:'/cards' }
      ],
    }),
  }
</script>