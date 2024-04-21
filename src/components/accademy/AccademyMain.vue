<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <v-container fluid>
        <v-row>
      <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
        <v-card class="d-flex flex-row align-center pa-4 ma-2 rounded-lg" :class="item.color" @click="navigate(item.to)">
          <v-img :src="item.icon" class="mr-4" contain width="56" height="106" />
          <v-card-title class="white--text">{{ item.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
   </v-container>
 

 </template>
 <script>
 import chatGptApi from '@/api/chatgpt.api'
 export default {
   name: 'AccademyMain',
   data: () => ({
    items: [
        {
          title: 'Fundamentals',
          icon: 'https://tcgmarket.s3.eu-west-3.amazonaws.com/beapp/assets/school.png',
          color: 'purple-gradient'
        },
        {
          title: 'Crypto market',
          icon: 'https://tcgmarket.s3.eu-west-3.amazonaws.com/beapp/assets/bitco.png',
          color: 'purple-gradient',
          to: '/cryptogame'
        },
        {
          title: 'Financial market',
          icon: 'https://tcgmarket.s3.eu-west-3.amazonaws.com/beapp/assets/graf.png',
          color: 'purple-gradient'
        }
      ]
 
   }),
     created() {
 
     this.initialize()
   },
   methods:{
      initialize() {
 
      },
      navigate(path) {
      this.$router.push(path);
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
 .purple-gradient {
   background: linear-gradient(to right, #9C27B0, #E040FB); /* Example gradient */
   color: white;
 }

 </style>