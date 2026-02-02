import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Future-BME 2026 International Conference',
    short_name: 'Future-BME 2026',
    description: 'Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation',
    start_url: '/future-bme-2026/',
    display: 'standalone',
    background_color: '#0a0e27',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/future-bme-2026/images/favicon2.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/future-bme-2026/images/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
