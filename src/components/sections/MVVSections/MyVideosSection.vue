<template>
    <section class="px-3 pt-8 mb-40">
        <div class="container m-auto ">
            <div class="text-4xl text-orange mb-10">
                Мои видео <span @click="open = !open" class="inline-block py-2 px-5 ml-2 border-orange border-2 rounded-full cursor-pointer transition-all duration-75 hover:bg-orange hover:text-white">+</span>
            </div>

            <div class="grid min-[450px]:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[52px]">
                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>
                

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>


                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>


                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>

                <router-link to="/video">
                    <div class=" border-orange border-2 rounded-lg">
                        <video src="../../../assets/videos/video2.mp4" poster="../../../assets/img/img.jpg" controls="controls" class="border-orange border-2 rounded-lg">
                        </video>
                    </div>

                    <div class="text-2xl mt-2">
                        Уроки на гитаре с нуля
                    </div>

                    <div class="text-grey">
                        5.04.2023
                    </div>
                </router-link>
            </div>
        </div>
    </section>

    <CreateVideo v-if="open" @closeModal="open = false"/>

    <div v-if="open" @click="open = !open" class="fixed inset-0 bg-gray-500 bg-opacity-80 z-40">

</div>
</template>

<script setup>
    import { ref } from 'vue'
    import CreateVideo from '../../modals/CreateVideo.vue'

    let open = ref(false)
</script>