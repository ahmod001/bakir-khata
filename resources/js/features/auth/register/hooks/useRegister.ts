import React from 'react';
import { failToast, successToast } from '@/services/Toastify';
import { useMutation } from '@tanstack/react-query';
import { register, User } from '../services/api/register';

const useRegister = () => {
    const registerReq = useMutation({
        mutationKey: ['reg'],
        mutationFn: (user: User) => register(user),
        onSuccess: handleSuccess,
        onError: handleError
    })

    return registerReq;

};


function handleError(data) {
    failToast(data?.response?.data?.message)
}

function handleSuccess(data) {
    successToast(data?.message)
}

export default useRegister;