<!-- eslint-disable vue/valid-v-slot -->
<!-- eslint-disable vue/no-v-html -->
<template>
 <v-timeline direction="horizontal" line-inset="12" class="mt-4">
    <v-timeline-item
      :dot-color="currentLevel >= 0 ? 'green' : 'grey'"
      fill-dot
      size="small"
      :class="{ 'green-line': currentLevel > 0 }"
    >
      Level 1
    </v-timeline-item>
  
    <v-timeline-item
      :dot-color="currentLevel >= 1 ? 'green' : 'grey'"
      fill-dot
      size="small"
      :class="{ 'green-line': currentLevel > 1 }"
    >
      Level 2
    </v-timeline-item>
  
    <v-timeline-item
      :dot-color="currentLevel >= 2 ? 'green' : 'grey'"
      fill-dot
      size="small"
      :class="{ 'green-line': currentLevel > 2 }"
    >
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
    />
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
      <v-col
        cols="12"
        md="12"
      >
        <v-btn
          v-for="(answer, index) in gameData[currentAnswer].answers"
          :key="index"
          :class="getButtonClass(index)"
          class="d-flex flex-row align-center rounded-lg bg-purple-accent-1 block mt-4"
          height="84"
          density="compact" 
          width="100%"
          @click="checkAnswer(index, answer.isCorrect)"
        >
          <p>{{ answer.option }}</p>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog
          transition="dialog-bottom-transition"
          width="auto" v-model="win">
    <v-card>
      <v-card-title>You Win!</v-card-title>
      <v-card-text>Congratulations, you completed this level!</v-card-text>
    </v-card>
  </v-dialog>
</template>
 <script>
 import chatGptApi from '@/api/chatgpt.api'
 export default {
   name: 'GameMain',
   data: () => ({
    gameData: undefined,
    currentAnswer:0,
    selectedAnswer: null,
    answerStatus: null,
    currentLevel: 0,
    win: false
 
   }),
     created() {

      
 
     this.initialize()
   },
   methods:{
      initialize() {
    
        chatGptApi.game("easy").then(response =>{
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
      setTimeout(() => {
  if (this.currentAnswer === 4) {
    this.currentLevel++;
    if(this.currentLevel == 3){
        this.win = true;
    }
    if (this.currentLevel === 1) {
      chatGptApi.game("medium").then(response => {
        this.currentAnswer = 0;
        this.gameData = response.response.questions;
        console.log(response.response);
      });
    } else if (this.currentLevel === 2) {
      chatGptApi.game("hard").then(response => {
        this.currentAnswer = 0;
        this.gameData = response.response.questions;
        console.log(response.response);
      });
    }
  }
}, 400); // Assicurati che il timeout sia fuori dalle parentesi graffe della callback

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
 .green-line::before {
  border-color: green !important; /* Imposta il colore delle linee tra gli elementi */
}

.v-timeline .v-timeline-item::before {
  border-color: default !important; /* Imposta il colore predefinito delle linee */
}
.v-timeline .v-timeline-item.green-line + .v-timeline-item::before {
  border-left-color: green !important;
}

.v-timeline .v-timeline-item:first-child.green-line::before {
  border-left-color: transparent !important; /* Per il primo item se non deve avere una linea verde prima di esso */
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