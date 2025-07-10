import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const pdfPath = path.join(process.cwd(), 'public', 'guides', 'Les-10-erreurs-a-eviter-pour-votre-pret-immobilier.pdf')
    
    // Lire le fichier PDF
    const pdfBuffer = await readFile(pdfPath)
    
    // Retourner le fichier avec les en-têtes appropriés
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Les-10-erreurs-a-eviter-pour-votre-pret-immobilier.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Erreur lors du téléchargement du PDF:', error)
    return NextResponse.json(
      { error: 'Fichier non trouvé' },
      { status: 404 }
    )
  }
}