import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import theme from './theme';
import './globals.css'
// import {ThemeProvider} from "@mui/material/styles";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Librarian',
  description: 'Library app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/*<ThemeProvider theme={theme}>*/}
      {/*  {children}*/}
      {/*</ThemeProvider>*/}
      {children}
      </body>
    </html>
  )
}
