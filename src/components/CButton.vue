<template>
    <div>
        <button :class="[buttonClass, block ? 'w-full' : '', loading ? 'bg-slate-700 text-white' : '']" class="h-10 px-3 rounded-md flex gap-1 items-center justify-center">
            <div v-if="props.loading" class="flex gap-1">
                <CIcon icon="loading"></CIcon>
                Processing...
            </div>
            <slot v-else></slot>
        </button>
    </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';

const CIcon = defineAsyncComponent({
    loader: () => import('@/components/CIcon.vue'),
});

const props = defineProps({
    block: Boolean,
    color: String,
    height: String,
    loading: Boolean,
});


const buttonClass = computed(() => {
    if(props.color) {
        return [
            'bg-green-500',
            'text-slate-900',
            // 'hover:text-slate-800',
            'hover:bg-green-600',
            'duration-500'
        ]
    } else {
        return [
            'border-2',
            'border-green-500',
            'dark:text-green-500',
            'hover:text-slate-900',
            'hover:bg-green-500',
            'duration-500'
        ]
    }
})
</script>