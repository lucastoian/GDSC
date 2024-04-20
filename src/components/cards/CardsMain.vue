<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-card @mouseup="selectText" variant="outlined" title="Stock Market Trends Analysis" subtitle="Prospects and Risks for Investments in 2024">
          <template #text>
            <p >
              The <span class="highlight">Nasdaq</span> continues to show volatility as <span class="highlight">investors</span> assess the impact of new economic policies. The <span class="highlight">interest rate</span> has reached new highs, affecting <span class="highlight">emerging markets</span> and investment <span class="highlight">funds</span>. Considerations of <span class="highlight">risk</span> and expected return are essential for financial planning.
            </p>
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card @mouseup="selectText" variant="outlined" title="Impact of Cryptocurrencies on Global Markets" subtitle="Dynamics and Volatility in 2024">
          <template #text>
            <p>
              The rise of <span class="highlight">Bitcoin</span> has raised regulatory issues while <span class="highlight">institutional investors</span> explore <span class="highlight">diversification</span> options in the <span class="highlight">cryptocurrency</span> sector. The integration of <span class="highlight">blockchain</span> technology is transforming traditional investments.
            </p>
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card @mouseup="selectText" variant="outlined" title="Real Estate Investments and Their Economic Impact" subtitle="Growth Prospects in the Real Estate Sector">
          <template #text>
            <p>
              The <span class="highlight">real estate</span> market remains a cornerstone for <span class="highlight">investors</span> despite economic uncertainties. Purchasing <span class="highlight">properties</span> in growing areas offers a stable return and protection against <span class="highlight">inflation</span>.
            </p>
          </template>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card @mouseup="selectText" variant="outlined" title="Dynamics of International Stock Markets" subtitle="Market Analysis and Investment Opportunities">
          <template #text>
            <p >
              The stock exchanges of <span class="highlight">Shanghai</span> and <span class="highlight">New York</span> demonstrate how globalization influences <span class="highlight">equity investments</span>. <span class="highlight">Geopolitical risks</span> and <span class="highlight">trade policies</span> play a significant role in investment decisions.
            </p>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-bottom-sheet v-model="bottomSheet">
    <v-card>
      <v-card-title>{{ selection }}</v-card-title>
      <v-card-text>{{ gptResponse }}</v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
<script>
import chatGptApi from '@/api/chatgpt.api'
export default {
  name: 'CardsMain',
  data: () => ({
    selection: undefined,
    gptResponse: undefined,
    bottomSheet: false

  }),
    created() {

    this.initialize()
  },
  methods:{
     initialize() {

     },

     selectText(event) {
    const selectedText = window.getSelection();
    console.log(selectedText)
    this.selection = selectedText
    console.log(event.currentTarget.textContent)
    chatGptApi.ask(this.selection.toString(), event.currentTarget.textContent).then(response =>{
     
            console.log(response)
            this.gptResponse = response.response;
            this.bottomSheet = true

            console.log(this.gptResponse)

        })
  }
     
  }
}
</script>

<style scoped>
.highlight {
  color: blue;         /* Imposta il colore del testo a blu */
  font-weight: bold;   /* Rende il testo leggermente più grassetto */
  cursor: pointer;     /* Cambia il cursore in un puntatore per indicare la cliccabilità */
}
</style>

<style>
.span{
  color:blue !important
}
</style>
