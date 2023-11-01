import axios from "axios";

export const instance = axios.create({
    baseURL: 'node-js-gmail-ivory.vercel.app',
})

export const contactFormApi = {
    sendFormData(data: ContactFormValue) {
        return instance.post("/sendMessage", data)
    },
}

export type ContactFormValue = {
    name?: string
    email?: string
    message?: string
}