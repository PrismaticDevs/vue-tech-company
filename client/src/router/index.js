import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import axios from '../../axios'

const routes = [{
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () =>
            import ( /* webpackChunkName: "contact" */ "../views/Contact.vue"),
    },
    {
        path: "/services",
        name: "services",
        component: () =>
            import ( /* webpackChunkName: "services" */ "../views/Services.vue"),
    },
    {
        path: "/pricing",
        name: "pricing",
        component: () =>
            import ( /* webpackChunkName: "software" */ "../views/Pricing.vue"),
    },
    {
        path: "/orders",
        name: "orders",
        component: () =>
            import ( /* webpackChunkName: "software" */ "../views/Orders.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: "login" */ "../components/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ( /* webpackChunkName: "register" */ "../components/Register.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const navCheck = async() => {
    try {
        await axios.get('/users/login')
            .then(res => {
                if (res.data) {
                    let data = res.data
                    return data;
                } else {
                    window.location.href = '/login'
                }
            })
    } catch (error) {
        console.log(error);
    }
}

router.beforeEach((to, from) => {
    if (to.name === 'orders') {
        navCheck()
    }
})

export default router;