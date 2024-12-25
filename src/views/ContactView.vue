<template>
    <div class="container grid gap-10 mx-auto content-center sm:px-5">
        <p class="text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold">Contact Me</p>
        <div class="text-slate-900">
            <TransitionGroup name="down-to-up" tag="ul">
                <TransitionGroup key="nameEmail" name="down-to-up" tag="ul" class="lg:flex gap-8">
                    <CInput v-if="contact.name" style="transition-delay: 200ms;" label="Name *" type="text" v-model="contacts.name"></CInput>
                    <CInput v-if="contact.email" style="transition-delay: 400ms;" label="Email *" placeholder="example@email.com" type="email" v-model="contacts.email"></CInput>
                </TransitionGroup>
                <CTextarea v-if="contact.message" style="transition-delay: 600ms;" label="Message *" v-model="contacts.message"></CTextarea>
                <div v-if="contact.button" style="transition-delay: 800ms;" class="pt-10 w-full justify-items-center">
                    <CButton @click="sendEmail()" :loading="loading" color="green" class="xs:w-full sm:w-full lg:w-1/4">
                        <CIcon icon="email" />Send
                    </CButton>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/store/mainStore';
import { onMounted, reactive, ref } from 'vue';
import emailjs from 'emailjs-com';

const store = useMainStore();

const contact = ref({
    name: false,
    email: false,
    message: false,
    button: false
});
onMounted(() => {
    contact.value = {
        name: true,
        email: true,
        message: true,
        button: true
    }
})

const loading = ref(false);
const contacts = reactive({
    name: null,
    email: null,
    message: null,
});

async function sendEmail() {
    const serviceID = 'service_l7se67g';
    const templateID = 'template_pnkt415';
    const userID = 'IdIk01FVZs1V_Vt1d';

    loading.value = true;
    let required = '';
    let message = '';
    let isEmail = false;

    try {
        if(!contacts.name) required += '* Name is required.\n';
        if(!contacts.email) required += '* Email is required.\n';
        if(contacts.email) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(contacts.email)) isEmail = true;
            else required += '* Please provide a valid email address.\n';
        }
        if(!contacts.message) required += '* Message is required.\n';
        if (!contacts.name || !contacts.email || !contacts.message || !isEmail) {
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
};
</script>