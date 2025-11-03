import { Metadata } from "next"
import HomeView from "@/views/home"

export const metadata: Metadata = {
  title: "Tokoo"
}

export default function HomePage() {
  return (
    <HomeView />
  )
}
