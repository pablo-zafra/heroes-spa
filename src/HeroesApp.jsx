import React from "react"
import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./ui/components/NavBar"
import { AuthProvider } from "./auth"


export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
