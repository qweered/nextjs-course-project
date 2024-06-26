import { useAtom } from '@reatom/npm-react'
import { Button } from '@/app/ui/Button'

type CardProps = {
	id: string
	title: string
	imageSrc: string
	price: number
	text: string
	addToCart: (productId: string, count: number) => void
}

export const MealCard = ({
	id,
	title,
	imageSrc,
	price,
	text,
	addToCart,
}: CardProps) => {
	const [count, setCount] = useAtom(0)

	const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCount(Number(event.target.value))
	}

	return (
		<div className="border-border-color flex w-11/12 justify-start space-x-4 rounded-md border bg-white p-6 dark:bg-gray-500">
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
				<p className="line-clamp-3 text-base text-gray-description dark:text-white">
					{text}
				</p>
				<div className="flex items-center gap-2">
					<input
						type="number"
						min="0"
						value={count}
						onChange={handleCountChange}
						className="border-border-color h-12 w-12 rounded-md border pl-4 text-sm font-normal leading-7 tracking-tighter text-black"
					/>
					<Button
						color="green"
						size="medium"
						text="Add to card"
						onClick={() => addToCart(id, count)}
					/>
				</div>
			</div>
		</div>
	)
}
