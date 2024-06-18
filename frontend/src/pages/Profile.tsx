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
        <div className="flex flex-col gap-5 place-items-center justify-center text-center">
          <div className="text-3xl font-semibold">Profile page</div>
          <div className="">Your Username : {user.username}</div>
          <div className="">Your User id : {user._id}</div>
        </div>
      </div>
    );
  }
};
