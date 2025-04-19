import ActionButton from "@/features/shared/components/form/ActionButton";
import TextFiled from "@/features/shared/components/form/TextFiled";
import Title from "@/features/shared/components/Title";

const Login = () => {
    return (
        <section className=" flex flex-col items-center justify-center h-screen ">
            <div className=" w-full max-w-sm ">
                <Title className="mb-3">
                    Log in
                </Title>

                <div className="space-y-5 flex flex-col items-center">
                    <TextFiled label="Email" type="email" />
                    <TextFiled label="Password" type="password" />
                    <ActionButton >
                        Log in
                    </ActionButton>
                </div>


            </div>
        </section>
    );
};

export default Login;