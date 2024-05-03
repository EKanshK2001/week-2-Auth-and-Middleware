import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface userInterface {
  _id?: string,
  username : string,
  email: string,
  password: string,
  pages: string[],
}

export const Profile = () => {
  
  // so when we talk to the backend to fetch the logged in user's data
  // on this profile page, we are asking them that information,
  // with the token attached in the header to the profile route api
  // and we just want that user id to be reflected on the url as a param for navbar page to use

  // const { userId } = useParams()
  // console.log(userId);
  // console.log(localStorage.getItem('Authorization'));

  const [user, setUser] = useState<userInterface>({
    _id: '',
    username : '',
    email: '',
    password: '',
    pages: [],
  })
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/user/profile/", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVrYW5zaCIsImVtYWlsIjoic29tZXRoaW5nQGdtYWlsLmNvbSIsIl9pZCI6IjY2MzMyNWM5YmQzMGUwOTRlYmIyNGZhMiIsImlhdCI6MTcxNDYyODE0NX0.skufBtuu22oKBD9ssTXEhpFuWz1IA7Plt8CysRlJUdc"
      }
    })
      .then((response) => {
      setUser(response.data);
    })
    
  }, [])

  // if (user) {
  //   console.log(user);
  // }

  if (user) {
    return (
      <div className="">
        <div className="">{user._id}</div>
        <div className="">{user.username}</div>
        <div className="">{user.email}</div>
        <div className="">{user.password}</div>
        {/* <div className="">{user.pages.map((page) => <div>{page}</div>)}</div> */}
      </div>
    )
  }
}




