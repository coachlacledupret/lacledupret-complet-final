import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Les 5 Erreurs Qui Peuvent Faire Échouer Votre Demande de Prêt Immobilier',
  description: 'Découvrez les erreurs les plus courantes commises par les emprunteurs lors de leur demande de financement et comment les éviter pour maximiser vos chances de succès.',
}

export default function ArticlePage() {
  const errors = [
    {
      title: 'Sous-estimer le coût total de l\'opération',
      description: 'Ne pas prévoir les frais de notaire (7-8% du prix), les frais d\'agence, les travaux éventuels, et les frais de déménagement. Cette sous-estimation peut compromettre l\'équilibre financier du projet.',
      impact: 'Peut conduire à un refus de financement ou à des difficultés financières',
      solution: 'Prévoir une marge de sécurité de 10-15% sur le budget total',
    },
    {
      title: 'Négliger la préparation de son dossier emprunteur',
      description: 'Présenter un dossier incomplet ou mal organisé retarde le processus et donne une mauvaise image aux banques. Un dossier bien préparé augmente significativement les chances d\'acceptation.',
      impact: 'Retards dans le traitement et image négative auprès des banques',
      solution: 'Utiliser une check-list complète et organiser tous les documents en amont',
    },
    {
      title: 'Se focaliser uniquement sur le taux d\'intérêt',
      description: 'Oublier de négocier les frais de dossier, l\'assurance emprunteur, et les conditions de remboursement anticipé peut coûter plus cher qu\'un taux légèrement plus élevé.',
      impact: 'Surcoût potentiel de plusieurs milliers d\'euros',
      solution: 'Analyser le coût total du crédit, pas seulement le taux',
    },
    {
      title: 'Multiplier les demandes simultanées',
      description: 'Faire des demandes dans plusieurs banques en même temps peut être contre-productif et donner l\'impression d\'un dossier "bradé". Mieux vaut cibler 2-3 établissements stratégiquement.',
      impact: 'Risque de refus en cascade et détérioration de l\'image du dossier',
      solution: 'Cibler 2-3 banques maximum avec une approche personnalisée',
    },
    {
      title: 'Choisir la mauvaise durée de prêt',
      description: 'Une durée trop courte peut mettre en péril l\'équilibre budgétaire, tandis qu\'une durée trop longue augmente considérablement le coût total du crédit.',
      impact: 'Déséquilibre budgétaire ou surcoût important',
      solution: 'Simuler différentes durées et choisir l\'équilibre optimal',
    },
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Conseils
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Les 5 Erreurs Qui Peuvent Faire Échouer Votre Demande de Prêt Immobilier
          </h1>
          
          <div className="flex items-center space-x-6 text-blue-100 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>15 Mai 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>8 min de lecture</span>
            </div>
          </div>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Découvrez les erreurs les plus courantes commises par les emprunteurs lors de leur 
            demande de financement et comment les éviter pour maximiser vos chances de succès.
          </p>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#6e7b8b] leading-relaxed mb-8">
              Obtenir un prêt immobilier peut sembler complexe, mais connaître les erreurs les plus 
              fréquentes vous permettra d'optimiser vos chances de succès. Après avoir accompagné 
              plus de 500 clients, j'ai identifié 5 erreurs récurrentes qui peuvent compromettre 
              votre demande de financement.
            </p>

            <div className="bg-gradient-to-r from-[#2e8b57]/10 to-[#1f4e79]/10 rounded-xl p-6 mb-12">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#2e8b57] mr-3" />
                <h3 className="text-xl font-bold text-[#1f4e79]">Statistique Importante</h3>
              </div>
              <p className="text-[#6e7b8b]">
                <strong>95% des dossiers que j'accompagne</strong> sont acceptés, contre seulement 
                70% en moyenne pour les demandes sans accompagnement. La différence ? 
                L'évitement de ces erreurs critiques.
              </p>
            </div>

            {/* Les 5 erreurs */}
            <div className="space-y-12">
              {errors.map((error, index) => (
                <div key={index} className="border-l-4 border-[#2e8b57] pl-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#2e8b57] text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1f4e79]">
                      Erreur #{index + 1} : {error.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-[#6e7b8b] leading-relaxed mb-6">
                    {error.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        <h4 className="font-semibold text-red-700">Impact</h4>
                      </div>
                      <p className="text-red-600 text-sm">{error.impact}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <h4 className="font-semibold text-green-700">Solution</h4>
                      </div>
                      <p className="text-green-600 text-sm">{error.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">En Résumé</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Éviter ces 5 erreurs courantes peut faire la différence entre un refus et une 
                acceptation de votre demande de prêt immobilier. Une préparation minutieuse 
                et une approche stratégique sont les clés du succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-[#1f4e79] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                  Audit de Mon Dossier
                </Link>
                <Link href="/#lead-magnet" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1f4e79] transition-colors text-center">
                  Guide Gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#1f4e79] mb-8 text-center">
            Articles Similaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/negocier-taux-pret-immobilier-2025" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-bold text-[#1f4e79] mb-3">
                Comment Négocier Efficacement Votre Taux de Prêt Immobilier en 2025
              </h4>
              <p className="text-[#6e7b8b] text-sm">
                Guide complet sur les techniques de négociation bancaire pour obtenir les meilleures conditions.
              </p>
            </Link>
            <Link href="/blog/taux-fixe-variable-2025" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-bold text-[#1f4e79] mb-3">
                Prêt Immobilier : Faut-il Choisir un Taux Fixe ou Variable en 2025 ?
              </h4>
              <p className="text-[#6e7b8b] text-sm">
                Analyse comparative pour vous aider à choisir le type de taux le plus adapté.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}