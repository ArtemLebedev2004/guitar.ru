<template>
    <div v-if="!open" class="fixed lg:max-w-[35%] lg:max-h-[80%] lg:m-auto flex flex-col inset-0 z-50 bg-white lg:rounded-xl">
        <div @click="$emit('closeModal')" class="absolute lg:-right-24 lg:w-max max-lg:inset-x-0 p-2 lg:p-4 bg-light-black lg:bg-white lg:rounded-lg cursor-pointer transition-all duration-75 hover:bg-orange group">
            <svg viewBox="0 0 18 18" fill="none" class="w-[25px] lg:w-10 m-auto">
                <path d="M15.072 17.3952L9.26367 11.5868L3.4553 17.3952C3.1472 17.7033 2.72933 17.8764 2.29362 17.8764C1.8579 17.8764 1.44004 17.7033 1.13194 17.3952C0.823848 17.0871 0.650761 16.6692 0.650761 16.2335C0.650761 15.7978 0.823849 15.3799 1.13194 15.0718L6.94032 9.26346L1.13194 3.45508C0.823848 3.14698 0.650762 2.72912 0.650762 2.2934C0.650762 1.85769 0.823848 1.43982 1.13194 1.13173C1.44004 0.823633 1.85791 0.650547 2.29362 0.650547C2.72933 0.650547 3.1472 0.823633 3.45529 1.13173L9.26367 6.94011L15.072 1.13173C15.3801 0.823633 15.798 0.650546 16.2337 0.650546C16.6694 0.650546 17.0873 0.823632 17.3954 1.13173C17.7035 1.43982 17.8766 1.85769 17.8766 2.2934C17.8766 2.72912 17.7035 3.14698 17.3954 3.45508L11.587 9.26346L17.3954 15.0718C17.7035 15.3799 17.8766 15.7978 17.8766 16.2335C17.8766 16.6692 17.7035 17.0871 17.3954 17.3952C17.0873 17.7033 16.6694 17.8764 16.2337 17.8764C15.798 17.8764 15.3801 17.7033 15.072 17.3952Z" class="fill-orange transition-all duration-75 group-hover:fill-white" />
            </svg>
        </div>

        <div class="flex flex-col h-full px-3 pb-8 lg:p-10 max-lg:pt-16">
            <img src="../../assets/icons/main_logo.png" alt="" class="w-32 min-[1720px]:w-40 m-auto">

            <div class="text-center mt-2 text-2xl lg:text-5xl text-orange">
                Регистрация
            </div>

            <form class="mt-6 lg:mt-[50px] flex flex-col gap-5 lg:gap-10 font-display overflow-auto">
                <TextInput
                    placeholder="Никнейм"
                />

                <TextInput
                    placeholder="E-mail"
                />

                <TextInput
                    placeholder="Пароль"
                    inputType="password"
                />

                <TextInput
                    placeholder="Подтверждение пароля"
                    inputType="password"
                />
            </form>

            <div  class="mt-7 lg:mt-16 p-2 lg:py-5 text-center lg:text-3xl text-white cursor-pointer bg-orange rounded-lg transition-all duration-75 hover:bg-white border-orange border-2 hover:text-orange">
                Зарегистрироваться
            </div>
        </div>
    </div>

</template>

<script setup>
// import { ref } from 'vue';
import TextInput from '../reusable/TextInput.vue';
// import CroppedImage from '../reusable/CroppedImage.vue';
// import CropperModal from '../modals/CropperModal.vue';
// import axios from 'axios';
// import { useUserStore } from '@/store/user-store';
// import eventBus from '@/eventBus';

// const userStore = useUserStore()

// let name = ref(null)
// let surname = ref(null)
// let login = ref(null)
// let email = ref(null)
// let password = ref(null)
// let confirmPassword = ref(null)

// let isBut = ref(false)

// let errors = ref([])

// let open = ref(false)

// let categories = ref(null)
// let activeCategories = ref([])

// let openCategories = ref(false)

// let activeCategoriesId = ref([])

// let getCategories = async() => {
//     try {
//         let res = await axios('http://127.0.0.1:8000/api/categories', {
//             headers:
//             {
//                 Authorization: `Bearer ${userStore.token}`,
//             }
//         })

//         categories.value = res.data.categories

//         console.log(res)
//     } catch (err) {
//         console.log(err)
//         // errors.value = err.response.data.errors
//     }
// }

// let activeCategoriesPush = (category) => {
//     try {
//         if (!activeCategoriesId.value.includes(category.id)) {
//             activeCategories.value.push(category)

//             activeCategoriesId.value.push(category.id)
//         } else {
//             activeCategories.value.splice(activeCategories.value.indexOf(category), 1)
//             activeCategoriesId.value.splice(activeCategoriesId.value.indexOf(category.id), 1)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

// let imageData = null
// let image = ref(null)

// const setCroppedImageData = (data) => {
//     imageData = data
//     image.value = data.imageUrl
// }

// let register = async() => {
//     if (isBut.value) {
//         console.log(activeCategoriesId.value[0])
//         let data = new FormData();
//         let categories_id = [];

//         data.append('name', name.value || '')
//         data.append('surname', surname.value || '')
//         data.append('login', login.value || '')
//         data.append('email', email.value || '')
//         data.append('password', password.value || '')
//         data.append('password_confirmation', confirmPassword.value || '')
//         // data.append('categoryId', activeCategoriesId || '')
//         data.append('image', image.value || '')
//         for (let index = 0; index < activeCategoriesId.value.length; index++) {
//             categories_id.push(activeCategoriesId.value[index]);
//             data.append('categoryId', categories_id || '')

//         }

//         console.log(image.value);

//         if (imageData) {
//             data.append('image', imageData.file || '')
//             data.append('height', imageData.height || '')
//             data.append('width', imageData.width || '')
//             data.append('left', imageData.left || '')
//             data.append('top', imageData.top || '')
//         }

//         try {
//             let res = await axios.post('http://127.0.0.1:8000/api/registration', data)
//             userStore.setUserDetails(res)

//             console.log(res)
//             eventBus.emit('register', '')

//         } catch (err) {
//             console.log(err)
//             errors.value = err.response.data.errors
//             console.log(errors.value)
//         }

//     }
// }


</script>
