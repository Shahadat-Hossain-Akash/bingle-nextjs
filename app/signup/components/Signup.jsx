'use client';
import FormField from '@/components/FormField';
import Image from 'next/image';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema} from '@/utils/form/schema';
import {ClipLoader} from 'react-spinners';
import Link from 'next/link';
import {WavyBackground} from '@/components/ui/wavy-background';

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm({resolver: zodResolver(signUpSchema)});
    const onSubmit = async (data) => {
        try {
            console.log(data);
            reset();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <WavyBackground
            backgroundFill={"#151618"}
            waveWidth={100}
            className="w-full h-screen justify-center items-center flex flex-col relative">
            {/*			<Image
				src={'/assets/gradient.svg'}
				alt="logo"
				fill
				objectFit="cover"
				className="-z-10 mix-blend-color-dodge opacity-50 grayscale "
				priority
    />*/
            }
            <Image src={"/assets/logo.svg"} alt="logo" width={40} height={60}/>
            <div className="max-w-lg w-full flex flex-col gap-2">
                <h1 className="text-6xl text-center">Welcome to Bingle</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm">
                            Email
                        </label>
                        <FormField
                            type={"text"}
                            placeholder={"Enter email"}
                            name={"email"}
                            register={register}
                            error={errors.email}/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm">
                            Password
                        </label>
                        <FormField
                            type={"password"}
                            placeholder={"Enter password"}
                            name={"password"}
                            register={register}
                            error={errors.password}/>
                    </div>
                    <div className="w-full flex gap-2 justify-end">
                        <Link href={"/login"}>
                            Already have an account ?{" "}
                            <span className="underline">Login now</span>
                        </Link>
                    </div>
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full px-2 py-4 bg-tertiary mt-2 rounded-xl hover:brightness-110">
                        {
                            isSubmitting
                                ? <ClipLoader color="#fff" size={16}/>
                                : "Sign up"
                        }
                    </button>
                </form>
            </div>
        </WavyBackground>
    );
}
