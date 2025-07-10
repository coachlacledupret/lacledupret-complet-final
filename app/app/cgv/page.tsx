import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Shield, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | La Clé du Prêt',
  description: 'Consultez les conditions générales de vente des services de coaching en financement immobilier de Nicolas Szeferowicz.',
}

export default function CGVPage() {
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
            <FileText className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Conditions Générales de Vente
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Conditions applicables aux services de coaching en financement immobilier.
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

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 1 - Objet</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles 
                entre Nicolas Szeferowicz, coach en financement immobilier, et ses clients dans le cadre 
                de la prestation de services de conseil et d'accompagnement en financement immobilier.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 2 - Services proposés</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Les services proposés comprennent :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li>Audit et optimisation du dossier emprunteur</li>
                <li>Négociation avec les établissements bancaires</li>
                <li>Accompagnement dans les démarches de financement</li>
                <li>Conseil en assurance emprunteur</li>
                <li>Suivi personnalisé tout au long du processus</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 3 - Tarifs et modalités de paiement</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Les tarifs sont communiqués lors du premier entretien et confirmés par devis. 
                Les modalités de paiement sont les suivantes :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li>Paiement à la réussite : honoraires dus uniquement en cas d'obtention du financement</li>
                <li>Montant : pourcentage du montant emprunté selon grille tarifaire</li>
                <li>Paiement par virement bancaire dans les 30 jours suivant l'obtention des fonds</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 4 - Obligations du client</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Le client s'engage à :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li>Fournir tous les documents et informations nécessaires</li>
                <li>Respecter les rendez-vous fixés</li>
                <li>Suivre les recommandations du coach</li>
                <li>Informer de tout changement de situation</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 5 - Obligations du prestataire</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-4">
                Nicolas Szeferowicz s'engage à :
              </p>
              <ul className="list-disc list-inside text-[#6e7b8b] mb-6 space-y-2">
                <li>Mettre en œuvre tous les moyens pour optimiser le dossier</li>
                <li>Respecter la confidentialité des informations</li>
                <li>Fournir un accompagnement personnalisé</li>
                <li>Tenir informé le client de l'avancement du dossier</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 6 - Responsabilité</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Le prestataire met en œuvre une obligation de moyens et non de résultat. 
                La responsabilité du prestataire ne peut être engagée en cas de refus de financement 
                par les établissements bancaires pour des motifs indépendants de sa volonté.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 7 - Droit de rétractation</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Conformément à l'article L221-18 du Code de la consommation, le client dispose 
                d'un délai de 14 jours pour exercer son droit de rétractation à compter de la 
                signature du contrat de prestation de services.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 8 - Protection des données</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Les données personnelles collectées sont traitées conformément au RGPD. 
                Pour plus d'informations, consultez notre 
                <Link href="/politique-confidentialite" className="text-[#2e8b57] hover:underline">
                  politique de confidentialité
                </Link>.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 9 - Litiges</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                En cas de litige, une solution amiable sera recherchée en priorité. 
                À défaut, les tribunaux français seront seuls compétents.
              </p>

              <h2 className="text-2xl font-bold text-[#1f4e79] mb-4">Article 10 - Contact</h2>
              <p className="text-[#6e7b8b] leading-relaxed mb-6">
                Pour toute question relative aux présentes CGV :
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