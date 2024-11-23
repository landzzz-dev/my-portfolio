<template>
    <header class="shadow-sm sticky top-0 z-10 backdrop-blur-md dark:bg-transparent">
        <nav class="h-16 container mx-auto sm:px-5 flex justify-between items-center dark:text-white">
            <span class="font-bold text-3xl">Landz<span class="text-green-500"><b>Dev</b></span></span>
            <ul class="flex xs:hidden sm:hidden md:block">
                <RouterLink class="p-3 duration-500 hover:text-green-500" to="/">Home</RouterLink>
                <RouterLink class="p-3 duration-500 hover:text-green-500" to="/about">About</RouterLink>
                <RouterLink class="p-3 duration-500 hover:text-green-500" to="/experience">Experience</RouterLink>
                <RouterLink class="p-3 duration-500 hover:text-green-500" to="/project">Project</RouterLink>
                <RouterLink class="p-3 duration-500 hover:text-green-500" to="/contact">Contact</RouterLink>
            </ul>
            <ul class="flex xs:block sm:block md:hidden">
                <CIcon icon="menu" />
            </ul>
        </nav>
    </header>

    <section>
        <Home />
    </section>
    <section>
        <About />
    </section>
    <section>
        <Experience />
    </section>
    <section>
        <Project />
    </section>
    <section>
        <Contact />
    </section>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineAsyncComponent, hydrateOnVisible } from 'vue';

const CIcon = defineAsyncComponent({
    loader: () => import('@/components/CIcon.vue'),
});
const Home = defineAsyncComponent({
    loader: () => import('@/views/HomeView.vue'),
    hydrate: hydrateOnVisible(),
});
const About = defineAsyncComponent({
    loader: () => import('@/views/AboutView.vue'),
    hydrate: hydrateOnVisible(),
}); 
const Experience = defineAsyncComponent({
    loader: () => import('@/views/ExperienceView.vue'),
    hydrate: hydrateOnVisible(),
}); 
const Project = defineAsyncComponent({
    loader: () => import('@/views/ProjectView.vue'),
    hydrate: hydrateOnVisible(),
}); 
const Contact = defineAsyncComponent({
    loader: () => import('@/views/ContactView.vue'),
    hydrate: hydrateOnVisible(),
}); 
</script>

<style lang="css" scoped>
.router-link-active {
    @apply text-green-500;
}
section {
    @apply h-screen content-center min-h-fit dark:text-white dark:bg-slate-900;
}
</style>
