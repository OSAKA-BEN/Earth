import Image from 'next/image'
import { Inter } from 'next/font/google'
import StarsCanvas from './Stars'
import WorldTemperatureMap from './WorldTemperatureMap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>

      <div className="navbar bg-base-100 z-[1] mb-4 bg-transparent">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>

      <p className="alien-title text-center tracking-wider shadow-neon mb-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quas autem dolore nobis ea hic libero tempore, commodi consequatur earum, fugit fugiat adipisci, voluptatem recusandae?
      </p>

      <StarsCanvas />
      <WorldTemperatureMap />
    </main>
  )
}
