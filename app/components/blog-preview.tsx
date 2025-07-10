'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

const BlogPreview = () => {
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
      category: 'Stratégie',
      slug: 'taux-fixe-variable-2025',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1f4e79] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Blog & Conseils</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Nos Derniers Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos conseils d'experts pour optimiser votre financement immobilier 
            et éviter les pièges les plus courants.
          </p>
        </motion.div>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* En-tête de l'article */}
              <div className="p-6 lg:p-8">
                {/* Catégorie et métadonnées */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-[#1f4e79] text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#1f4e79] transition-colors">
                  {article.title}
                </h3>

                {/* Extrait */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Lien de lecture */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-[#1f4e79] hover:text-[#2e8b57] font-semibold transition-colors group/link"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA vers le blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-900 hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview