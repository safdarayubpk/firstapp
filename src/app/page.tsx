import AboutPage from "@/components/markupWithJsx";
import MyButton from "@/components/myButton";
import Link from "next/link";


import React from 'react'

function MyButton2(){
  return(
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
        Click me 2
    </button>
  )
}

export default function Home() {
  return (
    <main>
      <Link href="/blog">Blog</Link><br />
      <Link href="/react_learning">React Learning</Link>
      <br />
      <MyButton />
      <br />
      <br/>

      <MyButton2/>
      <br/>

      <div>
        <AboutPage />
      </div>

      <div className="text-red-500">Adding styls
      <p className="text-blue-500 font-mono size-5">Hello</p>
      </div>

    </main>
  )
}
