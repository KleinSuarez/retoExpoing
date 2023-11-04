<template>
    <!-- component -->
    <div class="flex  w-11/12 md:w-1/2 rounded-xl items-start px-4 py-6 bg-slate-100 my-1 max-w-xl">
        <img class="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar">
        <div class="">
            <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{post.username }}</h2>
            </div>
            <p class="text-gray-700">{{ post.date }}</p>
            <figure class="w-full flex justify-center">
                <img class="object-cover" :src="post.media" alt="postImg">
            </figure>
            <p class="mt-3 text-gray-700 text-sm">
                {{ post.description }}
            </p>
            <div class="mt-4 flex items-center">
                <div class="flex mr-2 text-gray-700 text-sm mr-3">
                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>12</span>
                </div>
                <div class="flex mr-2 text-gray-700 text-sm mr-8">
                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    <span>{{ post.comments.length }}</span>
                </div>
                <div class="flex mr-2 text-gray-700 text-sm mr-4">
                    <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span>compartir</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostCard',
    props:{
        post: Object,
    },
    computed: {

    }
}
</script>