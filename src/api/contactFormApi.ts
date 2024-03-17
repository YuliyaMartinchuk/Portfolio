import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://gmail-server-one.vercel.app/',
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