
import { toast, ToastOptions } from 'react-toastify';


const config: ToastOptions = {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: 'light'
}

export const successToast = (msg: string) => toast.success(msg, config);
export const failToast = (msg: string) => toast.error(msg, config);