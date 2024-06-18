import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/atoms/userAtom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  const handleLogout = () => {
    localStorage.removeItem("Authorizaiton");
    localStorage.removeItem("recoil-persist");
    setUser({});
    navigate('/user/signin');
    alert("you're now logged out!");
  };

  return (
    <div className="w-full p-5 bg-red-200 flex justify-between px-16">
      <div className="cursor-pointer font-semibold text-xl" onClick={() => {navigate('/')}}> navbar </div>
        {
          user._id
          ? <div className="flex gap-10"><div className="py-2 px-6 border-4 cursor-pointer" onClick={() =>navigate('/user')}> {user.username} </div> <Button text="Logout" onClick={handleLogout} /></div>
          : <div><Button text="Login" onClick={() => {navigate("/user/signin");}} /></div>
        } 
    </div>
  );
};
