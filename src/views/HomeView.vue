<template>
    <div class="sm:-mt-10 container mx-auto content-center sm:px-5">
        <div class="lg:flex gap-10 justify-items-center">
            <picture class="profile block sm:w-full md:w-3/4 lg:w-3/5">
                <source srcset="@/assets/profile-600.webp" />
                <img src="@/assets/profile-600.webp" alt="Landz Profile Picture" loading="lazy" />
            </picture>  
            <div class="w-full content-center">
                <TransitionGroup name="down-to-up" tag="ul">
                    <p v-if="home.hello" key="hello" style="transition-delay: 200ms;" class="text-2xl font-bold mb-2">Hello, I'm</p>
                    <p v-if="home.rolandoVillanueva" key="rolandoVillanueva" style="transition-delay:400ms;" class="text-5xl xl:text-6xl mb-2 text-green-500 font-bold">Rolando Villanueva</p>
                    <p v-if="home.fullStackDeveloper" key="fullStackDeveloper" style="transition-delay: 600ms;" class="text-slate-600 font-bold text-4xl mb-2">A Full Stack Developer</p>
                    <TransitionGroup key="buttons" name="down-to-up" tag="ul" class="flex gap-x-4 pt-2">
                        <CButton v-if="home.button1" key="button1" style="transition-delay: 800ms;" @click="scrollToBottom()">Get in touch</CButton>
                        <CButton v-if="home.button2" key="button2" style="transition-delay: 1000ms;" @click="downloadCV()" color="green">Download CV</CButton>
                    </TransitionGroup>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/store/mainStore';
import { onMounted, ref } from 'vue';

const store = useMainStore();
const { page, isObserverActive } = storeToRefs(store);

const home = ref({
    hello: false,
    rolandoVillanueva: false,
    fullStackDeveloper: false,
    button1: false,
    button2: false
})
onMounted(async () => {
    home.value = {
        hello: true,
        rolandoVillanueva: true,
        fullStackDeveloper: true,
        button1: true,
        button2: true
    }
})

async function scrollToBottom() {
    page.value = '#contact'
    window.scrollTo({top: 0, behavior: 'smooth'});
    isObserverActive.value = false;
    await new Promise((resolve) => setTimeout(resolve, 450))
    isObserverActive.value = true;
}

async function downloadCV() {
    // const res = await fetch('public/Rolando Villanueva CV Resume.pdf');
    // const blob = await res.blob();
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = 'Rolando Villanueva CV Resume.pdf';
    // document.body.appendChild(a);
    // a.click();
    // await new Promise((resolve) => setTimeout(resolve, 200));
    // window.URL.revokeObjectURL(url);
    // a.remove();

    window.open('https://drive.google.com/file/d/1Ntcjna3FRctB2jllu1OO7mjq5ebSmJuq/view?usp=sharing', '_blank')
}
</script>