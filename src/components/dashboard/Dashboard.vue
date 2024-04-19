<template>
  <v-container fluid>
    <v-row no-gutters>
      <Carousel />
    </v-row>
    <v-divider color="success" />
    <!--SEZIONE TRENDS-->
    <v-row
      no-gutters
      class="mt-2 fill-height justify-center align-center"
    > 
      <v-icon class="mr-2">
        mdi-trending-up
      </v-icon>
      <p class="text-h4">
        Trends
      </p>
      <v-spacer />
      <v-btn variant="outlined">
        View all
      </v-btn>
    </v-row>
    <v-row>
      <!--SEZIONE BEST SELLERS-->
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="mx-auto"
          prepend-icon="mdi-trending-up"
          title="Bestsellers"
          subtitle="The #1 Vue UI Library"
          hover
        >
          <v-card-text>
            <v-row>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/single.jpg"
                    contain
                  />
                  <v-card-title>
                    Singles
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/booster_box.png"
                    contain
                  />
                  <v-card-title>
                    Singles
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/booster.png"
                    contain
                  />
                  <v-card-title>
                    Boosters
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!--SEZIONE BEST BARGAINS-->
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="mx-auto"
          prepend-icon="mdi-trending-up"
          title="Best Bargains"
          subtitle="The #1 Vue UI Library"
          hover
        >
          <v-card-text>
            <v-row>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/single.jpg"
                    contain
                  />
                  <v-card-title>
                    Singles
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/booster_box.png"
                    contain
                  />
                  <v-card-title>
                    Singles
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col>
                <v-card
                  class="mx-auto"
                >
                  <v-img
                    height="300px"
                    src="@/assets/pokemon/homepage/booster.png"
                    contain
                  />
                  <v-card-title>
                    Boosters
                  </v-card-title>
                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="orange-lighten-2"
                      text="Explore"
                    />
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider color="success" />
    <!--SEZIONE PRODUCTS-->
    <v-row
      no-gutters
      class="mt-2 fill-height justify-center align-center"
    > 
      <v-icon class="mr-2">
        mdi-package-variant-closed
      </v-icon>
      <p class="text-h4">
        Products
      </p>
      <v-spacer />
      <v-btn variant="outlined">
        View all
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/single.jpg"
            contain
          />
          <v-card-title>
            Singles
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/booster_box.png"
            contain
          />
          <v-card-title>
            Singles
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/booster.png"
            contain
          />
          <v-card-title>
            Boosters
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card 
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/single.jpg"
            contain
          />
          <v-card-title>
            Singles
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/booster_box.png"
            contain
          />
          <v-card-title>
            Singles
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-img
            height="300px"
            src="@/assets/pokemon/homepage/booster.png"
            contain
          />
          <v-card-title>
            Boosters
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              text="Explore"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>
