<template>
    <section class="bg-gray-50 dark:bg-gray-900 w-screen min-h-screen p-2 flex flex-col items-center">
        <PostCard v-for="post in posts" :key="post.id" :post="post"/>
    </section>
</template>

<script>
import PostCard from '../../components/cards/PostCard.vue';

export default {
    name: 'Posts',
    components: {
        PostCard,
    },
    computed: {
        posts(){
            return this.$store.getters.getPosts;
        }
    }
}
</script>