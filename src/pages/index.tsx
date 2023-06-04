import Image from 'next/image'
import { Inter } from 'next/font/google'
import StarsCanvas from './Stars'
import WorldTemperatureMap from './WorldTemperatureMap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
      <p className="alien-title text-center tracking-wider shadow-neon mb-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quas autem dolore nobis ea hic libero tempore, commodi consequatur earum, fugit fugiat adipisci, voluptatem recusandae?
      </p>

      <StarsCanvas />
      <WorldTemperatureMap />
    </main>
  )
}
