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
        posts: [],
        filteredPosts: [],
        selectedPost: {},
    },
    getters: {
        getPost(state) {
            return state.post;
        },
        getPots(state) {
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
        setPosts(state, posts){
            state.posts = posts;
        },
        setFilteredPosts(state, posts){
            state.filteredPosts = posts;
        }
    },
    actions: {
        async getPosts({ getters, commit }) {
            await axios
            .get()
            .then(res => {
                if(res.status === 200){
                    commit('setPosts', res.data);
                    commit('setFilteredPosts', res.data);
                }
            })
            .catch(err => console.error(err))
        }
    }
}