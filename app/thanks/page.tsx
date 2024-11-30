import Image from 'next/image'


export default async function Thanks() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <Image
        src="/images/bg.webp"
        alt="Fondo navideño con luces y decoraciones"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="bg-white bg-opacity-80 rounded-lg shadow-xl p-10 max-w-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
        <h1 className="text-6xl font-bold text-red-700 mb-6 font-christmas">¡Gracias por tu solicitud navideña!</h1>
        <p className="text-4xl text-green-800 mb-8 font-christmas">
          Tu carta para Santa ha sido recibida con mucha alegría. Los elfos ya están trabajando en tu regalo especial.
          ¡Que la magia de la Navidad llene tu corazón de felicidad y tus días de sonrisas!
        </p>
        <div className="flex justify-center space-x-4">
          <span className="text-5xl">🎄</span>
          <span className="text-5xl">🎁</span>
          <span className="text-5xl">🦌</span>
        </div>
      </div>
    </div>
  )
}

