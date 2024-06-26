'use client'
import { Button } from '@/app/ui/Button'
import { useRouter } from 'next/navigation'
import { useAtom } from '@reatom/npm-react'
import { isAuthedAtom } from '@/state'

export const LoginForm = () => {
	const [email, setEmail] = useAtom('')
	const [password, setPassword] = useAtom('')
	const [isAuthed, setIsAuthed] = useAtom(isAuthedAtom)
	const router = useRouter()

	const resetForm = () => {
		setEmail('')
		setPassword('')
	}

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (email == 'admin@admin.ru' && password == 'password') {
			setIsAuthed(true)
			router.push('/home')
		}
	}

	return (
		<div className="flex items-center justify-center">
			<div className="flex py-36 pl-24">
				<div className="my-6 flex flex-col text-center">
					<h1 className="mb-6 mt-0 text-5xl font-normal tracking-wide text-green">
						Log in
					</h1>
					<form
						className="border-green-200 rounded-md border border-opacity-15 px-14 py-8"
						onSubmit={handleLogin}
					>
						<div className="mb-4 flex items-center">
							<label
								htmlFor="email"
								className="mr-2 w-1/3 font-sans text-base font-normal leading-5 tracking-wider text-gray-900"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-2/3 rounded-md border border-gray-300 bg-gray-100 p-2 text-center font-sans text-sm font-normal leading-7 tracking-wider text-black"
							/>
						</div>
						<div className="mb-4 flex items-center">
							<label
								htmlFor="password"
								className="mr-2 w-1/3 font-sans text-base font-normal leading-5 tracking-wider text-gray-900"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-2/3 rounded-md border border-gray-300 bg-gray-100 p-2 text-center font-sans text-sm font-normal leading-7 tracking-wider text-black"
							/>
						</div>
						<div className="flex gap-4">
							<Button color="green" size="medium" text="Login" type="submit" />
							<Button
								color="white"
								size="medium"
								text="Reset Form"
								type="reset"
								onClick={resetForm}
							/>
							<Button
								size="medium"
								text="Logout"
								color="green"
								onClick={() => setIsAuthed(false)}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
