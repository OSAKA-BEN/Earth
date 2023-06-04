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
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-[#0ff] w-full max-w-xs bg-transparent"
          />
          <svg
            className="input-icon w-6 h-6 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Ajoutez le code de l'icône ici */}
          </svg>
        </div>
        <div className="flex-none">
          <div className="avatar m-2">
            <div className="w-10 rounded-full ring ring-[#0ff] ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
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
