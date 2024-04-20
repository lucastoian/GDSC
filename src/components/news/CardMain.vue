<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
   <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" v-for="card in cards" :key="card.title">
        <v-card  :subtitle="card.subtitle" >
          <v-img v-if="card.imageUrl" :src="card.imageUrl" class="align-end" height="400px" cover>
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
          </v-img>
          <v-expansion-panels>
            <v-expansion-panel
              title="Tap to expand"
            >
              <template #text >
                <p @mouseup="selectText" v-html="card.textFormatted"></p>
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
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
    bottomSheet: false,
    cards:[
    {
    "title": "Renewable Energy Stocks Surge",
    "imageUrl": "/src/assets/sole.jpeg",
    "subtitle": "Growing Investor Interest in Sustainable Investments",
    "text": "As global attention shifts towards sustainability, renewable energy stocks have seen a significant surge. Investors are increasingly drawn to companies that demonstrate strong commitments to environmental sustainability. This shift is not only driven by ethical considerations but also by the substantial growth potential these companies offer.",
    "textFormatted": "As global attention shifts towards <span class='highlight'>sustainability</span>, renewable energy stocks have seen a significant <span class='highlight'>surge</span>. Investors are increasingly drawn to companies that demonstrate strong commitments to <span class='highlight'>environmental sustainability</span>. This shift is not only driven by <span class='highlight'>ethical considerations</span> but also by the substantial growth potential these companies offer."
},
  {
    "title": "Stock Market Trends Analysis",
    "subtitle": "Prospects and Risks for Investments in 2024",
    "text": "The Nasdaq continues to show volatility as investors assess the impact of new economic policies. The interest rate has reached new highs, affecting emerging markets and investment funds. Considerations of risk and expected return are essential for financial planning.",
    "imageUrl": "/src/assets/stocks.jpeg",
    "textFormatted": "The <span class='highlight'>Nasdaq</span> continues to show volatility as <span class='highlight'>investors</span> assess the impact of new economic policies. The <span class='highlight'>interest rate</span> has reached new highs, affecting <span class='highlight'>emerging markets</span> and investment <span class='highlight'>funds</span>. Considerations of <span class='highlight'>risk</span> and expected return are essential for financial planning."
  },
  {
    "title": "Impact of Cryptocurrencies on Global Markets",
    "subtitle": "Dynamics and Volatility in 2024",
    "imageUrl": "/src/assets/crypto.jpeg",
    "text": "The rise of Bitcoin has raised regulatory issues while institutional investors explore diversification options in the cryptocurrency sector. The integration of blockchain technology is transforming traditional investments.",
    "textFormatted": "The rise of <span class='highlight'>Bitcoin</span> has raised regulatory issues while <span class='highlight'>institutional investors</span> explore diversification options in the <span class='highlight'>cryptocurrency</span> sector. The integration of <span class='highlight'>blockchain</span> technology is transforming traditional investments."
  },
  {
    "title": "Real Estate Investments and Their Economic Impact",
    "subtitle": "Growth Prospects in the Real Estate Sector",
    "imageUrl": "/src/assets/estates.jpeg",
    "text": "The real estate market remains a cornerstone for investors despite economic uncertainties. Purchasing properties in growing areas offers a stable return and protection against inflation.",
    "textFormatted": "The <span class='highlight'>real estate</span> market remains a cornerstone for <span class='highlight'>investors</span> despite economic uncertainties. Purchasing <span class='highlight'>properties</span> in growing areas offers a stable return and protection against <span class='highlight'>inflation</span>."
  },
  {
    "title": "Dynamics of International Stock Markets",
    "subtitle": "Market Analysis and Investment Opportunities",
    "imageUrl": "/src/assets/dynamics.jpeg",
    "text": "The stock exchanges of Shanghai and New York demonstrate how globalization influences equity investments. Geopolitical risks and trade policies play a significant role in investment decisions.",
    "textFormatted": "The stock exchanges of <span class='highlight'>Shanghai</span> and <span class='highlight'>New York</span> demonstrate how globalization influences <span class='highlight'>equity investments</span>. <span class='highlight'>Geopolitical risks</span> and <span class='highlight'>trade policies</span> play a significant role in investment decisions."
  }
]


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

<style >
.highlight {
  color: blue !important;         /* Imposta il colore del testo a blu */
  font-weight: bold;   /* Rende il testo leggermente più grassetto */
  cursor: pointer;     /* Cambia il cursore in un puntatore per indicare la cliccabilità */
}
</style>

<style>
.span{
  color:blue !important
}
</style>