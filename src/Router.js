import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TranslatorComponent from "./components/TranslatorComponent.vue";
import ImageComponent from "./components/ImageComponent.vue";
import SummarizationComponent from "./components/SummarizationComponent.vue";

const routes = [
    {
        path: "/helloworld", component: HelloWorld
    },
   {
        path: "/translator", component: TranslatorComponent 
   },
   {
        path: "/image", component: ImageComponent
   },
   {
        path: "/resumir", component: SummarizationComponent
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;