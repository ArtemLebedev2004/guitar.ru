<template>
    <div class="w-full">
        <input :type="inputType" :placeholder="placeholder" :class="'w-full lg:py-4 lg:px-3 lg:text-2xl text-orange placeholder:text-orange border-light-grey border-b bg-inherit focus:outline-none ' + stylesInput">
        <!-- <div v-if="error" class="text-red-500 text-sm lg:text-2xl">{{ error }}</div> -->
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

// let emit = defineEmits(['update:input'])

let props = defineProps([
    'inputType', 'input', 'placeholder', 'stylesInput'
])

let { inputType, placeholder, stylesInput } = toRefs(props)

// let inputComputed = computed({
//     get: () => input.value,
//     set: (value) => {
//         emit('update:input', value)
//     }
// })
</script>