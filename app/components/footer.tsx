import Link from 'next/link'
import { Calculator, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#005f9e] text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2e8b57] to-white rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-[#005f9e]" />
              </div>
              <div>
                <span className="text-xl font-bold">La Clé du Prêt</span>
                <div className="text-sm text-blue-200">Nicolas SZEFEROWICZ</div>
              </div>
            </Link>
            <p className="text-blue-100 leading-relaxed mb-6">
              Coach expert en financement immobilier, je vous accompagne pour optimiser 
              votre prêt et maximiser vos chances d'obtenir les meilleures conditions.
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2e8b57]" />
                <div>
                  <a href="tel:0618461094" className="hover:text-[#2e8b57] transition-colors">
                    06 18 46 10 94
                  </a>
                  <div className="text-sm text-blue-200">Lun - Ven : 9h - 18h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2e8b57]" />
                <div>
                  <a href="mailto:contact@coachlacledupret.fr" className="hover:text-[#2e8b57] transition-colors">
                    contact@coachlacledupret.fr
                  </a>
                  <div className="text-sm text-blue-200">Réponse sous 24h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#2e8b57]" />
                <div>
                  <span>Partout en France</span>
                  <div className="text-sm text-blue-200">Visioconférence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Mes Services</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Stratégie Initiale</span>
                <span className="font-semibold text-[#2e8b57]">100€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Accompagnement Complet</span>
                <span className="font-semibold text-[#2e8b57]">290€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-100">Premier Contact</span>
                <span className="font-semibold text-[#2e8b57]">Gratuit</span>
              </div>
            </div>
            <a 
              href="https://calendly.com/contact-coachlacledupret" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary mt-6 w-full text-center inline-block"
            >
              Prendre Rendez-vous
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-400/20">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              © 2025 Nicolas SZEFEROWICZ - SIRET: 751 600 081
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-blue-200 hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <Link href="/cgv" className="text-blue-200 hover:text-white transition-colors">
                CGV
              </Link>
              <Link href="/politique-confidentialite" className="text-blue-200 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}