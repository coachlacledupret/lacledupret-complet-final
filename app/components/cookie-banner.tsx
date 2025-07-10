'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, ExternalLink } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    // Vérifier le consentement dans localStorage
    try {
      const cookieConsent = localStorage.getItem('cookieConsent')
      
      if (!cookieConsent) {
        // Afficher la bannière après un délai pour l'animation
        setTimeout(() => {
          setIsVisible(true)
          setIsAnimating(true)
        }, 1000)
      }
    } catch (error) {
      // Si localStorage n'est pas disponible, afficher la bannière par défaut
      setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 1000)
    }
  }, [isMounted])

  const handleAccept = () => {
    try {
      localStorage.setItem('cookieConsent', 'accepted')
      localStorage.setItem('cookieConsentDate', new Date().toISOString())
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du consentement')
    }
    closeBanner()
  }

  const handleReject = () => {
    try {
      localStorage.setItem('cookieConsent', 'rejected')
      localStorage.setItem('cookieConsentDate', new Date().toISOString())
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du consentement')
    }
    closeBanner()
  }

  const closeBanner = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  // Ne pas rendre côté serveur
  if (!isMounted) {
    return null
  }
  
  if (!isVisible) {
    return null
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
      isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className="mx-auto max-w-6xl bg-white/95 backdrop-blur-sm shadow-lg border-2 border-gray-200 rounded-lg">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Icône et titre */}
            <div className="flex items-center gap-2 text-gray-800">
              <Cookie className="h-5 w-5 text-yellow-600" />
              <h3 className="font-semibold text-sm sm:text-base">
                Gestion des cookies
              </h3>
            </div>

            {/* Texte explicatif */}
            <div className="flex-1 text-sm text-gray-600 leading-relaxed">
              <p>
                Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser le contenu. 
                Vous pouvez accepter tous les cookies ou gérer vos préférences.
              </p>
              <p className="mt-1">
                <a 
                  href="/politique-confidentialite" 
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  En savoir plus sur notre politique de confidentialité
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleReject}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium min-w-[100px] transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded-lg text-sm min-w-[100px] transition-colors"
              >
                Accepter
              </button>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={closeBanner}
              className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 p-1 h-8 w-8 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}