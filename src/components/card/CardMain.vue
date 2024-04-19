<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container fluid>
    <!-- Sezione Titolo + Ricerca Globale -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="pb-2"
      >
        <v-card class="elevation-0">
          <v-container fluid>
            <v-row>
              <v-toolbar
                title="Pokemon Card List"
              >
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                />
                <v-text-field
                  v-model="search"
                  class="pt-0"
                  append-inner-icon="mdi-magnify"
                  label="Search"
                  clearable
                  hide-details
                />
              </v-toolbar>
              <!-- Sezione filtri -->
              <v-card
                class="w-100 elevation-0"
              >
                <v-row class="mt-1">
                  <v-col
                    cols="12"
                    md="3"
                    lg="2"
                  >
                    <v-autocomplete
                      label="Expansion"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    lg="2"
                  >
                    <v-autocomplete
                      label="Set Name"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    lg="2"
                  >
                    <v-autocomplete
                      label="Rarity"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    lg="2"
                  >
                    <v-autocomplete
                      label="Autocomplete"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  
    <!-- Sezione Data Table -->
    <v-row justify="center">
      <v-col
        cols="12"
        class="pt-2"
      >
        <v-card>
          <v-data-table
            :headers="headers"
            :items="cardList"
            :search="search"
            no-data-text="Sorry, no matches for your query"
          >
            <template #item.image="{ item }">
              <v-card
                class="my-2"
                elevation="0"
                rounded
              >
                <v-img
                  :src="`${item.image}`"
                  max-height="120"
                  contain
                />
              </v-card>
            </template>
  
            <template #item.action="{ item }">
              <v-btn
                class="ma-2"
                color="red"
                :href="'pokemon/singles/' + item.name + '-' + item.setName"
              >
                View listings
                <v-icon
                  icon="mdi-cart"
                  end
                />
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import cardsApi from '@/api/cards.api'
  export default {
    name: 'CardsMain',
    data: () => ({
      headers: [
        {
          title: 'Name',
          align: 'center',
          sortable: false,
          value: 'name',
        },
            {
          title: 'Immage',
          align: 'center',
          sortable: false,
          value: 'image',
        },
        {
          title: 'Card Number',
          align: 'center',
          sortable: false,
          value: 'number',
        },
          {
          title: 'Rarity',
          align: 'center',
          sortable: false,
          value: 'rarity',
        },
        {
          title: 'Set Name',
          align: 'center',
          sortable: false,
          value: 'setName',
        },
          {
          title: 'Available',
          align: 'center',
          sortable: false,
          value: 'quantity',
        },
          {
          title: 'Add to Cart',
          align: 'center',
          sortable: false,
           value: 'action',
        }
      ],
      cardList: undefined,
      search: undefined,
      expandFilter: true
  
    }),
      created() {
  
      this.initialize()
    },
    methods:{
       initialize() {
          cardsApi.fetchAll().then(response =>{
              this.cardList = response.data
          })
       }
    }
  }
  </script>
  