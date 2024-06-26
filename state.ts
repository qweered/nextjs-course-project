import { atom } from '@reatom/core'
import { reatomResource, withDataAtom } from '@reatom/async'
import { request } from '@/app/lib/utils/request'
import { MEALS_API_URL } from '@/app/lib/apiConfig'
import { Meal } from '@/app/ui/MenuCards'
import { withLocalStorage } from '@reatom/persist-web-storage'

export const orderAtom = atom<Array<Meal>>([], 'orderAtom').pipe(
	withLocalStorage('order'),
)

export const isAuthedAtom = atom(false, 'isAuthedAtom').pipe(
	withLocalStorage('isAuthed'),
)
export const mealCategoryAtom = atom<'Dessert' | 'Dinner' | 'Breakfast'>(
	'Dessert',
	'mealCategoryAtom',
)
export const mealsByCategory = reatomResource<Array<Meal>>(async (ctx) => {
	return await request(MEALS_API_URL)
}, 'mealsByCategory').pipe(withDataAtom([]))
