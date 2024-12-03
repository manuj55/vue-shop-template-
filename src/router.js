import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./pages/ProductsList.vue";
import UserCart from "./pages/UserCart.vue";
import ShopAdmin from "./pages/ShopAdmin.vue";
import store from "./store/index.js";
import ProductDetails from "./pages/ProductDetails.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/products", component: ProductList, alias: "/" },
        { path: "/products/:id", component: ProductDetails },
        { path: "/cart", component: UserCart },
        // PRotected route
        { path: "/admin", component: ShopAdmin, meta: { requiresAuth: true } },
    ],
});

router.beforeEach(function (to, from, next) {
    //check infthe route requires authentication    
    if (to.meta.requiresAuth) {
        //check if user is authenticated
        const isAuthenticated = store.getters.isAuthenticated;
        console.log(isAuthenticated, "hit here ");
        if (isAuthenticated) {
            next();
        } else {
            next("/products");
        }
    } else {
        next(); //proceed as normal to the route if no authentication is required
    }



});

export default router;
