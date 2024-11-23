<template>
    <div class="w-full">
        <span class="text-white">{{ label.includes('*') ? label.slice(0, -1) : label }}<span v-if="label.includes('*')" class="text-pink-500">*</span></span>
        <input :type="type" :placeholder="placeholder" v-model="model"
            class="peer w-full h-12 p-3 rounded-md bg-slate-700 text-white focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        <p class="invisible peer-invalid:visible text-pink-500 text-sm">
            Please provide a valid email address.
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const model = defineModel({ modelValue: null})

defineProps({
    type: String,
    label: String,
    placeholder: String,
})

const inputClass = computed(() => {
    
})
</script>