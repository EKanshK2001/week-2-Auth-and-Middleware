import { useRecoilValue } from "recoil";
import { Navbar } from "../components/Navbar";
import { userAtom } from "../store/atoms/userAtom";

export const Home = () => {
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
          <div className="text-3xl font-semibold">Home page</div>
          <div className="">Your username is : {user.username}</div>
          <div className="">
            <span>You own the following pages with the ids :</span>
            {user.pages.map((page: string) => (
              <div key={page}> {page}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
