import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().max(50).required("please enter name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  password: yup
    .string()
    .min(6, "minimum 6 characters")
    .max(20, "maximum 20 characters")
    .required(),
  password_confirmation: yup
    .string()
    .min(6, "minimum 6 characters")
    .max(20, "maximum 20 characters")
    .oneOf([yup.ref("password")], "Confirm Password not matched")
    .required(),
  phoneNumber: yup
    .string()
    .required(),
  // date: yup.date().required("enter date"),
  city: yup.string().max(20).required("please enter city"),
  state: yup.string().max(20).required("please enter state"),
  gender: yup.string().required("please select gender"),
  institution: yup
    .string()
    .max(50, "maximum 50 characters")
    .required("please enter institution name"),
  isKiitStudent: yup.boolean(),
  rollNumber: yup.string().when("isKiitStudent", {
    is: true,
    then: () =>
      yup
        .string()
        .max(20, "Maximum 20 characters")
        .required("Please enter Roll Number"),
    otherwise: () => yup.string(),
  }),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter email"),
  password: yup
    .string()
    .min(6, "minimum 6 characters")
    .max(20, "maximum 20 characters")
    .required(),
});

export const issueSchema = yup.object({
  name: yup.string().max(50).required("please enter name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter email"),
  subject: yup
    .string()
    .max(20, "Max 20 characters")
    .required("Please enter a subject"),

  issue: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Please describe your issue"),
});
