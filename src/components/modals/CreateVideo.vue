<template>
    <div v-if="!open" class="fixed lg:max-w-[35%] lg:max-h-[80%] lg:m-auto flex flex-col inset-0 z-50 bg-white lg:rounded-xl">
        <div @click="$emit('closeModal')" class="absolute lg:-right-24 lg:w-max max-lg:inset-x-0 p-2 lg:p-4 bg-light-black lg:bg-white lg:rounded-lg cursor-pointer transition-all duration-75 hover:bg-orange group">
            <svg viewBox="0 0 18 18" fill="none" class="w-[25px] lg:w-10 m-auto">
                <path d="M15.072 17.3952L9.26367 11.5868L3.4553 17.3952C3.1472 17.7033 2.72933 17.8764 2.29362 17.8764C1.8579 17.8764 1.44004 17.7033 1.13194 17.3952C0.823848 17.0871 0.650761 16.6692 0.650761 16.2335C0.650761 15.7978 0.823849 15.3799 1.13194 15.0718L6.94032 9.26346L1.13194 3.45508C0.823848 3.14698 0.650762 2.72912 0.650762 2.2934C0.650762 1.85769 0.823848 1.43982 1.13194 1.13173C1.44004 0.823633 1.85791 0.650547 2.29362 0.650547C2.72933 0.650547 3.1472 0.823633 3.45529 1.13173L9.26367 6.94011L15.072 1.13173C15.3801 0.823633 15.798 0.650546 16.2337 0.650546C16.6694 0.650546 17.0873 0.823632 17.3954 1.13173C17.7035 1.43982 17.8766 1.85769 17.8766 2.2934C17.8766 2.72912 17.7035 3.14698 17.3954 3.45508L11.587 9.26346L17.3954 15.0718C17.7035 15.3799 17.8766 15.7978 17.8766 16.2335C17.8766 16.6692 17.7035 17.0871 17.3954 17.3952C17.0873 17.7033 16.6694 17.8764 16.2337 17.8764C15.798 17.8764 15.3801 17.7033 15.072 17.3952Z" class="transition-all duration-75 fill-orange group-hover:fill-white " />
            </svg>
        </div>

        <div class="flex flex-col h-full px-3 pb-8 lg:p-10 max-lg:pt-16">
            <img src="../../assets/icons/main_logo.png" alt="" class="w-32 min-[1720px]:w-40 m-auto">

            <div class="text-center mt-2 text-2xl lg:text-5xl text-orange">
                Загрузка видео
            </div>

            <form class="mt-6 lg:mt-[50px] flex flex-col gap-5 lg:gap-10 font-display overflow-auto">
                <TextInput
                    placeholder="Название"
                />

                <TextInput
                    placeholder="Описание (необязательно)"
                />

                <div>
                    <div @click="openCategories = !openCategories" class="flex justify-center gap-4 p-2 lg:py-4 text-center lg:text-3xl  text-orange border-orange border-2 rounded-lg cursor-pointer">
                        Категории

                        <svg viewBox="0 0 50 26" fill="none" class="w-[17px] lg:w-7">
                            <path d="M46.5295 0.582918L24.9978 21.3046L3.46612 0.582918C3.08142 0.211941 2.56499 0.00425292 2.02723 0.00425292C1.48946 0.00425292 0.973036 0.211941 0.588336 0.582918C0.402065 0.763102 0.254083 0.978169 0.15306 1.21553C0.0520356 1.45288 0 1.70776 0 1.96522C0 2.22268 0.0520356 2.47755 0.15306 2.7149C0.254083 2.95226 0.402065 3.16733 0.588336 3.34751L23.4943 25.3962C23.8965 25.7833 24.4361 26 24.9978 26C25.5595 26 26.099 25.7833 26.5013 25.3962L49.4073 3.35177C49.5948 3.17145 49.7439 2.95585 49.8457 2.71771C49.9476 2.47957 50 2.2237 50 1.96522C50 1.70673 49.9476 1.45086 49.8457 1.21272C49.7439 0.974578 49.5948 0.758983 49.4073 0.578663C49.0226 0.207686 48.5061 0 47.9684 0C47.4306 0 46.9142 0.207686 46.5295 0.578663V0.582918Z" fill="orange"/>
                        </svg>
                    </div>

                    <div v-if="openCategories" class="mt-2 bg-white rounded-lg text-center text-orange border-orange border-2">
                        <div class="relative flex justify-center items-center py-2 lg:text-2xl border-orange border-b-2 last:border-b-0 cursor-pointer">
                            Обучающее
                        </div>

                        <div class="relative flex justify-center items-center py-2 lg:text-2xl border-orange border-b-2 last:border-b-0 cursor-pointer">
                            Развлекающее
                        </div>
                    </div>
                </div>

                <div @click="open = !open" class="flex justify-center gap-3 lg:gap-6 border-orange border p-2 lg:p-2 lg:text-3xl text-orange rounded-lg lg:rounded-xl cursor-pointer">
                    <input id="avatar" type="file" ref="fileInput" @change="getUploadedImage" class="hidden">

                    <label for="avatar" class="block relative z-10 py-2 lg:py-2 lg:text-3xl text-center bg-white rounded-lg lg:rounded-xl cursor-pointer">
                        Загрузить аватар

                        <svg viewBox="0 0 20 26" fill="none" class="w-[14px] lg:w-5 inline-block ml-2 lg:ml-4">
                            <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke="orange" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </label>
                </div>
            </form>

            <div  class="mt-7 lg:mt-16 p-2 lg:py-5 text-center lg:text-3xl text-white cursor-pointer bg-orange rounded-lg transition-all duration-75 hover:bg-white border-orange border-2 hover:text-orange">
                Загрузить видео
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../reusable/TextInput.vue';
// import CroppedImage from '../reusable/CroppedImage.vue';
// import CropperModal from '../modals/CropperModal.vue';
// import axios from 'axios';
// import { useUserStore } from '@/store/user-store';
// import eventBus from '@/eventBus';

// const userStore = useUserStore()

let openCategories = ref(false)

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
