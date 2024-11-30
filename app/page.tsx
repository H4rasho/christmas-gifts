import ChristmasForm from '../components/ChristmasForm'
import SnowfallEffect from '../components/SnowfallEffect'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1543589077-47d81606c1bf"
        alt="Fondo navideño con luces y decoraciones"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="min-h-screen bg-black bg-opacity-50 relative z-10">
        <SnowfallEffect />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-6xl font-bold text-red-600 text-center mb-8 font-christmas drop-shadow-lg">
            ¡Feliz Navidad!
          </h1>
          <ChristmasForm />
        </div>
      </div>
    </main>
  )
}

