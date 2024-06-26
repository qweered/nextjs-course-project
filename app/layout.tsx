'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Header } from '@/app/ui/Header'
import { Footer } from '@/app/ui/Footer'
import { connectLogger, createCtx } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'

const inter = Inter({ subsets: ['latin'] })

const ctx = createCtx()
if (process.env.NODE_ENV === 'development') connectLogger(ctx)

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<reatomContext.Provider value={ctx}>
					<Header />
					{children}
					<Footer />
				</reatomContext.Provider>
			</body>
		</html>
	)
}
