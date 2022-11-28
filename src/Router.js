import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TranslatorComponent from "./components/TranslatorComponent.vue";

const routes = [
    {
        path: "/helloworld", component: HelloWorld
    },
   {
        path: "/translator", component: TranslatorComponent 
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;