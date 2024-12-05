import { sql } from "@vercel/postgres";
import { redirect } from 'next/navigation'
import { Bell, Gift, ShoppingBag } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ChristmasForm() {

  const handleSubmit = async (formData: FormData) => {
    'use server';
    const data = Object.fromEntries(formData) as { name: string, description: string, purchaseUrl: string }
    const { name, description, purchaseUrl } = data
    const { rows } = await sql`
      INSERT INTO regalos_navidad (destinatario, descripcion, url)
      VALUES (${name}, ${description}, ${purchaseUrl})
    `
    if (!rows) {
      throw new Error('No se pudo enviar el regalo')
    }
    redirect('/thanks');
  }

  return (
    <form action={handleSubmit} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-green-700 font-bold mb-2 flex items-center">
          <Gift className="mr-2" />
          Para quién es el regalo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Ej: Thomas"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-green-700 font-bold mb-2 flex items-center">
          <Bell className="mr-2" />
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Ej:Talla M, color rojo etc..."
        ></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="purchaseUrl" className="block text-green-700 font-bold mb-2 flex items-center">
          <ShoppingBag className="mr-2" />
          URL de Compra
        </label>
        <input
          id="purchaseUrl"
          name="purchaseUrl"
          className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="https://ejemplo.com/regalo-navideño"
        />
      </div>
      <Alert className="mb-4 bg-green-100 border-green-400 text-green-700">
        <AlertDescription className="flex items-center">
          <Gift className="mr-2" />
          <span>El valor máximo del regalo es de $60.000 CLP</span>
        </AlertDescription>
      </Alert>
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Enviar Regalo
      </button>
    </form>
  )
}

