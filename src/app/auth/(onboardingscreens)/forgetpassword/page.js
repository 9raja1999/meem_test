"use client"

import { useRouter } from 'next/navigation'
import { maxBounds, minBounds, Patterns, VALIDATIONS_TEXT } from '../../../../constants/constants'
import { useForm } from 'react-hook-form'
import HeadingWithTitle from '../../../components/HeadingWithTitle'
import { GreenTickIcon, ErrorInfoIcon } from "../../../../constants/svg"


export default function ForgetPassword() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors, dirtyFields } } = useForm({
        mode: "onChange",
        criteriaMode: "firstError",
        shouldFocusError: true,
    });


    const onSubmit = (e) => {
        router.replace('/auth/otp?source=forgetpwd')
    }

    return (
        <>
            <HeadingWithTitle
                cancel={true}
                heading="Forgot Password"
                title="Enter your registered email address. We will
                send you a verification code."
            />
            <form className="forgetpwd__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="forget__form__holder">
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
                    </div>
                </div>
                <div className='button__holder margin_top_30'>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
