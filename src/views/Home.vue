<template>
    <section class="w-screen bg-gray-200 min-h-screen flex justify-center items-center flex-col">
        <h1 class="text-6xl font-extrabold text-teal-600">Expo ingeniería!</h1>
        <router-link :to="{ name: 'SingUp' }">registro</router-link>
    </section>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        title: {
            get() {
                return this.$store.getters.getTitle;
            },
            set(value) {
                this.$store.commit('setTitle', value);
            }
        }
    }
}
</script>