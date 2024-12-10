<template>
    <div class="w-full">
        <span class="text-white">{{ props.label.includes('*') ? props.label.slice(0, -1) : props.label }}<span v-if="props.label.includes('*')" class="text-pink-500">*</span></span>
        <textarea :name="props.label" :placeholder="props.placeholder" v-model="model" class="w-full p-3 rounded-md outline-none bg-slate-700 text-white border border-green-500 focus:ring-1 focus:ring-green-500"></textarea>
    </div>
</template>

<script setup>
const model = defineModel({modelValue: null})
const props = defineProps({
    label: String,
    placeholder: String,
})
</script>