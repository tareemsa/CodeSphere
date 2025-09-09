// src/app/ai/page.tsx
'use client'
import React from 'react'

const services = [
  { title: 'Data Analysis & Feature Engineering', desc: 'Clean, transform, and explore your data using Pandas and NumPy to extract meaningful features that power accurate models and clear business insights.', tools: ['Pandas', 'NumPy'] },
  { title: 'Classification', desc: 'We build supervised models to categorize data — spam detection, image labeling, customer segmentation — using Scikit-learn, TensorFlow, or PyTorch.', tools: ['Scikit-learn', 'TensorFlow', 'PyTorch'] },
  { title: 'Clustering & Unsupervised Learning', desc: 'Discover hidden structures in your data (customer groups, behavior patterns) using K-Means, DBSCAN, hierarchical clustering via Scikit-learn.', tools: ['Scikit-learn'] },
  { title: 'Time Series Forecasting', desc: 'Predict sales, stock prices, or demand with RNN/LSTM models and classical approaches (ARIMA, Prophet).', tools: ['TensorFlow', 'PyTorch', 'ARIMA', 'Prophet'] },
  { title: 'Sentiment Analysis & Text Classification', desc: 'Analyze reviews and social media to extract opinions and trends using spaCy, Transformers, and fine-tuned models.', tools: ['spaCy', 'Transformers'] },
  { title: 'Language Modeling & Text Generation', desc: 'Autocomplete, content generation, and smarter writing assistants powered by transformer-based models.', tools: ['Transformers'] },
  { title: 'Music & Sequence Generation', desc: 'Generate melodies and sequential patterns using RNN/LSTM/GRU architectures.', tools: ['TensorFlow', 'PyTorch'] },
  { title: 'Chatbots & Virtual Assistants', desc: 'Context-aware conversational agents for customer service and automation.', tools: ['TensorFlow', 'PyTorch'] },
  { title: 'Speech Recognition & Audio Analysis', desc: 'Convert voice to text and extract insights from audio data.', tools: ['TensorFlow', 'PyTorch'] },
  { title: 'Data Visualization & Reporting', desc: 'Turn results into actionable dashboards and visual reports with Matplotlib, Seaborn, or dashboard tools.', tools: ['Matplotlib', 'Seaborn'] },
]

export default function AIPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">AI Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our AI services designed to help your business leverage the power of data and machine learning. Each service comes with the tools and techniques needed for actionable insights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-700 mb-4">{s.desc}</p>
              {s.tools && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Tools:</span> {s.tools.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
