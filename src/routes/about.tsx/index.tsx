import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/about/tsx/')({ component: About })


export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-6">About TanStack Router</h1>
      <p className="max-w-2xl text-center text-lg">
        TanStack Router is a powerful, flexible, and type-safe routing solution for modern web applications. It seamlessly integrates with your existing stack, providing a robust foundation for building scalable and maintainable applications.
      </p>
    </div>
  )
}