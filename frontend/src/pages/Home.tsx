import { useRecoilValue } from "recoil";
import { Navbar } from "../components/Navbar";
import { userAtom } from "../store/atoms/userAtom";

export const Home = () => {

  const user = useRecoilValue(userAtom);

  return (
    <div>
      <Navbar />
      Home
      <div className="">{user.username}</div>
      <div className="">{user.pages.map((page:string) => (<div key={page}> {page}</div>))}</div>
      
    </div>
  );
};