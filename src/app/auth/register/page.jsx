import { getServerSession } from "next-auth"
import RegisterForm from "./RegisterForm"
import { redirect } from "next/navigation"

const Register = async() => {
  const session = await getServerSession()
  if(session){
    redirect('/dashboard')
  }
  return <RegisterForm/>
}

export default Register