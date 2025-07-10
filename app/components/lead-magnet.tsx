'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, User, ArrowRight, Gift, Loader2, Send, Check } from 'lucide-react'
import Image from 'next/image'

const LeadMagnet = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [rgpdConsent, setRgpdConsent] = useState(false)
  const [newsletterConsent, setNewsletterConsent] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  // Fonction pour détecter si on est sur mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth < 768
  }

  // Fonction pour télécharger le PDF de manière compatible mobile
  const downloadPdf = (downloadUrl: string) => {
    if (isMobile()) {
      // Sur mobile, redirection directe vers l'API de téléchargement
      window.location.href = downloadUrl
    } else {
      // Sur desktop, utiliser la méthode traditionnelle
      try {
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = 'Les-10-erreurs-a-eviter-pour-votre-pret-immobilier.pdf'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        // Fallback vers redirection directe si la méthode traditionnelle échoue
        window.location.href = downloadUrl
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    // Vérifier le consentement RGPD obligatoire
    if (!rgpdConsent) {
      setError('Vous devez accepter la politique de confidentialité pour accéder au guide.')
      setIsLoading(false)
      return
    }
    
    if (!email || !name) {
      setError('Veuillez remplir tous les champs obligatoires.')
      setIsLoading(false)
      return
    }

    try {
      // Envoyer les données à l'API
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          rgpdConsent,
          newsletterConsent,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setDownloadUrl(data?.downloadUrl || '/api/download-guide')
        
        // Déclencher le téléchargement du PDF avec la méthode compatible mobile
        if (data?.downloadUrl) {
          // Petit délai pour laisser le temps à l'interface de se mettre à jour
          setTimeout(() => {
            downloadPdf(data.downloadUrl)
          }, 500)
        }
        
        // Rediriger vers la page du guide après un délai plus long
        setTimeout(() => {
          window.location.href = '/guide-pret-immobilier'
        }, 3000)
      } else {
        setError(data?.error || 'Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error)
      setError('Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="lead-magnet" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px] lg:min-h-[700px]">
          {/* Colonne gauche - Image de couverture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] flex items-center justify-center p-8 lg:p-12"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Guide Gratuit</h3>
                  <p className="text-lg">Les 10 erreurs à éviter pour votre prêt immobilier</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite - Contenu et formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
          >
            {!isSubmitted ? (
              <div className="space-y-6 sm:space-y-8">
                {/* En-tête */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[#1f4e79] font-bold text-lg tracking-wide uppercase">
                      GUIDE 100% GRATUIT
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      Évitez les pièges du prêt immobilier.
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Découvrez les 10 erreurs les plus courantes qui peuvent compromettre votre projet immobilier et apprenez comment les éviter pour maximiser vos chances d'obtenir le meilleur financement.
                  </p>
                </div>

                {/* Liste à puces avec coches vertes */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">
                        Les erreurs de préparation qui font échouer 70% des dossiers
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">
                        Comment négocier efficacement avec votre banquier
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">
                        Les stratégies pour optimiser votre capacité d'emprunt
                      </span>
                    </div>
                  </div>
                </div>

                {/* Titre du formulaire */}
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Recevez le guide instantanément :
                  </h3>

                  {/* Formulaire */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4e79] focus:border-transparent text-gray-800 placeholder-gray-500"
                            placeholder="Votre prénom"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f4e79] focus:border-transparent text-gray-800 placeholder-gray-500"
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rgpdConsent}
                          onChange={(e) => setRgpdConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 text-[#1f4e79] border-gray-300 rounded focus:ring-[#1f4e79]"
                          required
                        />
                        <span className="text-sm text-gray-600">
                          J'accepte la{' '}
                          <a href="/politique-confidentialite" className="text-[#1f4e79] hover:underline">
                            politique de confidentialité
                          </a>{' '}
                          et consens au traitement de mes données personnelles. *
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={newsletterConsent}
                          onChange={(e) => setNewsletterConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 text-[#1f4e79] border-gray-300 rounded focus:ring-[#1f4e79]"
                        />
                        <span className="text-sm text-gray-600">
                          Je souhaite recevoir des conseils et actualités sur le financement immobilier (optionnel).
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-gray-900 py-4 px-6 rounded-lg font-bold text-lg border-2 border-gray-900 hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-gray-900" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Gift className="w-5 h-5 text-gray-900" />
                          Télécharger mon Guide Gratuit
                          <ArrowRight className="w-5 h-5 text-gray-900" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Vos données sont protégées et ne seront jamais partagées avec des tiers.
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Merci {name} !
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Votre guide <strong>"Les 10 erreurs à éviter pour votre prêt immobilier"</strong> est prêt !
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Gift className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="text-blue-800 font-semibold">
                        Téléchargement en cours...
                      </p>
                      <p className="text-blue-700 text-sm">
                        Votre guide devrait se télécharger automatiquement.
                      </p>
                      
                      {/* Bouton de téléchargement manuel */}
                      {downloadUrl && (
                        <div className="space-y-2">
                          <p className="text-blue-700 text-sm font-medium">
                            Le téléchargement ne démarre pas ?
                          </p>
                          <button
                            onClick={() => downloadPdf(downloadUrl)}
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-bold border-2 border-gray-900 hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            <Gift className="w-5 h-5" />
                            Cliquez ici pour télécharger
                          </button>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    Votre guide sera accessible directement dans votre navigateur, optimisé pour une lecture parfaite sur mobile et desktop.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Problème d'accès au guide ?</strong> Contactez-nous directement à{' '}
                    <a href="mailto:contact@coachlacledupret.fr" className="text-[#1f4e79] hover:underline">
                      contact@coachlacledupret.fr
                    </a>{' '}
                    ou au{' '}
                    <a href="tel:0618461094" className="text-[#1f4e79] hover:underline">
                      06 18 46 10 94
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Vous souhaitez un accompagnement personnalisé ?
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-2 text-[#1f4e79] hover:text-[#2e8b57] font-semibold transition-colors"
                  >
                    Contactez Nicolas
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnet