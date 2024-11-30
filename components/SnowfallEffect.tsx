'use client'

import { useEffect } from 'react'

export default function SnowfallEffect() {
  useEffect(() => {
    const snowfall = () => {
      const snowflake = document.createElement('div')
      snowflake.classList.add('snowflake')
      snowflake.style.left = `${Math.random() * window.innerWidth}px`
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s` // Aumentamos la duración de la animación
      snowflake.style.opacity = `${Math.random() * 0.5 + 0.1}` // Reducimos la opacidad
      snowflake.style.fontSize = `${Math.random() * 5 + 5}px` // Reducimos el tamaño
      snowflake.innerHTML = '❄'
      document.body.appendChild(snowflake)

      setTimeout(() => {
        snowflake.remove()
      }, 10000) // Aumentamos el tiempo de vida de cada copo
    }

    const snowfallInterval = setInterval(snowfall, 200)

    return () => clearInterval(snowfallInterval)
  }, [])

  return null
}

