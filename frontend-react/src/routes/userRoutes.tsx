import { UserList, NewUser, EditUser, UserDetails } from "../pages";

export const userRoutes = [
  { path: "users", element: <UserList /> },
  { path: "users/new", element: <NewUser /> },
  { path: "users/:id", element: <UserDetails /> },
  { path: "users/:id/edit", element: <EditUser /> },
];
