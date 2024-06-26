export async function request<T>(
	...params: Parameters<typeof fetch>
): Promise<T> {
	const response = await fetch(...params)
	if (!response.ok) throw new Error(response.statusText)
	return await response.json()
}
