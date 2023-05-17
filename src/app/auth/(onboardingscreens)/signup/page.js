"use client"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import HeadingWithTitle from "../../../components/HeadingWithTitle"
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from "../../../../constants/constants"

import { useEffect, useRef, useState } from "react"
import { EyeOpen, GreenTickIcon, EyeClose, ErrorInfoIcon } from '../../../../constants/svg'


export default function SignUp() {

  const router = useRouter()

  const [showpassword, setShowpassword] = useState(false);
  const [cshowpassword, setShowcpassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors, dirtyFields }, setError } = useForm({
    mode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const passwordWatch = useRef({});
  passwordWatch.current = watch("password", "");

  const [phonenumber, setPhonenumber] = useState('');

  const requireFirstField = () => {
    const firstField = document.querySelector('input[name="username"]');
    if (firstField && firstField.value === '') {
      firstField.focus();
      setError('username', { type: 'required', message: 'username is required' });
    }
  }


  const onSubmit = () => {
    router.replace('/auth/otp?source=signup')
  }

  return (
    <>
      <HeadingWithTitle
        heading={`Sign Up`}
        title={`Let’s setup your account.`}
        cancel={false}
      />
      <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup__form__holder">
          <div className='field_holder'>
            <label className='label'>Username *</label>
            <div className={`input_holder rest__field ${dirtyFields.username && (errors.username ? 'error__field' : 'success__field')} `}>
              <input
                type='text'
                placeholder='Enter your username'
                className='input__field'
                {...register('username')}
              />
              {dirtyFields.username && !errors.username && (
                <div className='icon'>
                  <GreenTickIcon />
                </div>
              )}
              {dirtyFields.username && errors.username && (
                <div className='icon'>
                  <ErrorInfoIcon />
                </div>
              )}
            </div>
          </div>
          <div className='field_holder'>
            <label className='label'>Full name</label>
            <div className='input_holder rest__field'>
              <input
                type='text'
                onFocus={requireFirstField}
                placeholder='Enter your full name'
                className='input__field'
              />
            </div>
          </div>
          <div className='field_holder'>
            <label className='label'>Phone number</label>
            <div className='input_holder rest__field'>
              <input type='text' placeholder='03212018859' className='input__field' />
            </div>
          </div>
          <div className='field_holder'>
            <label className='label'>Email Address *</label>
            <div className={`input_holder rest__field ${dirtyFields.email && (errors.email ? 'error__field' : 'success__field')} `}>
              <input
                type='text'
                placeholder='Enter your email address'
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
            {dirtyFields.email && errors.email && (
              <p className='padding_top_10 error__info__text'>{errors.email.message}</p>
            )}
          </div>
          <div className='field_holder'>
            <label className={`label ${dirtyFields.password && (errors.password ? 'error__text__color' : 'success__text__color')} `}>Password</label>
            <div className={`input_holder rest__field ${dirtyFields.password && (errors.password ? 'error__field' : 'success__field')} `}>
              <input
                type={showpassword ? 'text' : 'password'}
                placeholder='Enter your password'
                className='input__field'
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
          <div className='field_holder'>
            <label className='label'>Confirm password</label>
            <div className={`input_holder rest__field ${dirtyFields.confirmpassword && (errors.confirmpassword ? 'error__field' : 'success__field')} `}>
              <input
                type={cshowpassword ? 'text' : 'password'}
                placeholder='Enter your password'
                className='input__field'
                {...register("confirmpassword", {
                  required: {
                    value: true,
                    message: VALIDATIONS_TEXT.PASSWORD_REQUIRED
                  },
                  pattern: {
                    value: Patterns.Password,
                    message: VALIDATIONS_TEXT.PASSWORD_PATTERN,
                  },
                  validate: value => value === passwordWatch.current || "The passwords do not match",
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
                onClick={() => setShowcpassword(prev => !prev)}
              >
                {cshowpassword ? <EyeClose /> : <EyeOpen />}
              </div>
            </div>
            {dirtyFields.confirmpassword && errors.confirmpassword && (
              <p className='padding_top_10 error__info__text'>{errors.confirmpassword.message}</p>
            )}
          </div>
        </div>
        <div className='button__holder'>
          <button type='submit'>
            Sign Up
          </button>
        </div>
      </form>
      <div className='already__have__an__account margin_top_30'>
        <p>Already have an account? <Link href='/auth'>Sign in</Link></p>
      </div>
    </>
  )
}
