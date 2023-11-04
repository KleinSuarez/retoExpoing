import router from "@/router";
import { compareStrings } from "@/util/validations";
import axios from "axios";

export default {
    state: {
        user: {
            id: '',
            name: '',
            email: ''
        },
        users: [],
        filteredUsers: [],
        filteredUsers: [],
        seletedUser: {},
        loggedUser: {},
        password: '',
        confirmPassword: '',
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getPassword(state) {
            return state.password;
        },
        getConfirmPassword(state) {
            return state.confirmPassword;
        }
    },
    mutations: {
        setPassword(state, password) {
            state.password = password;
        },
        setConfirmPassword(state, confirmPassword) {
            state.confirmPassword = confirmPassword;
        },
        setUser(state, user) {
            state.user = user;
        },
        updateUser(state, property) {
            state.user = Object.assign({}, state.user, property);
        }
    },
    actions: {
        async registerUser({ mutations, getters }) {
            if (compareStrings(getters.getPassword, getters.getConfirmPassword)) {
                const formdata = Object.assign({}, getters.getUser, { password: getters.getPassword });
                await axios
                    .post(process.env.VUE_APP_HOST_URL_BASE
                        .concat(process.env.VUE_APP_PORT)
                        .concat(process.env.VUE_APP_APPEND)
                        .concat(process.env.VUE_APP_PATH_REGISTRATION),
                        formdata
                    )
                    .then(res => {
                        if (res.status === 201) {
                            alert('usuario registrado exitosamente');
                            mutations('setUser', res.data);
                            router.push({
                                name: 'profile'
                            })
                        }
                    })
                    .catch(err => console.error(err));
            } else {
                alert('las contraseñas no coinciden!');
            }
        },

        async login({ mutations, getters }) {
            const formdata = {
                email: getters.getUser.email,
                password: getters.getPassword,
            }
            
            await axios
                .post(process.env.VUE_APP_HOST_URL_BASE
                    .concat(process.env.VUE_APP_PORT)
                    .concat(process.env.VUE_APP_APPEND)
                    .concat(process.env.VUE_APP_PATH_REGISTRATION),
                    formdata)
                .then(res => {
                    if (res.status === 200) {
                        mutations('setUser', res.data);
                    }
                })
                .catch(err => console.error(err))
        }
    }
}