'use client'
import { OrderCard } from '@/app/ui/OrderCard'
import { orderAtom } from '@/state'
import { useAtom } from '@reatom/npm-react'
export default function Page() {
	const [order] = useAtom((ctx) => ctx.spy(orderAtom))

	if (order.length === 0) {
		return <div>No order found</div>
	}

	return (
		<main className="bg-content-background relative flex flex-col items-center bg-right-top pt-10">
			<div className="mb-8 flex flex-col items-center justify-center">
				<h1 className="mb-6 text-5xl font-normal tracking-wide text-green">
					Finish your order
				</h1>
				<div className="px-auto flex flex-col justify-items-center gap-2.5 pb-8">
					{order.map((meal) => (
						<OrderCard
							key={meal.id}
							mealId={meal.id}
							title={meal.meal}
							imageSrc={meal.img}
							price={meal.price}
							text={meal.instructions}
							count={meal.amount}
						/>
					))}
				</div>
			</div>
		</main>
	)
}
