'use client'

import { useRouter } from "next/navigation"

export default function NavBar() {
  const page = ["Home", "Members", "Course"]
  const router = useRouter()

  function ToPage(targetPage: string) {
    if (targetPage === "Home") {
      router.push('/')
    } else {
      router.push(`/${targetPage}`)
    }
  }

  return (
    <nav className="w-full h-[70px] bg-zinc-400 border-b border-gray-200 flex justify-between items-center px-8 sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-wide text-gray-900">
        LIABSI
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-8">
        {page.map((item, index) => (
          <JumpButton key={index} text={item} ToPage={ToPage} />
        ))}
      </div>

    </nav>
  )
}

interface JumpButtonProps {
  text: string,
  ToPage: (targetPage: string) => void
}

function JumpButton({ text, ToPage }: JumpButtonProps) {
  return (
    <div
      onClick={() => ToPage(text)}
      className="relative cursor-pointer text-gray-800 hover:text-white transition duration-300"
    >
      {text}

      {/* underline hover 動畫 */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </div>
  )
}