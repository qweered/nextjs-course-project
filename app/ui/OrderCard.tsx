'use client'
import { useAction } from '@reatom/npm-react'
import { orderAtom } from '@/state'
import { action } from '@reatom/core'

type CardProps = {
	mealId: string
	title: string
	imageSrc: string
	price: number
	text: string
	count: number
}

export const OrderCard = ({
	mealId,
	title,
	imageSrc,
	price,
	text,
	count,
}: CardProps) => {
	const changeCountAction = action((ctx, mealId: string, newCount: number) => {
		orderAtom(
			ctx,
			ctx
				.get(orderAtom)
				.map((meal) =>
					meal.id === mealId ? { ...meal, amount: newCount } : meal,
				),
		)
	}, 'changeCountAction')

	const removeFromOrderAction = action((ctx, mealId: string) => {
		orderAtom(
			ctx,
			ctx.get(orderAtom).filter((meal) => meal.id !== mealId),
		)
	}, 'removeFromOrderAction')

	const changeCount = useAction(changeCountAction)
	const removeFromOrder = useAction(removeFromOrderAction)

	const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		changeCount(mealId, Number(event.target.value))

	return (
		<div className="border-border-color mx-auto flex w-1/2 space-x-4 rounded-md border p-6">
			<img src={imageSrc} alt={title} className="size-32" />
			<div className="flex w-2/3 flex-col items-start gap-2.5">
				<div className="flex w-full justify-between">
					<h2 className="text-title-accent text-base font-normal leading-5 tracking-tight">
						{title}
					</h2>
					<p className="text-sm font-normal leading-5 text-green">
						${price} USD
					</p>
				</div>

				<p className="line-clamp-3 text-base text-gray-description">{text}</p>
				<div className="flex items-center gap-2">
					<input
						type="number"
						min="0"
						value={count}
						onChange={handleCountChange}
						className="border-border-color h-12 w-12 rounded-md border pl-4 text-sm font-normal leading-7 tracking-tighter text-black"
					/>
					<button
						onClick={() => removeFromOrder(mealId)}
						className="text-red-500"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}
