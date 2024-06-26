'use client'
import cart from '@/public/icons/cart.svg'
import Image from 'next/image'
import { useAtom } from '@reatom/npm-react'
import { orderAtom } from '@/state'
import Link from 'next/link'

export const Cart = () => {
	const [itemsCount] = useAtom((ctx) => {
		const order = ctx.spy(orderAtom)
		console.log(order)
		return order.reduce((acc, item) => acc + item.amount, 0)
	})

	return (
		<Link
			href="/order"
			className="relative flex size-12 items-center justify-center rounded-sm bg-[#35B8BE] hover:bg-[#2A8B91]"
		>
			<Image src={cart} alt="Cart" />
			<div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-white shadow-md">
				<span className="font-sans text-xs font-normal leading-4 text-[#35B8BE]">
					{itemsCount}
				</span>
			</div>
		</Link>
	)
}
