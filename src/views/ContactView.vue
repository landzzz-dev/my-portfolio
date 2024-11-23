<template>
    <!-- <div class="h-full"> -->
        <div class="h-full container mx-auto content-center sm:px-5">
            <p class="text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold">Contact Me</p>
            <div class="mt-10 text-slate-900 grid">
                <div class="w-full lg:flex gap-5">
                    <CInput label="Name *" type="text" v-model="contacts.name"></CInput>
                    <CInput label="Email *" placeholder="example@email.com" type="email" v-model="contacts.email">
                    </CInput>
                </div>
                <div>
                    <CTextarea label="Message *" v-model="contacts.message"></CTextarea>
                </div>
                <div class="text-center mt-10 sm:w-full lg:w-1/4 place-self-center">
                    <CButton @click="sendEmail()" :loading="loading" block color="green">
                        <CIcon icon="email" />Send
                    </CButton>
                </div>

            </div>
        </div>
    <!-- </div> -->
    <div class="w-full h-60 content-center text-center bg-slate-800 grid gap-5">
        <p class="text-2xl font-bold">Rolando Villanueva</p>
        <p class="flex justify-center gap-5">
            <CIcon icon="facebook"></CIcon>
            <CIcon icon="gmail"></CIcon>
            <CIcon icon="linkedin"></CIcon>
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} Landz. All Rights Reserved</p>
    </div>
</template>

<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue';
import emailjs from 'emailjs-com';

const CIcon = defineAsyncComponent({
    loader: () => import('@/components/CIcon.vue'),
});

const CButton = defineAsyncComponent({
    loader: () => import('@/components/CButton.vue'),
});

const CInput = defineAsyncComponent({
    loader: () => import('@/components/CInput.vue'),
});

const CTextarea = defineAsyncComponent({
    loader: () => import('@/components/CTextarea.vue'),
});

const loading = ref(false)

const contacts = reactive({
    name: null,
    email: null,
    message: null,
})

async function sendEmail() {
    const serviceID = 'service_l7se67g';
    const templateID = 'template_pnkt415';
    const userID = 'IdIk01FVZs1V_Vt1d';

    loading.value = true;
    let required = '';
    let message = '';
    
    try {
        if(!contacts.name) required += '* Name is required.\n';
        if(!contacts.email) required += '* Email is required.\n';
        if(!contacts.message) required += '* Message is required.\n';
        if (!contacts.name && !contacts.email && !contacts.message) {
            loading.value = false;
            alert(required);
            return false;
        }

        const response = emailjs.send(serviceID, templateID, contacts, userID)
        console.log('SUCCESS', response);
        message = 'Email sent successfully!';
        contacts.name = null;
        contacts.email = null;
        contacts.message = null;
    } catch (err) {
        console.error('FAILED...', err);
        message = 'Failed to send email, Please try again.';
    } finally {
        setTimeout(() => {
            loading.value = false;
            if(message) alert(message);
        }, 1000)
    }
}
</script>