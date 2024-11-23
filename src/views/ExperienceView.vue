<template>
    <div class="container mx-auto content-center px-5">
        <p class="text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold">My Experience</p>
        <div class="lg:flex gap-8">
            <div class="mt-10 justify-items-center lg:w-1/2">
                <p class="xs:text-xl sm:text-2xl font-bold">Frontend Development</p>
                <div class="xs:w-full sm:w-full content-center w-1/2 mt-2 grid gap-2">
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Vue />
                        </div>
                        <div class="w-full content-center">
                            <div class="flex justify-between text-slate-300">
                                <p>Vue</p>
                                <p>94%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 94%"></div>
                            </div>
                        </div>

                    </div>
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Vuetify />
                        </div>
                        <div class="w-full content-center">
                            <div class="flex justify-between text-slate-300">
                                <p>Vuetify</p>
                                <p>93%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 93%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Tailwind />
                        </div>
                        <div class="w-full content-center text-slate-300">
                            <div class="flex justify-between">
                                <p>Tailwind</p>
                                <p>86%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 86%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Sass />
                        </div>
                        <div class="w-full content-center text-slate-300">
                            <div class="flex justify-between">
                                <p>Sass</p>
                                <p>82%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 82%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3">
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
                </div>
            </div>
            <div class="mt-10 justify-items-center lg:w-1/2">
                <p class="xs:text-xl sm:text-2xl font-bold">Backend Development</p>
                <div class="xs:w-full sm:w-full content-center w-1/2 mt-2 grid gap-2">
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Laravel />
                        </div>
                        <div class="w-full content-center">
                            <div class="flex justify-between text-slate-300">
                                <p>Laravel</p>
                                <p>94%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 94%"></div>
                            </div>
                        </div>


                    </div>
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Nodejs />
                        </div>
                        <div class="w-full content-center">
                            <div class="w-full flex justify-between">
                                <p>Express js</p>
                                <p>92%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 92%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="p-2">
                            <Typescript />
                        </div>
                        <div class="w-full content-center">
                            <div class="flex justify-between text-slate-300">
                                <p>Express ts</p>
                                <p>80%</p>
                            </div>
                            <div class="w-full rounded-full bg-gray-700">
                                <div class="bg-green-500 xs:h-3 sm:h-4 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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
</script>