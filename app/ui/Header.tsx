import { Cart } from '@/app/ui/Cart'
import logo from '@/public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
	<header className="flex items-center justify-between p-4 pl-24 pr-24">
		<Link href="/">
			<Image priority src={logo} alt="Logo" />
		</Link>
		<div className="flex items-center justify-center gap-6">
			<nav>
				<ul className="mr-8 flex gap-8">
					<Link href="/home">Home</Link>
					<Link href="/menu">Menu</Link>
					<Link href="https://www.google.com">Company</Link>
					<Link href="/login">Login</Link>
				</ul>
			</nav>
			<Cart />
		</div>
	</header>
)
