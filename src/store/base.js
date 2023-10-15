import { defineStore } from 'pinia'

export const userBaseStore = defineStore('baseStore',{
    // id:'baseStore',
    state: () => {
      return { 
        menu:null,
      }
    },
    
    actions: {
     setMenu(playload){
         try{
             this.menu=playload

         }catch(err){

         }
     }
    },
  })