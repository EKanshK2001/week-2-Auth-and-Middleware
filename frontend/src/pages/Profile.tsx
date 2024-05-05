import { useRecoilValue } from "recoil";
import { Navbar } from "../components/Navbar";
import { userAtom } from "../store/atoms/userAtom";


export const Profile = () => {
  
  const user = useRecoilValue(userAtom);


  if (!user._id) {
    return (
      <div>
        <Navbar />
        <div>Please Sign in</div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="">
          <div className="">{user._id}</div>
          <div className="">{user.username}</div> 
        </div>
      </div>
    );
  }
};
