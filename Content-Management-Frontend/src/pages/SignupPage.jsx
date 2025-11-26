import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/services/apiBlog';
import { toast } from 'react-toastify';
import SmallSpinner from '@/ui_components/SmallSpinner';

function SignupPage() {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const password = watch("password");

  const mutation = useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: () => {
      toast.success("Account created successfully!");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    }
  });

  function onSubmitData(data) {
    mutation.mutate(data);
  }

  return (
    <form
      className="h-[90%] overflow-auto md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]"
      onSubmit={handleSubmit(onSubmitData)}
    >
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">Sign Up</h3>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          
          Create your account to get started!
        </p>
      </div>

      {/* Username */}
      <div className="flex flex-col gap-2 mb-2">
        <Label htmlFor="username" className="dark:text-[97989F]">Username</Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long"
            }
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.username && <small className='text-red-700'>{errors.username.message}</small>}
      </div>

      {/* First Name */}
      <div className="flex flex-col gap-2 mb-2">
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          {...register('first_name', {
            required: 'First name is required',
            minLength: {
              value: 3,
              message: "First name must be at least 3 characters long"
            }
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.first_name && <small className='text-red-700'>{errors.first_name.message}</small>}
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-2 mb-2">
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          {...register('last_name', {
            required: 'Last name is required',
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters long"
            }
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.last_name && <small className='text-red-700'>{errors.last_name.message}</small>}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2 mb-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.password && <small className='text-red-700'>{errors.password.message}</small>}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-2 mb-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            },
            validate: (value) => value === password || 'Passwords do not match'
          })}
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.confirmPassword && <small className='text-red-700'>{errors.confirmPassword.message}</small>}
      </div>

      {/* Submit Button */}
      <div className="w-full flex items-center justify-center flex-col my-4">
        <button
          type="submit"
          className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2"
        >
          {mutation.isPending ? (
            <>
              <SmallSpinner />
              <small className='text-[16px]'>Creating user...</small>
            </>
          ) : (
            <small className='text-[16px]'>Signup</small>
          )}
        </button>

        <p className="text-[14px] mt-2">
          Already have an account? <Link to="/login" className="text-blue-600 underline">Sign In</Link>
        </p>
      </div>
    </form>
  );
}

export default SignupPage;