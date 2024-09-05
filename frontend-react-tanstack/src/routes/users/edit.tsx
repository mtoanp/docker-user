import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/edit")({
  component: () => <div>Hello /users/edit!</div>,
});
