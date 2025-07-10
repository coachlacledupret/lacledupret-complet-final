'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Star, Users, Calendar, Download } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: '95%', label: 'Dossiers acceptés', icon: TrendingUp },
    { value: '0.2%', label: 'Taux négociés', icon: Shield },
    { value: '4.9/5', label: 'Satisfaction client', icon: Star },
    { value: '500+', label: 'Projets accompagnés', icon: Users },
  ]

  // Fonction pour scroller vers le formulaire de capture d'emails
  const handleScrollToForm = () => {
    const leadMagnetSection = document.getElementById('lead-magnet')
    if (leadMagnetSection) {
      // Scroll smooth vers la section lead magnet
      leadMagnetSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
      
      // Ajouter un effet visuel pour attirer l'attention sur le formulaire
      setTimeout(() => {
        const formElement = leadMagnetSection.querySelector('form')
        if (formElement) {
          // Ajouter une classe pour un effet de highlight temporaire
          formElement.classList.add('highlight-form')
          
          // Supprimer la classe après l'animation
          setTimeout(() => {
            formElement.classList.remove('highlight-form')
          }, 2000)
        }
      }, 800) // Délai pour laisser le temps au scroll de se terminer
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#005f9e] via-[#1e5f8b] to-[#2e8b57] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <span className="inline-block bg-yellow-400 text-[#005f9e] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Coach Expert en Financement
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Devenez Propriétaire
                <span className="text-yellow-400"> Sans Stress.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Votre prêt immobilier, simplifié et optimisé par un expert. 
                Économisez du temps et des milliers d'euros.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 items-center sm:items-start">
              {/* Bouton Principal - Réserver une Consultation */}
              <a 
                href="https://calendly.com/contact-coachlacledupret" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#005f9e] bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 transform hover:scale-105 focus:outline-none focus:ring-3 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#005f9e] min-h-[58px] w-full sm:w-auto sm:flex-1 max-w-sm mx-auto sm:mx-0"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Réserver une Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Bouton Secondaire - Guide Gratuit */}
              <button 
                onClick={handleScrollToForm}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent hover:bg-white/10 rounded-xl border-2 border-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 transform hover:scale-105 focus:outline-none focus:ring-3 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#005f9e] min-h-[58px] w-full sm:w-auto sm:flex-1 max-w-sm mx-auto sm:mx-0"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Télécharger le Guide Gratuit</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Premier échange gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Partout en France</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-center">Résultats Prouvés</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#005f9e]" />
                      </div>
                      <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}