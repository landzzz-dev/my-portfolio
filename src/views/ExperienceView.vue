<template>
    <div class="container grid gap-10 mx-auto content-center sm:px-5">
        <p class="text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold">My Experience</p>
        <TransitionGroup name="down-to-up" tag="ul">
            <div key="experience" class="grid lg:flex gap-8">
                <div class="lg:w-1/2">
                    <TransitionGroup key="frontEnd" name="left-to-right" tag="ul" class="justify-items-center w-full">
                        <p v-if="experience.frontEnd" style="transition-delay: 200ms;" class="xs:text-xl sm:text-2xl font-bold">Frontend Development</p>
                        <div key="frontEndChild" class="xs:w-full sm:w-full content-center w-1/2 mt-4 grid gap-2">
                            <TransitionGroup key="frontEndTools" name="left-to-right" tag="ul">
                                <div v-if="experience.vue" style="transition-delay: 400ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Vue />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Vue.js</p>
                                            <p>91%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 91%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.vuetify" style="transition-delay: 500ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Vuetify />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Vuetify</p>
                                            <p>90%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 90%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.sass" style="transition-delay: 600ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Sass />
                                    </div>
                                    <div class="w-full content-center text-slate-300">
                                        <div class="flex justify-between">
                                            <p>Sass</p>
                                            <p>84%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 84%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.tailwind" style="transition-delay: 700ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Tailwind />
                                    </div>
                                    <div class="w-full content-center text-slate-300">
                                        <div class="flex justify-between">
                                            <p>Tailwind</p>
                                            <p>82%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 82%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.typescript" style="transition-delay: 800ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Typescript />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Typescript</p>
                                            <p>80%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 80%"></div>
                                        </div>
                                    </div>
                                </div>
                            </TransitionGroup>
                        </div>
                    </TransitionGroup>
                </div>
                <div class="justify-items-center lg:w-1/2">
                    <TransitionGroup key="backEnd" name="right-to-left" tag="ul" class="justify-items-center w-full">
                        <p v-if="experience.backEnd" style="transition-delay: 1000ms;" class="xs:text-xl sm:text-2xl font-bold">Backend Development</p>
                        <div key="backEndChild" class="xs:w-full sm:w-full content-center w-1/2 mt-2 grid gap-2">
                            <TransitionGroup key="backEndTools" name="right-to-left" tag="ul">
                                <div v-if="experience.laravel" style="transition-delay: 1100ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Laravel />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Laravel</p>
                                            <p>91%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 91%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.express" style="transition-delay: 1200ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Nodejs />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Express.js</p>
                                            <p>90%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 90%"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="experience.expressTs" style="transition-delay: 1300ms;" class="flex gap-3">
                                    <div class="p-2">
                                        <Typescript />
                                    </div>
                                    <div class="w-full content-center">
                                        <div class="flex justify-between text-slate-300">
                                            <p>Express.ts</p>
                                            <p>80%</p>
                                        </div>
                                        <div class="w-full rounded-full bg-gray-700">
                                            <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 80%"></div>
                                        </div>
                                    </div>
                                </div>
                            </TransitionGroup>
                        </div>
                    </TransitionGroup>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup>
import Vue from '@/components/icons/VueIcon.vue';
import Typescript from '@/components/icons/TypescriptIcon.vue';
import Vuetify from '@/components/icons/VuetifyIcon.vue';
import Tailwind from '@/components/icons/TailwindIcon.vue';
import Sass from '@/components/icons/SassIcon.vue';
import Laravel from '@/components/icons/LaravelIcon.vue';
import Nodejs from '@/components/icons/NodejsIcon.vue';
import { onMounted, ref } from 'vue';

const experience = ref({
    frontEnd: false,
    vue: false,
    vuetify: false,
    backEnd: false,
    sass: false,
    tailwind: false,
    typescript: false,
    laravel: false,
    express: false,
    expressTs: false
})

onMounted(async () => {
    experience.value = {
        frontEnd: true,
        vue: true,
        vuetify: true,
        sass: true,
        tailwind: true,
        typescript: true,
        backEnd: true,
        laravel: true,
        express: true,
        expressTs: true
    }
})
</script>