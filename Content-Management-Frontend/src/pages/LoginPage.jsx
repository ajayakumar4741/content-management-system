import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

function LoginPage() {
  const {register,handleSubmit,formState} = useForm()
  const {errors} = formState
  function onSubmit(){
    console.log(data)
  } 
  return (
    <form
     onSubmit={handleSubmit()}
      className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 
    items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl 
    dark:text-white dark:bg-[#141624]"
    >
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">Signin Form</h3>
        <p>Welcome back! Log in to continue.</p>
      </div>

      <div>
        <Label htmlFor="username" className="dark:text-[97989F]">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          disabled={mutation.isPending}
          placeholder="Enter username"
          {...register("username", { required: "Username is required" })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.username?.message && (
          <InputError error={errors.username.message} />
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          disabled={mutation.isPending}
          placeholder="Enter password"
          {...register("password", { required: "Password is required" })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px]  w-[300px]"
        />
        {errors?.password?.message && (
          <InputError error={errors.password.message} />
        )}
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        <button disabled={mutation.isPending} className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
          {mutation.isPending ? (
            <>
              {" "}
              <SmallSpinner />{" "}
              <SmallSpinnerText text="Logging in..." />
            </>
          ) : (
            <SmallSpinnerText text="Signin" />
          )}
        </button>
        <p className="text-[14px]">
          Don't have an account? <Link to="/signup">signup</Link>
        </p>
      </div>
    </form>
  )
}

export default LoginPage
