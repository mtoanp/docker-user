import { createFileRoute } from "@tanstack/react-router";
import { Users } from "../../pages";

export const Route = createFileRoute("/users/")({
  component: Users,
});
