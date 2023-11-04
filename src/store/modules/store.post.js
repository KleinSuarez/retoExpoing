import axios from "axios";

export default {
    state: {
        post: {
            title: '',
            description: '',
            id: '',
            userId: '',
            comments: [],
            showComments: false,
            media: {},
            date: ''
        },
        posts: [
            {
                title: 'Post 01',
                description: 'description 01',
                id: 1,
                userId: 1,
                username: 'Ribhelly',
                comments: [{
                    id: 1,
                    username: 'Ribhelly',
                    description: 'wow',
                    date: '2023-11-04'
                }],
                showComments: false,
                media: 'https://i.postimg.cc/0Q7JHQhq/otra.jpg',
                date: '04-11-2023'
            },
            {
                title: 'Post 02',
                description: 'description 02',
                id: 2,
                userId: 2,
                username: 'Klein',
                comments: [
                    {
                        id: 1,
                        username: 'Ribhelly',
                        description: 'wow',
                        date: '2023-11-04'
                    }
                ],
                showComments: true,
                media: 'https://i.postimg.cc/0Q7JHQhq/otra.jpg',
                date: '04-11-2023'
            }
        ],
        filteredPosts: [],
        selectedPost: {},
    },
    getters: {
        getPost(state) {
            return state.post;
        },
        getPosts(state) {
            return state.posts;
        },
        getFilteredPosts(state) {
            return state.filteredPosts;
        },
        getSelectedPost(state) {
            return state.selectedPost;
        }
    },
    mutations: {
        setPost(state, post) {
            state.post = post;
        },
        updatePost(state, property) {
            state.post = Object.assign({}, state.post, property);
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
        setFilteredPosts(state, posts) {
            state.filteredPosts = posts;
        },
        setSelectedPost(state, posts){
            state.selectedPost = posts;
        }
    },
    actions: {
        async getPosts({ getters, commit }) {
            await axios
                .get()
                .then(res => {
                    if (res.status === 200) {
                        commit('setPosts', res.data);
                        commit('setFilteredPosts', res.data);
                    }
                })
                .catch(err => console.error(err))
        }
    }
}