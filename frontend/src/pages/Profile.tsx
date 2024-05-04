import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
// import { useParams } from "react-router-dom";

interface IUser {
  _id?: string;
  username: string;
  pages: string[];
}

export const Profile = () => {
  // so when we talk to the backend to fetch the logged in user's data
  // on this profile page, we are asking them that information,
  // with the token attached in the header to the profile route api
  // and we just want that user id to be reflected on the url as a param for navbar page to use

  // const { userId } = useParams()
  // console.log(userId);
  // console.log(localStorage.getItem('Authorization'));

  const [user, setUser] = useState<IUser>({
    _id: "",
    username: "",
    pages: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/profile/", {
        headers: {
          Authorization: localStorage.getItem("Authorizaiton"),
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);


  // if (user) {
  //   console.log(user);
  // }

  if (user) {
    return (
      <div>
        <Navbar />
        <div className="">
          <div className="">{user._id}</div>
          <div className="">{user.username}</div>
          {/* <div className="">{user.pages.map((page) => <div>{page}</div>)}</div> */}
        </div>
      </div>
    );
  }
};
