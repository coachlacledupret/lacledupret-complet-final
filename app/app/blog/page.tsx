import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Conseils d\'Expert en Financement Immobilier | La Clé du Prêt',
  description: 'Découvrez tous les conseils de Nicolas Szeferowicz pour optimiser votre financement immobilier. Articles d\'expert, analyses de marché et astuces pratiques.',
}

export default function BlogPage() {
  const articles = [
    {
      title: 'Les 5 Erreurs Qui Peuvent Faire Échouer Votre Demande de Prêt Immobilier',
      excerpt: 'Découvrez les erreurs les plus courantes commises par les emprunteurs et comment les éviter pour maximiser vos chances de succès.',
      date: '15 Mai 2025',
      readTime: '8 min',
      category: 'Conseils',
      slug: 'erreurs-demande-pret-immobilier',
    },
    {
      title: 'Comment Négocier Efficacement Votre Taux de Prêt Immobilier en 2025',
      excerpt: 'Guide complet sur les techniques de négociation bancaire pour obtenir les meilleures conditions de financement.',
      date: '10 Mai 2025',
      readTime: '12 min',
      category: 'Négociation',
      slug: 'negocier-taux-pret-immobilier-2025',
    },
    {
      title: 'Prêt Immobilier : Faut-il Choisir un Taux Fixe ou Variable en 2025 ?',
      excerpt: 'Analyse comparative approfondie pour vous aider à choisir le type de taux le plus adapté à votre situation.',
      date: '5 Mai 2025',
      readTime: '10 min',
      category: 'Analyse',
      slug: 'taux-fixe-variable-2025',
    },
    {
      title: 'Assurance Emprunteur : Comment Économiser Jusqu\'à 15 000€',
      excerpt: 'Tout ce que vous devez savoir sur la délégation d\'assurance emprunteur pour réduire considérablement le coût de votre prêt.',
      date: '2 Mai 2025',
      readTime: '7 min',
      category: 'Assurance',
      slug: 'assurance-emprunteur-economies',
    },
    {
      title: 'Guide Complet pour les Primo-Accédants en 2025',
      excerpt: 'Tout ce que vous devez savoir pour réussir votre premier achat immobilier : aides, prêts, conseils pratiques.',
      date: '28 Avril 2025',
      readTime: '15 min',
      category: 'Primo-accédant',
      slug: 'guide-primo-accedants',
    },
    {
      title: 'Financement d\'Investissement Locatif : Stratégies et Optimisation',
      excerpt: 'Comment structurer efficacement le financement de votre investissement locatif pour maximiser votre rentabilité.',
      date: '25 Avril 2025',
      readTime: '11 min',
      category: 'Investissement',
      slug: 'financement-investissement-locatif',
    },
  ]

  const categories = [
    'Tous',
    'Conseils',
    'Négociation',
    'Analyse',
    'Assurance',
    'Primo-accédant',
    'Investissement'
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Blog - Conseils d'Expert
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Découvrez tous mes conseils pour optimiser votre financement immobilier. 
              Articles d'expert, analyses de marché et astuces pratiques pour réussir votre projet.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-blue-100 text-sm">Articles Publiés</div>
                </div>
                <div>
                  <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-blue-100 text-sm">Clients Accompagnés</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-blue-100 text-sm">Taux de Réussite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtres par catégorie */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    category === 'Tous'
                      ? 'bg-[#1f4e79] text-white'
                      : 'bg-white text-[#1f4e79] hover:bg-[#1f4e79] hover:text-white border border-[#1f4e79]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grille d'articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#2e8b57] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-[#6e7b8b]">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#1f4e79] mb-3 leading-tight">
                  {article.title}
                </h2>

                <p className="text-[#6e7b8b] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-[#6e7b8b]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-[#2e8b57] hover:text-[#267a4d] font-semibold group"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA final */}
          <div className="bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white rounded-xl p-8 mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un Accompagnement Personnalisé ?</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Ces articles vous donnent de précieux conseils, mais chaque situation est unique. 
              Bénéficiez d'un accompagnement sur-mesure pour votre projet immobilier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[#1f4e79] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Demander un Audit Gratuit
              </Link>
              <Link 
                href="https://calendly.com/contact-coachlacledupret"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1f4e79] transition-colors text-center"
              >
                Prendre RDV Maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}