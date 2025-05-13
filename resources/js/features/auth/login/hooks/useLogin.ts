import React from 'react';
import { login, User } from '../services/api/login';
import { failToast, successToast } from '@/services/Toastify';
import { useMutation } from '@tanstack/react-query';
import { router } from '@inertiajs/react';

const useLogin = () => {
    const loginReq = useMutation({
        mutationKey: ['login'],
        mutationFn: (user: User) => login(user),
        onSuccess: handleSuccess,
        onError: handleError
    })

    return loginReq;

};


function handleError(data) {
    failToast(data?.response?.data?.message)
}

function handleSuccess(data) {
    successToast(data?.message)

    router.visit("/dashboard")
}

export default useLogin;