import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, Building, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions Légales | La Clé du Prêt',
  description: 'Mentions légales du site La Clé du Prêt - Coach en financement immobilier Nicolas Szeferowicz.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="flex items-center mb-6">
            <Scale className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Mentions Légales
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Informations légales relatives au site La Clé du Prêt.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Éditeur du site</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Building className="w-5 h-5 text-[#2e8b57] mr-2" />
                      <h3 className="font-semibold text-[#1f4e79]">Entreprise</h3>
                    </div>
                    <p className="text-[#6e7b8b] mb-2">Nicolas Szeferowicz</p>
                    <p className="text-[#6e7b8b] mb-2">Coach en financement immobilier</p>
                    <p className="text-[#6e7b8b]">Micro-entreprise</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-[#2e8b57] mr-2" />
                      <h3 className="font-semibold text-[#1f4e79]">Contact</h3>
                    </div>
                    <p className="text-[#6e7b8b] mb-2">Email : contact@coachlacledupret.fr</p>
                    <p className="text-[#6e7b8b]">Téléphone : 06 XX XX XX XX</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Hébergement</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Ce site est hébergé par Vercel Inc.
                <br />Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                <br />Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#2e8b57] hover:underline">vercel.com</a>
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Propriété intellectuelle</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé 
                par le droit d'auteur et appartient à Nicolas Szeferowicz ou à ses partenaires. 
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Cookies et données personnelles</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser 
                le trafic. Pour plus d'informations sur la collecte et le traitement des données 
                personnelles, consultez notre 
                <Link href="/politique-confidentialite" className="text-[#2e8b57] hover:underline">
                  politique de confidentialité
                </Link>.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Responsabilité</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Les informations présentes sur ce site sont fournies à titre indicatif. 
                Nicolas Szeferowicz s'efforce de maintenir ces informations à jour mais ne peut 
                garantir leur exactitude, leur complétude ou leur actualité. L'utilisation des 
                informations se fait sous la responsabilité de l'utilisateur.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Liens externes</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Ce site peut contenir des liens vers des sites externes. Nicolas Szeferowicz 
                n'est pas responsable du contenu de ces sites et de leur politique de 
                confidentialité.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Droit applicable</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Contact</h2>
              <p className="text-[#6e7b8b] leading-relaxed">
                Pour toute question relative aux mentions légales :
                <br />Email : contact@coachlacledupret.fr
                <br />Téléphone : 06 XX XX XX XX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}