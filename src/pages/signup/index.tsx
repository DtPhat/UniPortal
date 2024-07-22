import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase/config";
import { useLoginGoogleMutation, useLoginMutation, useRegisterMutation } from "@/app/services/users";
import { customFetch } from "@/app/services/api";
import { setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch } from "@/app/hooks";
import { ReloadIcon } from "@radix-ui/react-icons";
import { anonymousAvatar } from "@/data/defaultValues";

const FormSchema = z.object({
  fullName: z.string().min(1, { message: "Họ tên không được rỗng" }).max(80),
  email: z.string().email(),
  password: z.string().min(6, { message: "Mật khẩu phải nhiều hơn 8 kí tự" }),
  confirmPassword: z.string().min(6, { message: "Mật khẩu phải nhiều hơn 8 kí tự" })
}).refine(
  (values) => {
    return values.password === values.confirmPassword;
  },
  {
    message: "Mật khẩu phải trùng nhau!",
    path: ["confirmPassword"],
  }
);;

const Signup = () => {
  const [loginGoolge, googleLoginResponse] = useLoginGoogleMutation()
  const [register, registerMutationResponse] = useRegisterMutation()
  const [login, loginMutationResponse] = useLoginMutation()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const fromPathname = location.state?.from?.pathname
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const googleAuthenticate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const loginResponse = await loginGoolge({ idToken: credential?.idToken }).unwrap()
        loginResponse?.token && handleAfterLogin(loginResponse.token)
      }).catch((error) => {
        console.log(error)
      });
  }

  const handleAfterLogin = async (userToken: string) => {
    const userInfo = await customFetch('/api/v1/accounts/current', userToken)
    if (!userInfo) return;

    dispatch(setCredentials({ ...userInfo, userToken: userToken }));
    navigate(fromPathname
      ? fromPathname
      : userInfo.role == 'ADMIN'
        ? '/admin'
        : '/')
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data)
      const registerReponse = await register({
        email: data.email,
        firstName: data.fullName,
        password: data.password,
        role: "STUDENT",
        avatarLink: anonymousAvatar
      }).unwrap();

      const loginResponse = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      loginResponse?.token && handleAfterLogin(loginResponse?.token)

    } catch (error: any) {
      toast({
        title: 'Authentication failed',
        description: error?.data?.violations?.join('\n') || "Please try again"
      })
    }


  }
  return (
    <div className="shadow-md my-4">
      <section className="grid grid-cols-2">
        <Form {...form}>
          <div
            className="col-span-2 lg:col-span-1 flex flex-col items-center text-black justify-center p-4"
          >
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold mb-2">ĐĂNG KÝ</h1>
              <h2 className="w-full text-lg text-black/50 font-semibold">
                Nhập thông tin của bạn
              </h2>
            </div>
            <div className="w-full max-w-md flex flex-col gap-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ tên</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="Must ave at least 6 characters" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="Must ave at least 6 characters" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full text-white font-semibold py-3 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50 mt-4"
                onClick={form.handleSubmit(onSubmit)}
                disabled={googleLoginResponse.isLoading || loginMutationResponse.isLoading || registerMutationResponse.isLoading}
              >
                {
                  googleLoginResponse.isLoading || loginMutationResponse.isLoading || registerMutationResponse.isLoading?
                    <ReloadIcon className="h-5 w-5 animate-spin" />
                    : <span>Đăng ký</span>
                }
              </Button>
              <div className="text-center justify-center p-4">
                <div className='flex justify-center text-center border-b-2 border-gray-300 relative mt-4'>
                  <span className='absolute top-[-0.8rem] bg-white text-gray-500 px-2'>Hoặc</span>
                </div>
                <Button
                  className="bg-white text-black hover:bg-slate-200 w-full hover:text-black mt-4"
                  onClick={googleAuthenticate}
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-3.5 h-3.5 mr-3 "
                    alt=""
                  />
                  Đăng nhập bằng Google
                </Button>
                <Button className="bg-blue-500 text-white hover:bg-blue-600 w-full hover:text-white mt-4"
                  onClick={(e) => { e.preventDefault() }}>
                  <img
                    src="https://www.svgrepo.com/show/448224/facebook.svg"
                    className="w-5 h-5 mr-3 "
                    alt=""
                  />
                  Đăng nhập bằng Facebook
                </Button>
                <div className="mt-2 text-white-300">
                  Đã có tài khoản?
                  <Link to="/signin" className="ml-4 text-accent font-semibold">
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>

        <div className="hidden lg:block bg-gradient-to-b rounded-r from-black/90 via-gray-500 to-gray-200 text-white font-semibold justify-center text-center overflow-hidden">
          <h1 className="text-4xl py-10">Cổng thông tin cho tất cả các trường</h1>
          <img className="w-full" src="https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg"></img>
        </div>
      </section>
    </div>
  );
};

export default Signup;

