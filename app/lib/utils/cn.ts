import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}