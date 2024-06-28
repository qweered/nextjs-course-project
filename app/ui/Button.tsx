import { cn } from '@/app/lib/utils/cn'

interface ButtonProps {
	size: 'large' | 'medium' | 'small'
	text: string
	color: 'green' | string
	onClick?: () => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
	size,
	text,
	color,
	onClick,
	disabled = false,
	type = 'button',
}) => (
	<button
		type={type}
		className={cn(
			size === 'large' && 'h-14 w-48',
			size === 'medium' && 'h-12 w-32',
			size === 'small' && 'h-12 w-12',
			color === 'green' ? 'bg-green text-white' : 'text-black',
			'rounded-md border text-center text-sm font-normal leading-7 tracking-tighter',
		)}
		onClick={onClick}
		disabled={disabled}
	>
		{text}
	</button>
)
