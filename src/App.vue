<template>
    <header class="sticky top-0 z-10 backdrop-blur-md dark:bg-transparent border-b border-slate-800 border-opacity-20">
        <nav class="h-16 container mx-auto sm:px-5 flex justify-between items-center dark:text-white">
            <div class="font-bold text-3xl">
                <TransitionGroup name="left-to-right" tag="ul" class="flex">
                    <span v-if="landzDev.landz" class="landz" style="transition-delay: 400ms;">Landz</span>
                    <span v-if="landzDev.dev" class="dev" style="transition-delay: 200ms;"><b>Dev</b></span>
                </TransitionGroup>
            </div>
            <div class="slide-to-left flex">
                <TransitionGroup name="right-to-left" tag="ul" class="flex">
                    <a
                        v-for="(link, i) in links" :key="i"
                        :href="`${link.id}`"
                        :class="{ 'text-green-500': activeSection == link.id }"
                        class="p-3 duration-500 hover:text-green-500 xs:hidden md:block"
                        :style="{ transitionDelay: `${i * 200}ms` }"
                        @click="scrollToPage(link.id)"
                    >
                        {{ link.name }}
                    </a>
                </TransitionGroup>
                <div class="xs:block md:hidden w-full">
                    <CIcon @click="navDrawer = !navDrawer" :icon="navDrawer ? 'close' : 'menu'" />
                </div>
            </div>
        </nav>
    </header>

    <Transition name="slide-fade">
        <div @click="navDrawer = !navDrawer" v-if="navDrawer" class="xs:block md:hidden z-10 w-full backdrop-blur-md fixed">
            <div class="h-full dark:bg-transparent border-b border-slate-800 border-opacity-20">
                <div class="relative flex flex-col">
                    <a
                        v-for="(link, i) in links" :key="i"
                        :href="`${link.id}`"
                        :class="{ 'text-green-500': activeSection == link.id }"
                        class="p-3 px-6 duration-500 hover:text-green-500 flex"
                        @click="scrollToPage(link.id)"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </Transition>

    <section id="#home"><div class="slide-up"><Home /></div></section>
    <section id="#about"><div v-if="about" class="slide-up"><About /></div></section>
    <section id="#experience"><div v-if="experience" class="slide-up"><Experience /></div></section>
    <!-- <section id="#project"><div v-if="project" class="slide-up"><Project /></div></section> -->
    <section id="#contact"><div v-if="contact" class="slide-up"><Contact /></div></section>
    <div class="w-full h-64 text-slate-400 content-center text-center bg-slate-800 grid gap-5">
        <p @click="scrollToTop()" class="text-2xl font-bold hover:cursor-pointer">
            <span class="hover:text-white duration-500">Rolando Villanueva</span>
        </p>
        <p class="flex justify-center gap-5">
            <CIcon class="hover:text-white duration-500" @click="openNewTab('facebook')" icon="facebook" />
            <CIcon class="hover:text-white duration-500" @click="openNewTab('gmail')" icon="gmail" />
            <CIcon class="hover:text-white duration-500" @click="openNewTab('linkedin')" icon="linkedin" />
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} Landz. All Rights Reserved</p>
        <p class="text-xs text-slate-600">Build with Vue 3.5 and Tailwind 3.4</p>
    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from './store/mainStore';
import { defineAsyncComponent, onMounted, onUnmounted, ref, watchEffect } from 'vue';

const Home = defineAsyncComponent({ loader: () => import('@/views/HomeView.vue')});
const About = defineAsyncComponent({ loader: () => import('@/views/AboutView.vue')}); 
const Experience = defineAsyncComponent({ loader: () => import('@/views/ExperienceView.vue')}); 
// import Project = defineAsyncComponent({ loader: () => import('@/views/ProjectView.vue')}); 
const Contact = defineAsyncComponent({ loader: () => import('@/views/ContactView.vue')}); 

const store = useMainStore();
const { page, isObserverActive } = storeToRefs(store);

const navDrawer = ref(false);

const landzDev = ref({
    landz: false,
    dev: false
});

const links = ref([]);
const fullLinks = ref([
    {id: '#home', name: 'Home'},
    {id: '#about', name: 'About'},
    {id: '#experience', name: 'Experience'},
    // {id: '#project', name: 'Project'},
    {id: '#contact', name: 'Contact'},
]);

const home = ref(false);
const about = ref(false);
const experience = ref(false);
const project = ref(false);
const contact = ref(false);

const activeSection = ref('');

const navLeft2 = ref(false);
onMounted(async () => {
    window.scrollTo({top: 0});
    history.scrollRestoration = 'manual';
    observeSections();
    home.value = true;

    setTimeout(() => {
        links.value = fullLinks.value;
        landzDev.value = { landz: true, dev: true }
    }, 100);

    await new Promise((resolve) => setTimeout(resolve, 250));
    navLeft2.value = true;
});

let observer;
onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});

watchEffect(async () => {
    if(page.value) {
        const element = document.getElementById(page.value);
        element.scrollIntoView({block: 'center', behavior: 'smooth'});
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
    page.value = '';
});

async function scrollToPage(id) {
    isObserverActive.value = false;
    activeSection.value = id;

    if(id == '#home') {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        const element = document.getElementById(id);
        element.scrollIntoView({block: 'center', behavior: 'smooth'});
        // const y = element.getBoundingClientRect().top + window.scrollY;
        // window.scrollTo({top: y});
    }

    await new Promise((resolve) => setTimeout(resolve, 450))
    isObserverActive.value = true;
    
    await new Promise((resolve) => setTimeout(resolve, 200))
    if(id == '#about') about.value = true;
    if(id == '#experience') experience.value = true;
    if(id == '#project') project.value = true;
    if(id == '#contact') contact.value = true;
}

function observeSections() {
    const sections = document.querySelectorAll('section');
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(async (entry) => {
                if(isObserverActive.value) {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                        await new Promise((resolve) => setTimeout(resolve, 200))

                        if(entry.target.id == '#about') about.value = true;
                        if(entry.target.id == '#experience') experience.value = true;
                        // if(entry.target.id == '#project') project.value = true;
                        if(entry.target.id == '#contact') contact.value = true;

                        const link = document.createElement('a');
                        link.href = entry.target.id;
                        link.click();
                    }
                }
            });
        },
        { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
}

async function scrollToTop() {
    isObserverActive.value = false;
    await new Promise((resolve) => setTimeout(resolve, 450))
    isObserverActive.value = true;
    location.reload();
};

function openNewTab(link) {
    if(link == 'facebook') {
        window.open('https://web.facebook.com/john.o.villanueva.jr', '_blank')
    }
    else if(link == 'gmail') {
        window.location.href="mailto:landzzz.dev@gmail.com"
    }
    else if(link == 'linkedin') {
        window.open('https://linkedin.com/in/rolando-villanueva-1a194321a', '_blank')
    }
};
</script>

<style scoped>
.router-link-active { 
    @apply text-green-500; 
}
section { 
    @apply h-svh content-center min-h-fit dark:text-white dark:bg-slate-900; 
}
@media only screen and (max-width: 375px) { 
    section {zoom: 0.8 !important;} 
}
@media only screen and (max-height: 575.98px) and (orientation: landscape) { 
    section {height: 200vh !important;} 
}
.landz {animation: landz 20s infinite; animation-timing-function: ease-in-out;}
@keyframes landz {
    0% {color: white;}
    25% {color: rgb(34 197 94);}
    50% {color: white;}
    75% {color: rgb(34 197 94);}
    100% {color: white;}
}
.dev {animation: dev 20s infinite; animation-timing-function: ease-in-out;}
@keyframes dev {
    0% {color: rgb(34 197 94);}
    25% {color: white;}
    50% {color: rgb(34 197 94);}
    75% {color: white;}
    100% {color: rgb(34 197 94);}
}
</style>
