<template>
    <div class="sm:-mt-10 container mx-auto content-center px-5">
        <div class="lg:flex gap-10 justify-items-center">
            <img class="profile sm:w-full md:w-3/4 lg:w-3/5" src="@/assets/profile.jpg" alt="">
            <div class="w-full content-center">
                <p class="text-2xl font-bold mb-2">Hello, I'm</p>
                <p class="text-5xl xl:text-6xl mb-2"><span class="text-green-500 font-bold">Rolando Villanueva</span></p>
                <p class="text-slate-600 font-bold text-4xl mb-2">A Full Stack Developer</p>
                <div class="flex gap-x-4 pt-2">
                    <CButton>Get in touch</CButton>
                    <CButton color="green">Download CV</CButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const CButton = defineAsyncComponent({
    loader: () => import('@/components/CButton.vue'),
});
</script>