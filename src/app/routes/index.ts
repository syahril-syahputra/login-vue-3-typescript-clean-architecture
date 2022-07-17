import { createRouter, createWebHistory } from "vue-router"
import LoginVue from "../pages/login.vue"
import dashboard from "../pages/dashboard.vue"


const routes = [
    {
        path: '',
        name : "login",
        component : LoginVue
    },
    {
        path: '/dashboard',
        name : "dashboard",
        component : dashboard
    }
]
const router =  createRouter({
    history :createWebHistory(),
    routes
})

router.beforeEach((to, before, next) => {
    const data = localStorage.getItem("isAuth")
    
    let isAuth : boolean
    if(data === null)
    {
        isAuth = false
        localStorage.setItem("isAuth", "false")
    }else
    {
        const getData = JSON.parse(data)
       
        isAuth = getData
    }
    

    
    
    // const isAuth = JSON.parse(data ?? "false")
    if(to.name !== "login" && !isAuth) next({name : "login"})
    if(to.name === "login" && isAuth) next({name : "dashboard"})

    next()
    // if(to.name !== "login") next({name : ""})
})
export default router