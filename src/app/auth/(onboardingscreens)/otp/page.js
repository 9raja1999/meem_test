"use client"
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import HeadingWithTitle from "../../../components/HeadingWithTitle"

import OTPInput from "react-otp-input"


export default function Otp({ params, searchParams }) {
    const router = useRouter();
    const [otp, setOtp] = useState('')
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = () => {
        if (otp.length == 0) {
            setError(true)
            setErrorMessage("Enter an OTP code send to you")
        }
        if (otp.length < 5) {
            setError(true)
            setErrorMessage("Enter an OTP code of 5 digit")
        }

        if (otp === '22222') {
            console.log("MY CODE", searchParams)

            router.replace(searchParams.source == 'signup' ? '/auth' : '/auth/resetpassword')
        } else {
            setError(true)
            setErrorMessage("Invalid OTP code")
        }
    }
    return (
        <>
            <HeadingWithTitle
                heading="OTP Verification"
                title="Enter the 5 digit verification code we just sent you on
                your email address."
            />

            <div className="otp__inputs__holder">
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={false}
                    renderInput={(props) => <input {...props} placeholder='-' />}
                    className={"OtpInput"}
                />
                {error && <p className='error__info__text padding_top_10'>{errorMessage}</p>}
            </div>

            <div className='button__holder margin_top_30'>
                <button onClick={handleSubmit}>
                    Verify
                </button>
            </div>
        </>
    )
}
