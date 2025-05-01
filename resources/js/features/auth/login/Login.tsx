import AuthBottomText from "@/features/shared/components/AuthBottomText";
import ActionButton from "@/features/shared/components/form/ActionButton";
import TextFiled from "@/features/shared/components/form/TextFiled";
import Title from "@/features/shared/components/Title";
import ForgotPass from "./components/ForgotPass";
import { useForm } from "react-hook-form"
import { emailRules, passwordRules } from "@/features/shared/services/hook-forms/validation-rules";
import useLogin from "./hooks/useLogin";

interface User {
    email: string;
    password: string;
}
type FormData = User

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>()

    const { isPending, mutate } = useLogin()

    const onSubmit = (data: FormData) => {
        mutate(data);
    }

    return (
        <section className=" flex flex-col items-center justify-center h-screen ">
            <div className=" w-full max-w-xs mb-8">
                <Title className="mb-3">Log in</Title>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 flex flex-col items-center">
                    <TextFiled
                        label="Email"
                        type="email"
                        {...register("email", emailRules)}
                        error={errors?.email?.message} />

                    <TextFiled
                        label="Password"
                        type="password"
                        {...register("password", passwordRules)}
                        error={errors?.password?.message} />

                    {/* <ForgotPass /> */}

                    <ActionButton disabled={isPending}>Log in</ActionButton>
                </form>
            </div>

            <AuthBottomText text="Don't have an account?" link={{ label: 'Register', href: '/register' }} />
        </section>
    );
};

export default Login;