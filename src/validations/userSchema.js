import * as yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const userSchema = yup.object({
    name:yup.string().max(50).required("please enter name"),
    email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter email")
    .test(
      "kiit-email",
      "Please enter a valid KIIT email",
      function (value) {
        const isKiitStudent = this.parent.isKiitStudent;
        if (isKiitStudent) {
          return value.includes("@kiit.ac.in");
        }
        return true;
      }
    ),
    password:yup.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters").required(),
    password_confirmation:yup.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters").oneOf([yup.ref("password")] ,"Confirm Password not matched").required(),
    phoneNumber:yup.string().min(10, "enter correct phone number").max(10, "maximum 10 digits").matches(phoneRegExp, 'Phone number is required').required(),
    // date: yup.date().required("enter date"),
    city:yup.string().max(20).required("please enter city"),
    state:yup.string().max(20).required("please enter state"),
    gender: yup.string().required("please select gender"),
    institution:yup.string().max(50, "maximum 50 characters").required("please enter institution name"),
    isKiitStudent: yup.boolean(),
    rollNumber: yup.string().when("isKiitStudent", {
    is: true,
    then: () => yup.string().max(20, "Maximum 20 characters").required("Please enter Roll Number"),
    otherwise:  () => yup.string()
  }),
})

export const loginSchema = yup.object({
    email:yup.string().email("please enter a valid email").required("please enter email"),
    password:yup.string().min(6, "minimum 6 characters").max(20, "maximum 20 characters").required(),
})