'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export default function ContactSection() {
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

    const element = document.getElementById('contact-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    'Premier échange téléphonique gratuit (15 min)',
    'Réponse sous 24h maximum',
    'Accompagnement partout en France',
    'Consultation en visioconférence'
  ]

  return (
    <section id="contact-section" className="section-padding bg-gradient-to-br from-[#005f9e] to-[#2e8b57] text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="mb-8">
              <span className="text-yellow-400 font-semibold text-lg">Prêt à Commencer ?</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                Parlons de Votre Projet Immobilier
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Que vous soyez primo-accédant, investisseur ou en recherche d'un rachat de crédit, 
                je vous accompagne pour concrétiser votre projet dans les meilleures conditions.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#005f9e]" />
                </div>
                <div>
                  <div className="font-semibold">Appelez-moi directement</div>
                  <a href="tel:0618461094" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    06 18 46 10 94
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#005f9e]" />
                </div>
                <div>
                  <div className="font-semibold">Écrivez-moi</div>
                  <a href="mailto:contact@coachlacledupret.fr" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    contact@coachlacledupret.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#005f9e]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Consultation Gratuite</h3>
                <p className="text-blue-100 leading-relaxed">
                  Discutons de votre projet lors d'un entretien téléphonique de 15 minutes. 
                  C'est gratuit et sans engagement.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:0618461094"
                  className="w-full bg-yellow-400 text-[#005f9e] py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center group"
                >
                  📞 Appeler Maintenant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="text-center text-blue-200 text-sm">ou</div>
                
                <a
                  href="https://calendly.com/contact-coachlacledupret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-transparent border-2 border-white text-white py-4 px-6 rounded-lg font-semibold hover:bg-white hover:text-[#005f9e] transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center group"
                >
                  📅 Réserver un Créneau
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-6 text-center">
                <p className="text-blue-200 text-sm">
                  Disponible du lundi au vendredi, 9h-18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}