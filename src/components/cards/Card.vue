<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg ">
    <form class="space-y-4 md:space-y-6"  @submit.prevent="registroPublicaciones">
    
    <div v-if="haveMedia" class="px-6 py-4 w-full flex justify-center">
      <div class="font-bold text-xl mb-2">{{ cardData.title }}</div>
      <a :href="cardPublicacion.media.url" class="flex justify-center items-center mb-6" style="width: 250px; height: 250px;">
  <figure class="flex justify-center w-full bg-red-400">
    <img class="w-full h-full" :src="cardPublicacion.media.url" alt="Imagen seleccionada">
  </figure>
        
</a>

    </div>
    <div class="px-6 pt-4 pb-2">
      <!-- Campo para subir una foto -->
      
      
      
      <!-- Campo de entrada de texto -->
      <input v-model="title" type="text" name="titulo" id="titulo" placeholder="Título" class="mb-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
      <textarea v-model="comments" id="comentario" class="mt-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  rows="3" placeholder="Escribe un comentario"></textarea>
      <input id="imagen" type="file" @change="handleFileUpload"  accept="image/*">

      <!-- Interruptor para habilitar/deshabilitar comentarios -->
      <label for="enableComments" class="flex items-center space-x-2">
        <input vm-model="showComments" type="checkbox" id="showComments" v-model="commentsEnabled">
        <span>Habilitar Comentarios</span>
      </label>
    </div>
    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear publicación</button>
  
  </form>
  </div>
</template>

<script>
export default {
  props: {
    cardData: Object, 
  },
  data() {
    return {
      userComment: '',
      commentsEnabled: false,
      cardPublicacion: {
        title:'',
        id:'',
        userId:'',
        comments:'',
        showComments:false,
        media:{}

      },
      haveMedia: false, 
    };
  },
  methods: {
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      const url = URL.createObjectURL(file);
      this.cardPublicacion.media = {
        type: file.type,
        url: url,
      };
      this.haveMedia = true;
    }
  },
  methods:{
      registroPublicaciones() {
            this.$store.dispatch('registroPublicaciones');
        }

    }
},

};
</script>
