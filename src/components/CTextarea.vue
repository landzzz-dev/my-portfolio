<template>
    <div class="w-full">
        <span class="text-white">{{ label.includes('*') ? label.slice(0, -1) : label }}<span v-if="label.includes('*')" class="text-pink-500">*</span></span>
        <textarea v-model="model"
            class="w-full p-3 rounded-md outline-none bg-slate-700 text-white border border-green-500 focus:ring-1 focus:ring-green-500"></textarea>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const model = defineModel({modelValue: null})

defineProps({
    label: String,
    placeholder: String,
})

const inputClass = computed(() => {

})
</script>