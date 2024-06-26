import logo from '@/public/icons/logo.svg'
import instagram from '@/public/icons/Instagram.svg'
import twitter from '@/public/icons/Twitter.svg'
import youtube from '@/public/icons/Youtube.svg'
import Image from 'next/image'

export const Footer = () => {
	return (
		<footer className="bg-footer-background h-auto bg-cover bg-no-repeat pb-60 pt-60">
			<div className="mx-auto w-4/5">
				<div className="font-inter font-inter mb-12 flex justify-around font-normal text-slate-500">
					<div className="flex flex-col justify-start gap-4">
						<div className="h-11 w-9">
							<Image src={logo} alt="Logo" />
						</div>
						<p className="w-60 text-base leading-relaxed tracking-tight">
							Takeaway & Delivery template&nbsp;for small - medium businesses.
						</p>
					</div>
					<ul className="flex flex-col items-start gap-7 text-sm">
						<li className="uppercase tracking-widest text-zinc-950">Company</li>
						<li className="">Home</li>
						<li>Order</li>
						<li>FAQ</li>
						<li>Contact</li>
					</ul>
					<ul className="flex flex-col items-start gap-7 text-sm leading-5">
						<li className="uppercase tracking-widest text-zinc-950">
							Template
						</li>
						<li>
							<a href="https://www.google.com/">Style Guide</a>
						</li>
						<li>
							<a href="https://www.google.com/">Changelog</a>
						</li>
						<li>
							<a href="https://www.google.com/">License</a>
						</li>
						<li>
							<a href="https://www.google.com/">Webflow University</a>
						</li>
					</ul>
					<ul className="flex flex-col items-start gap-7 text-sm leading-5">
						<li className="uppercase tracking-widest text-zinc-950">
							Flowbase
						</li>
						<li>More Cloneables</li>
					</ul>
				</div>
				<div className="bg-custom-gray mb-12 border-t border-gray-300" />
				<div className="flex justify-between">
					<p className="text-gray-500">
						Built by
						<a className="text-blue-500"> Flowbase</a> · Powered by
						<a className="text-blue-500"> Webflow</a>
					</p>
					<div className="flex items-center justify-end gap-6">
						<a href="https://www.instagram.com/">
							<Image src={instagram} alt="Instagram" />
						</a>
						<a href="https://www.twitter.com/">
							<Image src={twitter} alt="Twitter" />
						</a>
						<a href="https://www.youtube.com/">
							<Image src={youtube} alt="Youtube" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
