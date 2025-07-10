'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Calendar, Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/guide-pret-immobilier', label: 'Guide Gratuit' },
  ]

  const legalLinks = [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/cgv', label: 'CGV' },
    { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  ]

  const services = [
    'Audit de dossier emprunteur',
    'Négociation bancaire',
    'Optimisation du financement',
    'Accompagnement personnalisé',
  ]

  return (
    <footer className="bg-[#1f4e79] text-white">
      {/* Section principale */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo coachlacledupret.png"
                  alt="Logo Coach La Clé du Prêt"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">LA CLÉ DU PRÊT</h3>
                <p className="text-sm text-blue-200">Coach Financement</p>
              </div>
            </Link>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Votre expert en financement immobilier. Je vous accompagne pour obtenir 
              les meilleures conditions de prêt et concrétiser votre projet.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Mes Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-blue-100">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2e8b57]" />
                <span className="text-blue-100">06 XX XX XX XX</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2e8b57]" />
                <span className="text-blue-100">contact@coachlacledupret.fr</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#2e8b57]" />
                <span className="text-blue-100">France entière</span>
              </div>
            </div>
            
            {/* CTA Calendly */}
            <div className="mt-6">
              <Link 
                href="https://calendly.com/contact-coachlacledupret"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#2e8b57] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#267a4d] transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section légale */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">
              © {currentYear} La Clé du Prêt - Nicolas Szeferowicz. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer