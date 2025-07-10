import { Metadata } from 'next'
import Link from 'next/link'
import { Download, CheckCircle, ArrowRight, FileText, Shield, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guide Gratuit : Les 10 Erreurs à Éviter pour Votre Prêt Immobilier | La Clé du Prêt',
  description: 'Téléchargez gratuitement notre guide expert pour éviter les erreurs courantes et optimiser votre demande de prêt immobilier.',
}

export default function GuidePretImmobilierPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Évitez les erreurs coûteuses',
      description: 'Découvrez les 10 erreurs les plus fréquentes qui peuvent faire échouer votre demande de prêt'
    },
    {
      icon: Clock,
      title: 'Gagnez du temps',
      description: 'Optimisez votre dossier dès le départ pour accélérer le processus d\'acceptation'
    },
    {
      icon: Users,
      title: 'Conseils d\'expert',
      description: 'Bénéficiez de l\'expérience de plus de 500 dossiers accompagnés avec succès'
    }
  ]

  const contents = [
    'Les 5 erreurs de préparation du dossier',
    'Comment optimiser votre profil emprunteur',
    'Les pièges à éviter lors de la négociation',
    'Stratégies pour maximiser vos chances',
    'Check-list complète du dossier parfait',
    'Conseils pour l\'assurance emprunteur',
    'Timeline optimale de votre projet',
    'Questions à poser à votre banquier',
    'Erreurs de timing à éviter',
    'Plan d\'action étape par étape'
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">Guide Gratuit</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Les 10 Erreurs à Éviter pour Votre Prêt Immobilier
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Téléchargez gratuitement notre guide expert pour optimiser votre demande 
              de financement et maximiser vos chances de succès.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-blue-100 text-sm">Taux de Réussite</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Clients Accompagnés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24 pages</div>
                  <div className="text-blue-100 text-sm">de Conseils Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Aperçu du guide */}
            <div>
              <h2 className="text-3xl font-bold text-[#1f4e79] mb-6">
                Ce que vous allez découvrir
              </h2>
              
              <div className="space-y-3 mb-8">
                {contents.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2e8b57] flex-shrink-0" />
                    <span className="text-[#6e7b8b]">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-[#2e8b57]/10 to-[#1f4e79]/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#1f4e79] mb-3">
                  Pourquoi ce guide est-il gratuit ?
                </h3>
                <p className="text-[#6e7b8b] leading-relaxed">
                  Mon objectif est de démocratiser l'accès aux conseils d'experts en financement immobilier. 
                  Ce guide concentre mon expérience de plus de 500 dossiers accompagnés pour vous aider 
                  à éviter les erreurs les plus courantes.
                </p>
              </div>
            </div>

            {/* Formulaire de téléchargement */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f4e79] mb-2">
                  Téléchargement Gratuit
                </h3>
                <p className="text-[#6e7b8b]">
                  Recevez votre guide par email en quelques secondes
                </p>
              </div>

              {/* Le formulaire sera géré par le composant LeadMagnet */}
              <div className="text-center">
                <Link 
                  href="/#lead-magnet"
                  className="inline-flex items-center bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger Maintenant
                </Link>
                
                <p className="text-xs text-[#6e7b8b] mt-4">
                  Aucun spam. Vos données sont protégées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1f4e79] text-center mb-12">
            Pourquoi télécharger ce guide ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1f4e79] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#6e7b8b] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à optimiser votre financement ?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Téléchargez votre guide gratuit et découvrez comment éviter les erreurs 
            qui peuvent compromettre votre projet immobilier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#lead-magnet"
              className="bg-white text-[#1f4e79] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Télécharger le Guide
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1f4e79] transition-colors"
            >
              Demander un Accompagnement
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}