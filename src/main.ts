import { createApp } from "vue"
import { createPinia } from "pinia"
import "aos/dist/aos.css"

import App from "./App.vue"
import router from "./router"
import axios, { axiosInstance } from "@/plugins/axios"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide("axios", axiosInstance)

app.mount("#app")
