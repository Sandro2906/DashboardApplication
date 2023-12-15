import Link from "next/link";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
  <div className="w-full h-screen flex justify-center items-center">
      <Link href='/dashboard' className="w-[150px] h-auto p-4 bg-purple-600 rounded-md flex justify-center items-center shadow-md text-white">GO TO APP</Link>
  </div>
  )
}
