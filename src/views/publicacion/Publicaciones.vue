<template>
    <section class="bg-gray-50 dark:bg-gray-900 w-screen min-h-screen">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class=" bg-red-40  p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Crear Publicaciones
            </h1>
            
            <form class="space-y-4 md:space-y-6"  @submit.prevent="registroPublicaciones">
                
              <!-- Tu formulario y contenido van aquí -->
              <!-- Puedes insertar la tarjeta aquí -->
              <Card :cardData="{
            content: 'Contenido de la tarjeta',
            image: './OIG.jpeg',
              alt: 'Sunset in the mountains'
              }" />

            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Card from '../../components/cards/Card.vue';
  
  
  export default {
    name: 'Publicaciones',
    components: {
      Card,
    },
    registroPublicaciones() {
            this.$store.dispatch('registroPublicaciones');
        }
  };
  </script>
  
