<template>
    <section class="bg-white  py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Comentarios {{ comments.length }}</h2>
            </div>
            <form class="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                    <label for="comment" class="sr-only">su comentario</label>
                    <textarea id="comment" rows="3"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                        placeholder="escriba su comentario..." required></textarea>
                </div>
                <button type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-900 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                    Publicar comentarios
                </button>
            </form>

            <article v-for="comment in comments" :key="comment.id" class="p-6 text-base bg-white rounded-lg ">
                <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="logo">{{
                                    comment.username }}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08">{{
                            comment.date }}</time></p>
                    </div>
                </footer>
                <p class="text-gray-500 dark:text-gray-400">{{ comment.description }}</p>

            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Comments',
    props: {
        comments: Object,
    }
}
</script>