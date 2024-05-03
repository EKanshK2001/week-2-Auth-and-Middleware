import { Outlet, useParams } from "react-router-dom";

// interface propsInt {

// }

export const NavbarAndPages = () => {
  // const params = new URLSearchParams(this.props.match.params.id);
  const { userId } = useParams();
  console.log(userId);

  if (!userId) {
    return (
      <div>
        <div className="bg-red-100">navbar</div> 
        User doesn't exist
      </div>
    );
  } else {
    return (
      <div>
        <div className="bg-red-100">navbar</div>

        <Outlet />
      </div>
    );
  }
};
