import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '../styles/style.scss'

export const metadata = {
  title: 'Meem ',
  description: 'Trade your goods and services with others in your community with ease."',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
