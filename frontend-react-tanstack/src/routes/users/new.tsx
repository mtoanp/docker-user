import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/new')({
  component: () => <div>Hello /users/users/new!</div>
})