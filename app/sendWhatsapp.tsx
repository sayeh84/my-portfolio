'use client'

import { useState } from 'react'

export default function SendWhatsAppPage() {
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  async function sendWhatsApp() {
    if (!message.trim()) {
      setFeedback('Skriv ett meddelande först!')
      return
    }

    const res = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: '+46733514861',
        message: message,
      }),
    })

    const data = await res.json()
    setFeedback('WhatsApp skickat!')
  }

  const isSuccess = feedback.includes('skickat')

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Skicka WhatsApp</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Skriv ditt meddelande här..."
        className="w-full h-32 p-3 border rounded-md"
      />

      <button
        onClick={sendWhatsApp}
        className="mt-5 px-5 py-2 border border-black rounded-md hover:bg-gray-100 transition"
      >
        Skicka WhatsApp
      </button>

      {feedback && (
        <div
          className={`mt-5 p-3 rounded-md font-bold border transition ${
            isSuccess
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  )
}
