import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
        };
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        //Async code
        login(context) {
            //call to backend 2sec after call is completed call mutation
            context.commit("login");
        },
        logout(context) {
            //call to backend 2sec after call is completed call mutation
            context.commit("logout");
        },
    },
});
export default store;


//mutation are synchronous
// actions are asynchronous