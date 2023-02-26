// axios.ts

import axios from "axios"
import type { App } from "vue"

interface AxiosOptions {
  baseUrl?: string
  token?: string
}

export const axiosInstance = axios.create({
  baseURL: "https://portfolio-vue-back.onrender.com/api",
  // baseURL: "https://portfolio-vue-backend-production.up.railway.app/api",
  // baseURL: "http://localhost:1337/api",

})

export default {
  install: (app: App, options: AxiosOptions) => {
    app.config.globalProperties.$axios = { ...axiosInstance }
  },
}
