import { getServerSession } from "next-auth"
import LoginForm from "./LoginForm"
import { redirect } from "next/navigation"

const Login = async() => {
  const session = await getServerSession()
  if(session){
    redirect('/dashboard')
  }
  return <LoginForm/>
}

export default Login