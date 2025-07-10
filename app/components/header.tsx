'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Optimisé pour mobile */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/images/logo coachlacledupret.png"
                alt="Logo Coach La Clé du Prêt"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-[#1f4e79]">LA CLÉ DU PRÊT</h1>
              <p className="text-xs sm:text-sm text-[#6e7b8b]">Coach Financement Immobilier</p>
            </div>
            {/* Version mobile simplifiée */}
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-[#1f4e79]">LA CLÉ DU PRÊT</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#1f4e79] hover:text-[#2e8b57] font-medium transition-colors duration-200 relative group text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e8b57] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="https://calendly.com/contact-coachlacledupret" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1f4e79] min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-[#1f4e79] hover:text-[#2e8b57] hover:bg-[#f0f8f4] transition-colors duration-200 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-3 border-t border-gray-200">
                  <Link 
                    href="https://calendly.com/contact-coachlacledupret"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Prendre RDV
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header