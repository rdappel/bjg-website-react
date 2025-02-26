
import { useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {

	useEffect(() => {
		const navHeight = document.querySelector('nav').offsetHeight
		const navLinks = document.querySelectorAll('nav li a')

		const handleClick = e => {
			e.preventDefault()
			const target = document.querySelector(e.target.getAttribute('href'))
			const position = target.getBoundingClientRect().top + window.scrollY - navHeight
			const top = (position < 0 ? 0 : position)
			const behavior = 'smooth'
			window.scrollTo({ top, behavior })
		}

		navLinks.forEach(link => {
			link.addEventListener('click', handleClick)
		})

		return () => {
			navLinks.forEach(link => {
				link.removeEventListener('click', handleClick)
			})
		}
	}, [])

	return (
		<nav>
			<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#news">News</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<div id="social">
				<a href="https://www.facebook.com/bigjohngames" target="_blank" title="Facebook">
					<img src="/images/social/facebook-48.png" alt="Facebook" />
				</a>
				<a href="https://x.com/BigJohnGames" target="_blank" title="X">
					<img src="/images/social/x-48.png" alt="X" />
				</a>
			</div>
		</nav>
	)
}

export default Navbar