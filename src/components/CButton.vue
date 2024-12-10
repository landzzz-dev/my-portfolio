<template>
    <div>
        <button :class="buttonClass" class="h-10 w-full px-5 rounded-md flex gap-1 items-center justify-center">
            <div v-if="props.loading" class="flex gap-1">
                <CIcon icon="loading"></CIcon>Processing...
            </div>
            <slot v-else></slot>
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    block: Boolean,
    color: String,
    height: String,
    loading: Boolean,
});

const buttonClass = computed(() => {
    let customClass = [];

    if(props.block) {
        console.log(props.block);
        
        customClass.push('w-full')
    }
    if(props.loading) {
        customClass.push('bg-slate-700 text-white hover:bg-slate-700 hover:text-white');
    }

    if(props.color == 'green') {
        customClass.push('bg-green-500 text-slate-900 hover:bg-green-600 duration-500');
    } else if(props.color == 'blue') {
        customClass.push('bg-blue-500 text-slate-900 hover:bg-blue-600 duration-500');
    } else {
        customClass.push('border-2 border-green-500 dark:text-green-500 hover:text-slate-900 hover:bg-green-500 duration-500');
    }

    return customClass;
})
</script>