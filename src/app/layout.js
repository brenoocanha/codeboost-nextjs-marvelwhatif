import { Poppins } from 'next/font/google';
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '400',
    '600',
    '700',
  ]
})

export const metadata = {
  title: 'Marvel What If',
  description: 'Codeboost NextJS Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
