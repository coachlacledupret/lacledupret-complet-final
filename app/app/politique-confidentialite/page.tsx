import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | La Clé du Prêt',
  description: 'Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.',
}

export default function PolitiqueConfidentialitePage() {
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
            <Shield className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Politique de Confidentialité
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Votre vie privée est importante. Découvrez comment nous protégeons vos données.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-[#2e8b57] p-6 mb-8">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-[#2e8b57] mr-2" />
                  <h3 className="text-lg font-semibold text-[#1f4e79]">Information importante</h3>
                </div>
                <p className="text-[#6e7b8b] mb-0">
                  Dernière mise à jour : 10 juillet 2025
                </p>
              </div>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">1. Responsable du traitement</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Nicolas Szeferowicz, coach en financement immobilier, est responsable du traitement 
                de vos données personnelles collectées sur ce site.
                <br />Contact : contact@coachlacledupret.fr
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">2. Données collectées</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li><strong>Données d'identification :</strong> nom, prénom, email, téléphone</li>
                <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                <li><strong>Données de projet :</strong> type de projet immobilier, besoins spécifiques</li>
                <li><strong>Données de communication :</strong> messages, échanges, historique des contacts</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">3. Finalités du traitement</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li>Répondre à vos demandes de contact et de conseil</li>
                <li>Fournir nos services de coaching en financement immobilier</li>
                <li>Envoyer des informations utiles sur le financement immobilier (avec votre consentement)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">4. Base légale</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Le traitement de vos données repose sur :
                <br />• Votre consentement (newsletter, cookies)
                <br />• L'exécution du contrat de prestation de services
                <br />• Notre intérêt légitime (amélioration des services)
                <br />• Le respect d'obligations légales
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">5. Destinataires des données</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Vos données peuvent être partagées avec :
                <br />• Nos prestataires techniques (hébergement, emailing) sous contrat de confidentialité
                <br />• Les autorités compétentes si requis par la loi
                <br />• Aucune vente ou cession à des tiers à des fins commerciales
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">6. Durée de conservation</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Nous conservons vos données :
                <br />• Données de contact : 3 ans après le dernier contact
                <br />• Données de prestation : 5 ans après la fin du service
                <br />• Données de navigation : 13 mois maximum
                <br />• Newsletter : jusqu'à votre désinscription
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">7. Vos droits</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li><strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
              </ul>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Pour exercer ces droits, contactez-nous à : contact@coachlacledupret.fr
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">8. Cookies</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Notre site utilise des cookies pour :
                <br />• Assurer le bon fonctionnement du site (cookies techniques)
                <br />• Analyser l'audience avec Google Analytics (avec votre consentement)
                <br />• Améliorer votre expérience de navigation
                <br /><br />
                Vous pouvez gérer vos préférences de cookies via notre bandeau de consentement 
                ou les paramètres de votre navigateur.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">9. Sécurité</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Nous mettons en place des mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, altération, divulgation 
                ou destruction. Nos données sont hébergées en Europe avec des prestataires certifiés.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">10. Transferts internationaux</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Vos données sont traitées au sein de l'Union Européenne. En cas de transfert 
                vers un pays tiers, nous nous assurons d'un niveau de protection adéquat 
                (décision d'adéquation, clauses contractuelles types, etc.).
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">11. Réclamations</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez :
                <br />• Nous contacter directement : contact@coachlacledupret.fr
                <br />• Saisir la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#2e8b57] hover:underline">www.cnil.fr</a>
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">12. Modifications</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Cette politique peut être modifiée pour s'adapter aux évolutions légales 
                ou techniques. La version en vigueur est toujours disponible sur cette page 
                avec la date de dernière mise à jour.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">13. Contact</h2>
              <p className="text-[#6e7b8b] leading-relaxed">
                Pour toute question relative à cette politique de confidentialité :
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