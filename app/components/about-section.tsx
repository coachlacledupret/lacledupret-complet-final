'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Award, TrendingUp, Clock } from 'lucide-react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const strengths = [
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: 'Plus de 8 ans d\'expérience dans le financement immobilier et l\'accompagnement de particuliers.'
    },
    {
      icon: TrendingUp,
      title: 'Résultats Concrets',
      description: '95% de dossiers acceptés grâce à une méthodologie éprouvée et une préparation minutieuse.'
    },
    {
      icon: Clock,
      title: 'Gain de Temps',
      description: 'Évitez les refus bancaires et les allers-retours. J\'optimise votre dossier dès le départ.'
    }
  ]

  return (
    <section id="about-section" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo et présentation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#005f9e] to-[#2e8b57] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/nicofinal.png"
                  alt="Nicolas Szeferowicz - Coach en Financement Immobilier"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">Nicolas SZEFEROWICZ</h3>
                  <p className="text-white/80">Coach en Financement Immobilier</p>
                </div>
              </div>
              
              {/* Badges flottants */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-[#005f9e] px-4 py-2 rounded-full font-bold text-sm">
                500+ Clients
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#2e8b57] text-white px-4 py-2 rounded-full font-bold text-sm">
                8+ Ans d'Exp.
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="mb-8">
              <span className="text-[#2e8b57] font-semibold text-lg">À Propos de Moi</span>
              <h2 className="text-4xl font-bold text-[#005f9e] mt-2 mb-6">
                Votre Expert en Financement Immobilier
              </h2>
              <p className="text-[#6e7b8b] text-lg leading-relaxed">
                Nicolas Szeferowicz, votre coach expert. Fort d'une expérience de plus de 8 ans dans le financement immobilier, 
                ma mission est de démystifier le processus d'obtention de prêt pour vous. Je vous accompagne à chaque étape 
                pour construire un dossier solide, négocier les meilleures conditions et faire de votre projet immobilier 
                une réussite sereine.
              </p>
            </div>

            {/* Points forts */}
            <div className="space-y-6">
              {strengths.map((strength, index) => {
                const Icon = strength.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2e8b57] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#005f9e] mb-2">
                        {strength.title}
                      </h3>
                      <p className="text-[#6e7b8b]">{strength.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Informations légales */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-[#005f9e] mb-1">Informations Légales</h4>
                  <p className="text-[#6e7b8b]">SIRET : 751 600 081</p>
                  <p className="text-[#6e7b8b]">Entrepreneur individuel</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#005f9e] mb-1">Zone d'Intervention</h4>
                  <p className="text-[#6e7b8b]">Partout en France</p>
                  <p className="text-[#6e7b8b]">En visioconférence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}