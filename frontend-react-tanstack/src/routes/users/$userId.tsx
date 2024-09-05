import { createFileRoute } from "@tanstack/react-router";
import { UserDetails } from "../../pages";

export const Route = createFileRoute("/users/$userId")({
  component: UserDetails,
});
