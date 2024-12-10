<template>
    <div class="w-full">
        <span class="text-white">{{ props.label.includes('*') ? props.label.slice(0, -1) : props.label }}<span v-if="props.label.includes('*')" class="text-pink-500">*</span></span>
        <input :name="props.label" :type="props.type" :placeholder="props.placeholder" v-model="model" class="peer w-full h-12 p-3 rounded-md bg-slate-700 text-white focus:outline-none border border-green-500 focus:ring-1 focus:ring-green-500 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        <p class="invisible peer-invalid:visible text-pink-500 text-sm">
            Please provide a valid email address.
        </p>
    </div>
</template>

<script setup>
const model = defineModel({ modelValue: null})
const props = defineProps({
    type: String,
    label: String,
    placeholder: String,
})
</script>

<style scoped>
input:-webkit-autofill {
    color: white !important;
    -webkit-text-fill-color: white !important;
    -webkit-box-shadow: 0 0 0px 1000px #334155 inset !important;
}
</style>