'use client'

import { useState } from 'react'
import SendEmail from './sendEmail'
import SendWhatsapp from './sendWhatsapp'

export default function ContactSection() {
  const [selected, setSelected] = useState('email')

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Kontaktmig</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelected('whatsapp')}
          className={`px-4 py-2 rounded font-semibold ${
            selected === 'whatsapp' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          WhatsApp
        </button>
        <button
          onClick={() => setSelected('email')}
          className={`px-4 py-2 rounded font-semibold ${
            selected === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          E-mail
        </button>
      </div>

      {selected === 'whatsapp' && <SendWhatsapp />}
      {selected === 'email' && <SendEmail />}
    </div>
  )
}
