'use client'
import { Button } from '@/app/ui/Button'
import { MenuCards } from '@/app/ui/MenuCards'
import { useAction, useAtom } from '@reatom/npm-react'
import { mealCategoryAtom, mealsByCategory, orderAtom } from '@/state'

export default function Page() {
	const [displayedItems, setDisplayedItems] = useAtom(6)
	const [mealCategory, setMealCategory] = useAtom(mealCategoryAtom)
	const [allMeals] = useAtom((ctx) => ctx.spy(mealsByCategory.dataAtom))

	const handleSeeMore = () => {
		setDisplayedItems((prevDisplayedItems) => prevDisplayedItems + 6)
	}

	const handleChangeMealCategory = useAction((ctx, category) => {
		setMealCategory(category)
	})

	const handleAddToCart = useAction((ctx, mealId: string, count: number) => {
		if (count === 0) return
		const order = ctx.get(orderAtom)
		const addedMeal = allMeals.find((meal) => meal.id === mealId)!
		const mealInOrder = order.find((meal) => meal.id === mealId)
		let updatedMeals

		if (mealInOrder) {
			updatedMeals = order.map((meal) =>
				meal.id === mealId ? { ...meal, amount: meal.amount + count } : meal,
			)
		} else {
			updatedMeals = [...order, { ...addedMeal, amount: count }]
		}
		orderAtom(ctx, updatedMeals)
	})

	const visibleMeals =
		allMeals
			.filter((meal) => meal.category === mealCategory)
			?.slice(0, displayedItems) || []

	const showSeeMoreButton =
		displayedItems <
		(allMeals.filter((meal) => meal.category === mealCategory)?.length || 0)

	return (
		<main className="bg-content-background relative flex flex-col items-center bg-right-top pt-10">
			<div className="mb-8 flex w-1/3 flex-col items-center justify-center">
				<h1 className="mb-6 text-5xl font-normal tracking-wide text-green">
					Browse our menu
				</h1>
				<p className="text-center text-base font-normal text-gray-description dark:text-gray-description">
					Use our menu to place an order online, or&nbsp;
					<a href="tel:123-234" title="123-456" className="w-20 text-green">
						phone
					</a>
					&nbsp;our store to place a pickup order. Fast and fresh food.
				</p>
			</div>
			<div className="mb-8 flex justify-between gap-6">
				<Button
					color={mealCategory === 'Dessert' ? 'green' : 'white'}
					size="medium"
					text="Dessert"
					onClick={() => handleChangeMealCategory('Dessert')}
				/>
				<Button
					color={mealCategory === 'Dinner' ? 'green' : 'white'}
					size="medium"
					text="Dinner"
					onClick={() => handleChangeMealCategory('Dinner')}
				/>
				<Button
					color={mealCategory === 'Breakfast' ? 'green' : 'white'}
					size="medium"
					text="Breakfast"
					onClick={() => handleChangeMealCategory('Breakfast')}
				/>
			</div>
			<MenuCards meals={visibleMeals} addToCart={handleAddToCart} />
			{showSeeMoreButton && (
				<Button
					color="green"
					size="medium"
					text="See more"
					onClick={handleSeeMore}
				/>
			)}
		</main>
	)
}
