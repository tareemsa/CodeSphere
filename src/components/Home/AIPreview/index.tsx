// src/components/Home/AIPreview/index.tsx
import Link from 'next/link'
import React from 'react'

const services = [
  { title: 'Data Analysis', short: 'Feature engineering & insights' },
  { title: 'Classification', short: 'Image & text classifiers' },
  { title: 'Chatbots', short: 'Smart conversational assistants' },
]

export default function AIPreview() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900/5 to-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-primary font-semibold">AI Services We Offer</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white/90 mt-3">
            Boost your product with AI-powered features
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-300 mt-3">
            Integrate features like data analysis, classification models, chatbots, speech, and more — shipped as part of your web or mobile project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="bg-dark_grey/80 p-6 rounded-xl text-center">
              <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white font-bold">
                {s.title.split(' ').map(w=>w[0]).join('').toUpperCase()}
              </div>
              <h4 className="text-white font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-300 text-sm">{s.short}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
