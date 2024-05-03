import { Outlet, useParams } from "react-router-dom";

export const NavbarAndPages = () => {
  // const { userId } = useParams();
  // console.log(userId);

  // if (!userId) {
  //   return (
  //     <div>
  //       <div className="bg-red-100">navbar</div> 
  //       User doesn't exist
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div className="bg-red-100">navbar</div>

  //       <Outlet />
  //     </div>
  //   );
  // }
  return (
    <div>
      <div className="bg-red-100">navbar</div>

      <Outlet />
    </div>
  );
};
