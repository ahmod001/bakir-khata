import AuthBottomText from "@/features/auth/shared/components/AuthBottomText";
import ActionButton from "@/features/auth/shared/components/form/ActionButton";
import TextFiled from "@/features/auth/shared/components/form/TextFiled";
import Title from "@/features/auth/shared/components/Title";
import { useForm } from "react-hook-form"
import { emailRules, passwordRules, requiredRules } from "@/features/auth/shared/services/hook-forms/validation-rules";
import useRegister from "./hooks/useRegister";

interface User {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    address: string;
}
type FormData = User

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>()

    const { isPending, mutate } = useRegister()

    const onSubmit = (data: FormData) => {
        mutate(data);
    }

    return (
        <section className=" flex flex-col items-center justify-center h-screen ">
            <div className=" w-full max-w-xs mb-8">
                <Title className="mb-3">নতুন একাউন্ট তৈরি করুন</Title>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col items-center">
                    <TextFiled
                        label="সম্পূর্ণ নাম"
                        type="text"
                        autoComplete="name"
                        {...register("name", requiredRules)}
                        error={errors?.name?.message} />

                    <TextFiled
                        label="ইমেইল"
                        type="email"
                        autoComplete="email"
                        {...register("email", emailRules)}
                        error={errors?.email?.message} />

                    <TextFiled
                        label="পাসওয়ার্ড"
                        type="password"
                        {...register("password", passwordRules)}
                        error={errors?.password?.message} />

                    <TextFiled
                        label="পাসওয়ার্ড নিশ্চিত করুন"
                        type="password"
                        {...register("password_confirmation", {
                            ...passwordRules,
                            validate: value => value === watch("password") || "Passwords do not match"
                        })}
                        error={errors?.password_confirmation?.message}
                    />

                    <TextFiled
                        label="ঠিকানা"
                        type="text"
                        autoComplete="address-level1"
                        {...register("address", requiredRules)}
                        error={errors?.address?.message} />

                    <ActionButton disabled={isPending}>চলুন</ActionButton>
                </form>

            </div>

            <AuthBottomText text="আগে থেকেই অ্যাকাউন্ট আছে?" link={{ label: 'লগ ইন', href: '/login' }} />
        </section>
    );
};

export default Register;