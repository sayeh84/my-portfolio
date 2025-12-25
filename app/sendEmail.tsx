'use client'

import React, { useState } from 'react'

export default function SendEmailPage() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')

  async function sendEmail() {
    if (!subject.trim()) return setFeedback('Du måste ange ett ämne!')
    if (!message.trim()) return setFeedback('Du måste skriva ett meddelande!')

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'sayeh84@hotmail.com',
        subject,
        message,
      }),
    })

    const data = await res.json()
    setFeedback('E-mail skickat!')
  }

  const isSuccess = feedback.includes('skickat')

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Kontakt mig</h1>

      <h1 className="text-2xl font-bold mb-4">Skicka e-mail</h1>

      <input
        type="text"
        placeholder="Ämne"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-3 border rounded-md mb-3"
      />

      <textarea
        placeholder="Meddelande..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full h-32 p-3 border rounded-md"
      />

      <button
        onClick={sendEmail}
        className="mt-5 px-5 py-2 border border-black rounded-md hover:bg-gray-100 transition"
      >
        Skicka e-mail
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
