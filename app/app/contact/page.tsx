'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    rgpdConsent: false,
    newsletterConsent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Vérifier le consentement RGPD obligatoire
    if (!formData.rgpdConsent) {
      alert('Vous devez accepter la politique de confidentialité pour envoyer votre message.')
      return
    }
    
    // Créer le contenu de l'email
    const subject = encodeURIComponent(`Demande de contact - ${formData.projectType || 'Projet immobilier'}`)
    const body = encodeURIComponent(`Bonjour Nicolas,\n\nJe souhaite vous contacter concernant mon projet immobilier.\n\nMes coordonnées :\n- Nom : ${formData.name}\n- Email : ${formData.email}\n- Téléphone : ${formData.phone}\n- Type de projet : ${formData.projectType}\n\nMessage :\n${formData.message}\n\nCordialement,\n${formData.name}`)
    
    // Ouvrir le client email
    window.location.href = `mailto:contact@coachlacledupret.fr?subject=${subject}&body=${body}`
    
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-md mx-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Message envoyé !</h2>
          <p className="text-[#6e7b8b] mb-6">
            Votre client email s'est ouvert avec votre message pré-rempli. 
            Envoyez-le pour que je puisse vous répondre rapidement.
          </p>
          <div className="space-y-3">
            <Link 
              href="/"
              className="block bg-[#1f4e79] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a4068] transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link 
              href="https://calendly.com/contact-coachlacledupret"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#2e8b57] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#267a4d] transition-colors"
            >
              Ou prendre RDV directement
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Contactez-Moi
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Parlons de votre projet immobilier. Je vous accompagne pour obtenir 
              le meilleur financement possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f4e79] mb-8">Mes Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2e8b57] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f4e79] mb-1">Téléphone</h3>
                    <p className="text-[#6e7b8b]">06 XX XX XX XX</p>
                    <p className="text-sm text-[#6e7b8b]">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2e8b57] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f4e79] mb-1">Email</h3>
                    <p className="text-[#6e7b8b]">contact@coachlacledupret.fr</p>
                    <p className="text-sm text-[#6e7b8b]">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2e8b57] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f4e79] mb-1">Zone d'intervention</h3>
                    <p className="text-[#6e7b8b]">France entière</p>
                    <p className="text-sm text-[#6e7b8b]">Accompagnement à distance et en présentiel</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2e8b57] p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f4e79] mb-1">Horaires</h3>
                    <p className="text-[#6e7b8b]">Lundi - Vendredi : 9h00 - 18h00</p>
                    <p className="text-sm text-[#6e7b8b]">Samedi sur rendez-vous</p>
                  </div>
                </div>
              </div>

              {/* CTA Calendly */}
              <div className="bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-3">Préférez prendre RDV directement ?</h3>
                <p className="text-blue-100 mb-4">
                  Réservez un créneau dans mon agenda pour un échange téléphonique gratuit de 30 minutes.
                </p>
                <Link 
                  href="https://calendly.com/contact-coachlacledupret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#1f4e79] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver un créneau
                </Link>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f4e79] mb-8">Envoyez-moi un Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1f4e79] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1f4e79] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1f4e79] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[#1f4e79] mb-2">
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre projet</option>
                      <option value="Achat résidence principale">Achat résidence principale</option>
                      <option value="Achat résidence secondaire">Achat résidence secondaire</option>
                      <option value="Investissement locatif">Investissement locatif</option>
                      <option value="Renégociation de prêt">Renégociation de prêt</option>
                      <option value="Rachat de crédit">Rachat de crédit</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1f4e79] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                    placeholder="Décrivez votre projet, vos besoins, vos questions..."
                  />
                </div>

                {/* Consentements */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="rgpdConsent"
                      name="rgpdConsent"
                      checked={formData.rgpdConsent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-[#2e8b57] border-gray-300 rounded focus:ring-[#2e8b57]"
                    />
                    <label htmlFor="rgpdConsent" className="text-sm text-[#6e7b8b]">
                      J'accepte la <Link href="/politique-confidentialite" className="text-[#2e8b57] hover:underline">politique de confidentialité</Link> et consens au traitement de mes données personnelles. *
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletterConsent"
                      name="newsletterConsent"
                      checked={formData.newsletterConsent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#2e8b57] border-gray-300 rounded focus:ring-[#2e8b57]"
                    />
                    <label htmlFor="newsletterConsent" className="text-sm text-[#6e7b8b]">
                      J'accepte de recevoir des conseils et actualités par email (optionnel).
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer mon message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}