import { Navbar } from "../components/Navbar"


export const Signin = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[93%] w-screen bg-neutral-100 flex flex-col justify-center place-items-center gap-7 ">
        <div className=" bg-white py-16 px-12 flex flex-col justify-center place-items-center gap-7 rounded-2xl shadow-xl">
          <input className="w-[100%] py-3 px-5 outline-none rounded-md bg-neutral-100 shadow-sm" id="username" placeholder="username"/>
          <input className="w-[100%] py-3 px-5 outline-none rounded-md bg-neutral-100 shadow-sm" id="password" type="password" placeholder="password"/>
          <button className="w-[100%] py-3 px-6 bg-sky-100 text-black rounded-xl shadow-sm"> Submit </button>
        </div>
      </div>
    </div>
  )
}
