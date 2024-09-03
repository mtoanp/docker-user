import "./UserDetails.scss";

import { getRouteApi } from "@tanstack/react-router";
const route = getRouteApi("/users/$userId");

function UserDetails() {
  const { userId } = route.useParams();
  return (
    <div>
      <h1>UserDetails {userId}</h1>
    </div>
  );
}

export default UserDetails;
