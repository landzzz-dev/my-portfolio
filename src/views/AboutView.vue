<template>
    <div class="container mx-auto content-center px-5">
        <p class="text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold">About Me</p>
        <div class="lg:flex gap-8">
            <div class="p-5 mt-10 justify-items-center lg:w-1/2 rounded-xl border-2 border-slate-500">
                <p>
                    <Icon icon="licence" />
                </p>
                <p class="xs:text-xl text-2xl font-bold">Real-time Experience</p>
                <p class="text-slate-400">{{ experience.years }} year(s) and {{ experience.months }} month(s)</p>
                <p class="text-slate-400">Full Stack Developer</p>
            </div>
            <div class="p-5 mt-10 justify-items-center lg:w-1/2 rounded-xl border-2 border-slate-500">
                <p>
                    <Icon icon="school" />
                </p>
                <p class="xs:text-xl text-2xl font-bold">Education</p>
                <p class="text-slate-400">BS Computer Engineering</p>
                <p class="text-slate-400">2022</p>
            </div>
        </div>
        <div class="mt-10">
            <p class="text-justify text-slate-400">
                          Welcome to my web developer portfolio! With a passion for coding and over a year of hands-on
                experience in web development, I specialize in creating dynamic and responsive single-page applications (SPAs)
                using <b class="text-green-500">Vue</b> and <b class="text-green-500">Laravel</b>. I am dedicated to crafting 
                innovative and user-friendly digital experiences that seamlessly blend the power of the Laravel PHP framework with 
                the elegant design capabilities of Vue Vuetify. Whether you're looking to enhance an existing application, create a new 
                SPA from scratch, or need a developer who can seamlessly integrate Laravel and Vue Vuetify into your project, I'm here to help.
                Explore my work and see how my expertise can elevate your next project. If you're seeking a dedicated and adaptable web developer, 
                please don't hesitate to reach out.
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';
const Icon = defineAsyncComponent({
    loader: () => import('@/components/CIcon.vue'),
});

const experience = ref({});
onMounted(() => {
    const dateWorkStart = new Date("12/06/2022, 06:30:00 AM");
    const dateToday = new Date();

    let allYears = dateToday.getFullYear() - dateWorkStart.getFullYear();
    let allDays = dateToday.getDate() - dateWorkStart.getDate();
    let partialMonths = dateToday.getMonth() - dateWorkStart.getMonth();
    
    if (partialMonths < 0) {
        allYears--;
        partialMonths = partialMonths + 12;
    }

    experience.value = {
        years: allYears,
        months: partialMonths,
        days: allDays,
    };
});
</script>
