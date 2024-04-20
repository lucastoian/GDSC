<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <v-timeline
    direction="horizontal"
    line-inset="12"
    class="mt-4"
  >
    <v-timeline-item   dot-color="green"
      fill-dot>
      Level 1
    </v-timeline-item>
  
    <v-timeline-item>
      Level 2
    </v-timeline-item>
  
    <v-timeline-item>
      Level 3
    </v-timeline-item>
  </v-timeline>

  <v-container>
    <v-progress-linear
  class="mt-2"
      color="light-blue"
      height="10"
      :model-value="currentAnswer * 20"
      striped
    ></v-progress-linear>
  </v-container>


  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="12"
      >
        <v-card
          v-if="gameData != undefined"
          height="104"
          class="d-flex flex-row align-center rounded-lg purple-gradient"
        >
          <v-card-text>
            <p>{{ gameData[currentAnswer].question }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-row v-if="gameData">
    <v-col cols="12" md="12">
      <v-btn
        v-for="(answer, index) in gameData[currentAnswer].answers"
        :key="index"
        :class="getButtonClass(index)"
        @click="checkAnswer(index, answer.isCorrect)"
        class="d-flex flex-row align-center rounded-lg bg-purple-accent-1 block mt-4"
        height="84" 
        density="compact"
        width="100%"
      >
        <p>{{ answer.option }}</p>
      </v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>
 <script>
 import chatGptApi from '@/api/chatgpt.api'
 export default {
   name: 'GameMain',
   data: () => ({
    gameData: undefined,
    currentAnswer:0,
    selectedAnswer: null,
    answerStatus: null
 
   }),
     created() {

      
 
     this.initialize()
   },
   methods:{
      initialize() {
    
        chatGptApi.game("Crypto").then(response =>{
       this.gameData = response.response.questions
        console.log(response.response)
        })
      
    },
    checkAnswer(index, isCorrect) {
      this.selectedAnswer = index;
      this.answerStatus = isCorrect ? 'correct' : 'incorrect';
      // Aggiungere un timeout se si desidera reset dopo un certo tempo
      setTimeout(() => {

        if(this.answerStatus == 'correct'){
            this.currentAnswer ++
        }
        if(this.answerStatus == 'incorrect'){
            this.currentAnswer = 0
        }
    

        this.selectedAnswer = null;
        this.answerStatus = null;

      }, 2000); // Reset dopo 2 secondi
    },
    getButtonClass(index) {
      if (this.selectedAnswer === index) {
        return this.answerStatus === 'correct' ? 'bg-green' : 'bg-red';
      }
      return '';
    }
}
     

 }
 </script>
 
 <style scoped>
 .purple-gradient {
   background: linear-gradient(to right, #9C27B0, #E040FB); /* Example gradient */
   color: white;
 }
 .bg-green {
  background-color: #4CAF50; /* Green */
}
.bg-red {
  background-color: #F44336 !important; /* Red */
}
 .text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

 </style>