'use client'

import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
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

    const element = document.getElementById('testimonials-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: 'Marie et Thomas L.',
      project: 'Achat résidence principale - 280 000€',
      text: 'Nicolas nous a accompagnés de A à Z dans notre projet d\'achat. Grâce à ses conseils, nous avons obtenu un taux à 3,2% alors que notre banque nous proposait initialement 3,8%. Son expertise nous a fait économiser plus de 4 000€ sur la durée du prêt !',
      rating: 5,
      location: 'Lyon'
    },
    {
      name: 'Julien M.',
      project: 'Investissement locatif - 180 000€',
      text: 'En tant que primo-investisseur, j\'étais perdu dans les démarches. Nicolas m\'a expliqué toutes les étapes, optimisé mon dossier et m\'a aidé à négocier les conditions. Résultat : financement accepté en 3 semaines !',
      rating: 5,
      location: 'Marseille'
    },
    {
      name: 'Sophie R.',
      project: 'Rachat de crédit + travaux - 320 000€',
      text: 'Situation complexe avec plusieurs crédits en cours. Nicolas a trouvé la solution parfaite pour regrouper nos dettes et financer nos travaux. Un vrai professionnel, à l\'écoute et très réactif.',
      rating: 5,
      location: 'Toulouse'
    }
  ]

  return (
    <section id="testimonials-section" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#2e8b57] font-semibold text-lg">Témoignages</span>
          <h2 className="text-4xl font-bold text-[#005f9e] mt-2 mb-6">
            Ils Me Font Confiance
          </h2>
          <p className="text-[#6e7b8b] text-lg leading-relaxed">
            Découvrez les retours de mes clients qui ont réussi leur projet immobilier 
            grâce à un accompagnement personnalisé.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-[#2e8b57] rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#6e7b8b] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-[#005f9e] mb-1">{testimonial.name}</h4>
                <p className="text-sm text-[#6e7b8b] mb-1">{testimonial.project}</p>
                <p className="text-xs text-[#2e8b57] font-medium">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#2e8b57] mb-2">500+</div>
                <div className="text-[#6e7b8b]">Clients Accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2e8b57] mb-2">95%</div>
                <div className="text-[#6e7b8b]">Dossiers Acceptés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2e8b57] mb-2">4.9/5</div>
                <div className="text-[#6e7b8b]">Satisfaction Client</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2e8b57] mb-2">8+</div>
                <div className="text-[#6e7b8b]">Années d'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}