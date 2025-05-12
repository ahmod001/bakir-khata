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
                <Title className="mb-3">Create an Account</Title>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex flex-col items-center">
                    <TextFiled
                        label="Full Name"
                        type="text"
                        autoComplete="name"
                        {...register("name", requiredRules)}
                        error={errors?.name?.message} />

                    <TextFiled
                        label="Email"
                        type="email"
                        autoComplete="email"
                        {...register("email", emailRules)}
                        error={errors?.email?.message} />

                    <TextFiled
                        label="Password"
                        type="password"
                        {...register("password", passwordRules)}
                        error={errors?.password?.message} />

                    <TextFiled
                        label="Confirm Password"
                        type="password"
                        {...register("password_confirmation", {
                            ...passwordRules,
                            validate: value => value === watch("password") || "Passwords do not match"
                        })}
                        error={errors?.password_confirmation?.message}
                    />

                    <TextFiled
                        label="Address"
                        type="text"
                        autoComplete="address-level1"
                        {...register("address", requiredRules)}
                        error={errors?.address?.message} />

                    <ActionButton disabled={isPending}>Register</ActionButton>
                </form>
            </div>

            <AuthBottomText text="Already have an account?" link={{ label: 'Log in', href: '/login' }} />
        </section>
    );
};

export default Register;