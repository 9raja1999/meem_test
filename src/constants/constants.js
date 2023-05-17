/*
*  Minimum Error Bounds
* */
export const minBounds = {
    USERNAME: 3,
    PHONE: 10,
    PASSWORD: 8,
    VERIFICATION_CODE: 5,
    CARDNUMBER: 16,
    CVV: 3,
}
/*
*  Maximum Error Bounds
* */
export const maxBounds = {
    USERNAME: 20,
    PHONE: 16,
    EMAIL: 255,
    PASSWORD: 255,
    BIO: 255,
    MESSAGE: 255,
    NAME: 25,
    CARDNUMBER: 16,
    CVV: 3,
    TEXTAREA: 1000
}
/*
*  Validation texts
* */
export const VALIDATIONS_TEXT = {
    IMAGE_REQUIRED: "Image is required",
    NAME_REQUIRED: "Name is required",
    FNAME_REQUIRED: "First Name is required",
    LNAME_REQUIRED: "Last Name is required",
    USERNAME_REQUIRED: "Username is required",
    USERNAME_VALID: "Enter a valid username without spaces",
    EMAIL_REQUIRED: "Email is required",
    DOB_REQUIRED: "Date of birth is required",
    CVV_REQUIRED: "CVV Code is required",
    LOCATION_REQUIRED: "Location is required",
    PASSWORD_REQUIRED: "Password is required",
    CONFIRM_PASSWORD_REQUIRED: "Confirm password is required",
    PHONE_REQUIRED: "Contact number is required",
    DISCRIPTION_REQUIRED: "Description is required",
    SHIFT_GOAL_REQUIRED: "Shift goal is required",
    TOP_DETAILS_REQUIRED: "Top details is required",
    FEEDBACK_REQUIRED: "Feedback is required",
    FIELD_REQUIRE: "This feild is required",


    NAME_MAX: "Max length is " + maxBounds.NAME,
    USERNAME_MAX: "Max length is " + maxBounds.USERNAME,
    USERNAME_MIN: "Min length is " + minBounds.USERNAME,
    EMAIL_MAX: "Max length is " + maxBounds.EMAIL,
    PASSWORD_MIN: "Min length is " + minBounds.PASSWORD,
    PASSWORD_MAX: "Max length is " + maxBounds.PASSWORD,
    CARD_NUMBER_MIN: "Min length is " + minBounds.CARDNUMBER,
    CARD_NUMBER_MAX: "Max length is " + maxBounds.CARDNUMBER,
    PHONE_MIN: "Min length is " + minBounds.PHONE,
    PHONE_MAX: "Max length is " + maxBounds.PHONE,
    TEXTAREA_MAX: "Max length is " + maxBounds.TEXTAREA,

    NAME_PATTERN: "Name must contain letters only",
    EMAIL_PATTERN: "Invalid Email format",
    PASSWORD_PATTERN: "Minimum eight characters,one number and one special character",

    MESSAGE_MAX: "Max length is " + maxBounds.MESSAGE,
    CVV_MIN: "Min length is " + minBounds.CVV,
    CVV_MAX: "Max length is " + maxBounds.CVV,
    VERIFICATION_CODE: "Length is " + minBounds.VERIFICATION_CODE,
    INVALID_FORMAT: "Invalid format",
    POLICY_CONSENT: "please accept our terms and conditions",
    AGE_CONSENT: "you neeed to be atleast 13 years old or above",

    ONLY_NUMERIC_VALUE: "Only numeric values are allowed"

}

/*
*  Patterns based Validations
* */
export const Patterns = {
    Name: /^[A-Za-z][A-Za-z\s]*$/,
    Username: /^[a-zA-Z0-9_-]{3,20}$/,
    Email: /\S+@\S+\.\S+/,
    // Password:  /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
    Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    Contact: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    ZipCode: /^[0-9]+$/,
    CreditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    Percentage: /^([1-9][0-9]?|[0-9])(\.[0-9]+)?%$/,
    NumberOnly: /^\d*$/
}

/*
*  special charachter lists
* */
export const SPECIAL_CHARACTER_ARRAY = [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ";", ":", "'", '"', "\\", "|", "<", ",", ">", ".", "?", "/"
]

export const SPECIAL_CHARACTER_ARRAY_FOR_ADDRESS = [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "{", "}", "[", "]", ";", ":", "'", '"', "\\", "|", "<", ">", ".", "?", "/"
]

export const CHARACTER_ARRAY_FOR_NUMBER_INPUT = [
    "e", "E", "-", "+", "."
]

/*
*  truncate text input beyond given bounds
* */
export const truncate = (input, limit) => input.length > limit ? `${input.substring(0, limit)}...` : input;
