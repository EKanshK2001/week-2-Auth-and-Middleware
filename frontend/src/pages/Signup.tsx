import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"

interface IformData { 
  username: string, 
  email: string, 
  password: string,
}

export const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<IformData>({ username: "", email: "", password: ""})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({...prevFormData, [e.target.id]: e.target.value}));
  }

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      
      if (response.status != 200) {
        console.log("database might be down, try again");
      }

      if (response.status == 200) {
        navigate('/signin');
      }
    } catch (error) {
      console.log("error when pinging backend");
      
    }
  }
  

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[93%] w-screen bg-neutral-100 flex flex-col  justify-center place-items-center gap-7 ">
        <div className="bg-white py-16 px-14 flex flex-col justify-center place-items-center gap-7 rounded-2xl shadow-xl">
          <input onChange={handleChange} className="w-[100%] py-3 px-5 outline-none rounded-md bg-neutral-100 shadow-sm" id="username" placeholder="username"/>
          <input onChange={handleChange} className="w-[100%] py-3 px-5 outline-none rounded-md bg-neutral-100 shadow-sm" id="email" placeholder="email@gmail.com"/>
          <input onChange={handleChange} className="w-[100%] py-3 px-5 outline-none rounded-md bg-neutral-100 shadow-sm" id="password" type="password" placeholder="password"/>
          <button onClick={handleSubmit} type='submit' className="w-[100%] py-3 px-6 bg-sky-100 text-black rounded-xl shadow-sm"> Submit </button>
        </div>
      </div>
    </div>
  )
}
