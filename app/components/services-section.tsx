'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MessageSquare, Calendar, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function ServicesSection() {
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

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: CheckCircle,
      title: 'Premier Contact',
      price: 'Gratuit',
      duration: '15 min',
      description: 'Entretien téléphonique gratuit pour comprendre votre projet et vos besoins.',
      features: [
        'Écoute de votre projet',
        'Première évaluation',
        'Conseils immédiats',
        'Sans engagement'
      ],
      cta: 'Appeler Maintenant',
      href: 'tel:0618461094',
      popular: false,
      color: 'border-gray-300'
    },
    {
      icon: MessageSquare,
      title: 'Stratégie Initiale',
      price: '100€',
      originalPrice: null,
      duration: '1h visio',
      description: 'Diagnostic complet et élaboration d\'une stratégie de financement personnalisée.',
      features: [
        'Analyse de votre situation',
        'Stratégie sur mesure',
        'Recommandations concrètes',
        'Compte-rendu écrit',
        'Plan d\'action détaillé'
      ],
      cta: 'Réserver',
      href: 'https://calendly.com/contact-coachlacledupret',
      popular: false,
      color: 'border-[#2e8b57]'
    },
    {
      icon: Calendar,
      title: 'Accompagnement Complet',
      price: '290€',
      originalPrice: '390€',
      duration: 'Suivi total',
      description: 'Accompagnement intégral avec optimisation du dossier et suivi bancaire.',
      features: [
        'Tout de la "Stratégie Initiale"',
        'Optimisation complète du dossier',
        'Accompagnement bancaire',
        'Conseils en négociation',
        'Suivi continu',
        'Assistance email/téléphone'
      ],
      cta: 'Commencer',
      href: 'https://calendly.com/contact-coachlacledupret',
      popular: true,
      color: 'border-[#005f9e]'
    }
  ]

  return (
    <section id="services-section" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#2e8b57] font-semibold text-lg">Mes Services</span>
          <h2 className="text-4xl font-bold text-[#005f9e] mt-2 mb-6">
            Un Accompagnement Adapté à Vos Besoins
          </h2>
          <p className="text-[#6e7b8b] text-lg leading-relaxed">
            De la simple consultation à l'accompagnement complet, choisissez la formule 
            qui correspond à votre projet et à votre budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 ${service.color} hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Badge populaire */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-[#005f9e] px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Le Plus Populaire</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#2e8b57] to-[#005f9e] rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#005f9e] mb-2">{service.title}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-[#2e8b57]">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                    <span className="text-[#6e7b8b]">TTC</span>
                  </div>
                  <p className="text-[#6e7b8b] text-sm mt-1">{service.duration}</p>
                </div>

                {/* Description */}
                <p className="text-[#6e7b8b] mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2e8b57] mt-0.5 flex-shrink-0" />
                      <span className="text-[#6e7b8b] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {service.href.startsWith('tel:') ? (
                  <a
                    href={service.href}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                      service.popular
                        ? 'bg-gradient-to-r from-[#2e8b57] to-[#005f9e] text-white hover:shadow-lg'
                        : 'bg-gray-100 text-[#005f9e] hover:bg-gray-200'
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                      service.popular
                        ? 'bg-gradient-to-r from-[#2e8b57] to-[#005f9e] text-white hover:shadow-lg'
                        : 'bg-gray-100 text-[#005f9e] hover:bg-gray-200'
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-[#005f9e] to-[#2e8b57] rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pas Sûr de Votre Choix ?</h3>
            <p className="text-blue-100 mb-6">
              Discutons de votre projet lors d'un entretien téléphonique gratuit de 15 minutes.
              Je vous conseillerai sur l'approche la mieux adaptée à votre situation.
            </p>
            <a
              href="tel:0618461094"
              className="btn-secondary inline-flex items-center group"
            >
              📞 Appel Gratuit Maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}