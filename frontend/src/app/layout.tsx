import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import theme from './theme';
import './globals.css'
// import {ThemeProvider} from "@mui/material/styles";
// import {BrowserRouter} from 'react-router-dom';
// import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bibliosfera',
  description: 'Library app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
      {/*<ThemeProvider theme={theme}>*/}
      {/*  {children}*/}
      {/*</ThemeProvider>*/}
      {/*    <BrowserRouter>*/}
      {/*        {children}*/}
      {/*    </BrowserRouter>*/}
      {children}
      </body>
    </html>
  )
}
