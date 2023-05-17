"use client"
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import HeadingWithTitle from "../../../components/HeadingWithTitle";
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from "../../../../constants/constants"
import { useForm } from 'react-hook-form'
import { Button } from "antd";
import { EyeOpen, EyeClose } from '../../../../constants/svg';
import { useState } from "react";

export default function ResetPassword() {
    const router = useRouter();
    const [npasswordshow, setNpasswordshow] = useState(false);
    const [cpasswordshow, setCpasswordshow] = useState(false);


    const { register, handleSubmit, watch, formState: { errors, dirtyFields } } = useForm({
        mode: "onChange",
        criteriaMode: "firstError",
        shouldFocusError: true,
    });
    const passwordWatch = useRef({});
    passwordWatch.current = watch("newpassword", "");

    const onSubmit = () => {
        router.replace('/auth')
    }

    return (
        <>
            <HeadingWithTitle
                heading="Reset Password"
                title="Your new password must be different from previous used passwords"
                cancel={true}
            />
            <form className="resetpassword__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="resetpwdform__holder">
                    <div className='field_holder'>
                        <label className='label'>New Password</label>
                        <div className={`input_holder rest__field ${dirtyFields.newpassword && (errors.newpassword ? 'error__field' : 'success__field')} `}>
                            <input
                                className='input__field'
                                placeholder='Enter your new password'
                                type={npasswordshow ? 'text' : 'password'}
                                {...register("newpassword", {
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
                                onClick={() => setNpasswordshow(prev => !prev)}
                            >
                                {
                                    npasswordshow ? <EyeClose /> : <EyeOpen />
                                }
                            </div>
                        </div>
                        {dirtyFields.newpassword && errors.newpassword && (
                            <p className='padding_top_10 error__info__text'>{errors.newpassword.message}</p>
                        )}
                    </div>
                    <div className='field_holder'>
                        <label className='label'>Confirm Password</label>
                        <div className={`input_holder rest__field ${dirtyFields.confirmpassword && (errors.confirmpassword ? 'error__field' : 'success__field')} `}>
                            <input
                                className='input__field'
                                placeholder='Confirm new password'
                                type={cpasswordshow ? 'text' : 'password'}
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
                                onClick={() => setCpasswordshow(prev => !prev)}
                            >
                                {
                                    cpasswordshow ? <EyeClose /> : <EyeOpen />
                                }
                            </div>
                        </div>
                        {dirtyFields.confirmpassword && errors.confirmpassword && (
                            <p className='padding_top_10 error__info__text'>{errors.confirmpassword.message}</p>
                        )}
                    </div>
                    <div className='button__holder'>
                        <button type='submit'>
                            Reset Password
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
