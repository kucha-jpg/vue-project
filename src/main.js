import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// 注册 Swiper 组件
const app = createApp(App)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(router)
app.mount('#app')
