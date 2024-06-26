import { MealCard } from '@/app/ui/MealCard'

export type Meal = {
	id: string
	meal: string
	category: 'Dessert' | 'Dinner' | 'Breakfast'
	area: string
	instructions: string
	img: string
	price: number
	amount: number
}
export const MenuCards = ({
	addToCart,
	meals,
}: {
	addToCart: (productId: string, count: number) => void
	meals: Meal[]
}) => {
	return (
		<div className="grid grid-cols-2 justify-items-center gap-2.5 px-10 pb-8">
			{meals.map((meal) => (
				<MealCard
					key={meal.id}
					id={meal.id}
					title={meal.meal}
					imageSrc={meal.img}
					price={meal.price}
					text={meal.instructions}
					addToCart={addToCart}
				/>
			))}
		</div>
	)
}
