import { createStore } from "vuex";
import productsModule from "./modules/product";
import cartModule from "./modules/cart";

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule,
    },
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