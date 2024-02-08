<template>
    <div class="absolute inset-x-0 top-16 min-[1720px]:top-24 z-10 flex flex-col gap-4 py-3 bg-white">
        <div v-for="btn in btns" :key="btn" @click="openModal(btn.text)" class="text-center text-2xl border-orange border-2 rounded-lg cursor-pointer transition-all duration-75 hover:bg-orange hover:text-white" :class="btn.to ? '' : 'p-3'">
            <template v-if="btn.to">
                <router-link :to="btn.to" class="block py-3 cursor-pointer">{{ btn.text }}</router-link>
            </template>
            <template v-else>
                <span>{{ btn.text }}</span>
            </template>
        </div>
    </div>

    <SignIn v-if="openSignIn" @closeModal="openSignIn = false"/>

    <SignUp v-if="openSignUp" @closeModal="openSignUp = false"/>

    <div v-if="openSignIn || openSignUp" @click="openSignIn ? openSignIn = !openSignIn : openSignUp = !openSignUp" class="fixed inset-0 bg-gray-500 bg-opacity-80 z-40">

    </div>
</template>

<script setup>
import { defineProps, toRefs, ref } from 'vue';
import SignUp from '../modals/SignUp.vue'
import SignIn from '../modals/SignIn.vue'


let props = defineProps([
    'btns'
])

let {btns} = toRefs(props)

let openSignUp = ref(false)
let openSignIn = ref(false)

let openModal = (text) => {
    if (text == 'Войти') {
        openSignIn.value = true
    } else if (text == 'Зарегистрироваться') {
        openSignUp.value = true
    }
}
</script>