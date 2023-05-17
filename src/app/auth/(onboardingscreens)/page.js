"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from '../../../constants/constants'
// import OnboardingLayout from '../layout/OnboardingLayout'
import HeadingWithTitle from '../../components/HeadingWithTitle'

import FacebookLogin from '../../components/buttons/FacebookLogin'
import GoogleLogin from '../../components/buttons/GoogleLogin'
import { EyeOpen, GreenTickIcon, EyeClose, ErrorInfoIcon } from '../../../constants/svg'
import { Divider, Button } from 'antd'

export default function Login() {
  const router = useRouter();
  const [showpassword, setShowpassword] = useState(false);

  const { register, handleSubmit, watch, formState: { errors, dirtyFields } } = useForm({
    mode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });



  const onSubmit = (e) => {
    router.replace('/')
  }


  return (
    <>
      <HeadingWithTitle
        cancel={false}
        heading="Sign in"
        title="Let's get you in to the app"
      />
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='login__form__holder'>
          <div className='field_holder'>
            <label className='label'>Email Address</label>
            <div className={`input_holder rest__field ${dirtyFields.email && (errors.email ? 'error__field' : 'success__field')} `}>
              <input
                type='email'
                placeholder='Enter your email'
                className='input__field'
                {...register("email", {
                  required: {
                    value: true,
                    message: VALIDATIONS_TEXT.EMAIL_REQUIRED
                  },
                  pattern: {
                    value: Patterns.Email,
                    message: VALIDATIONS_TEXT.EMAIL_PATTERN
                  },
                  maxLength: {
                    value: maxBounds.EMAIL,
                    message: VALIDATIONS_TEXT.EMAIL_MAX
                  }
                })}
              />
              <div
                className='icon'
              >
                {dirtyFields.email && !errors.email && (
                  <div className='icon'>
                    <GreenTickIcon />
                  </div>
                )}
                {dirtyFields.email && errors.email && (
                  <div className='icon'>
                    <ErrorInfoIcon />
                  </div>
                )}
              </div>
            </div>
            {dirtyFields.email && errors.email && (
              <p className='padding_top_10 error__info__text'>{errors.email.message}</p>
            )}
          </div>
          <div className='field_holder'>
            <label className='label'>Password</label>
            <div className={`input_holder rest__field ${dirtyFields.password && (errors.password ? 'error__field' : 'success__field')} `}>
              <input
                className='input__field'
                placeholder='Enter your password'
                type={showpassword ? 'text' : 'password'}
                {...register("password", {
                  required: {
                    value: true,
                    message: VALIDATIONS_TEXT.PASSWORD_REQUIRED
                  },
                  pattern: {
                    value: Patterns.Password,
                    message: VALIDATIONS_TEXT.PASSWORD_PATTERN,
                  },
                  minLength: {
                    value: minBounds.PASSWORD,
                    message: VALIDATIONS_TEXT.PASSWORD_MIN
                  },
                  maxLength: {
                    value: maxBounds.PASSWORD,
                    message: VALIDATIONS_TEXT.PASSWORD_MAX
                  }
                })}
              />
              <div
                className='icon'
                onClick={() => setShowpassword(prev => !prev)}
              >
                {showpassword ? <EyeClose /> : <EyeOpen />}
              </div>
            </div>
            {dirtyFields.password && errors.password && (
              <p className='padding_top_10 error__info__text'>{errors.password.message}</p>
            )}
          </div>
          <Link href="/auth/forgetpassword" className='forgot__password__text'>Forgot Password?</Link>
        </div>
        <div className='button__holder padding_top_30'>
          <button type="submit">
            Sign in
          </button>
        </div>
      </form>
      <div className='social_login_container padding_top_30'>
        <Divider plain>or</Divider>
        <FacebookLogin />
        <GoogleLogin />
      </div>
      <div className='not__have__account__holder margin_top_30'>
        <p>Don't have an account? <Link href='/auth/signup'>Sign Up</Link></p>
      </div>
    </>
  )
}
