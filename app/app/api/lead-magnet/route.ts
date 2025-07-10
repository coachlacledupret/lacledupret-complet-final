import { NextRequest, NextResponse } from 'next/server'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const { name, email, rgpdConsent, newsletterConsent } = await request.json()

    // Validation des données
    if (!name || !email || !rgpdConsent) {
      return NextResponse.json(
        { error: 'Nom, email et consentement RGPD sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Pour l'instant, on simule une sauvegarde réussie
    // Plus tard, on pourra intégrer Prisma pour sauvegarder en base
    console.log('Lead magnet submission:', {
      name,
      email,
      rgpdConsent,
      newsletterConsent,
      timestamp: new Date().toISOString()
    })

    // Simuler un petit délai pour l'expérience utilisateur
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Inscription réussie ! Votre guide est prêt.',
      redirectUrl: '/guide-pret-immobilier',
      downloadUrl: '/api/download-guide'
    })

  } catch (error) {
    console.error('Erreur lors de la soumission du lead magnet:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}