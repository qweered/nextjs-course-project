import hero from '@/public/images/hero.png'
import greenStar from '@/public/icons/green-star.svg'
import { Button } from '@/app/ui/Button'
import Image from 'next/image'
import React from 'react'

export const Hero = () => (
	<div className="bg-opacity-87 flex items-center justify-center bg-hero-bgc">
		<div className="flex pl-24 pt-24">
			<div className="mt-12 flex flex-col">
				<h1 className="w-10/12 text-6xl text-accent">
					Beautiful food & takeaway,{' '}
					<span className="text-green">delivered</span> to your door.
				</h1>
				<p className="mb-6 mt-4 w-8/12 text-gray-description">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500.
				</p>
				<div className="mb-6">
					<Button
						color="green"
						size="large"
						text="Place an order"
						disabled={true}
					/>
				</div>
				<div className="mb-2.5 flex flex-col">
					<div className="mb-2">
						<Image src={greenStar} alt="rating star"></Image>
					</div>
					<p className="text-base font-normal leading-5 text-accent">
						<span className="text-green">4.8 out of 5</span> based on 2000+
						reviews
					</p>
				</div>
			</div>
			<div>
				<Image priority src={hero} alt="Food Wallpaper" />
			</div>
		</div>
	</div>
)
