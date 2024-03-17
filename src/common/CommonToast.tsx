import React from "react";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const CommonToast = () => {
    return (
        <ToastContainer
            autoClose={2000}
            closeOnClick
            draggable
            newestOnTop={false}
            pauseOnFocusLoss
            pauseOnHover
            position={'bottom-left'}
            rtl={false}
            theme={'colored'}
            transition={Zoom}
        />
    )
}