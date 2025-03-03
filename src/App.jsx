
import { useEffect } from 'react'

import './App.css'

import Background from './components/Background'
import Header from './components/header/Header'

import About from './components/main/About'
import Contact from './components/main/Contact'
import Games from './components/main/Games'
import News from './components/main/News'

import Footer from './components/Footer'

const App = () => {

	document.addEventListener('scroll', () => {
		const heroContent = document.querySelector('#hero-content')
		heroContent.style.opacity = 1 - window.scrollY / 400
		heroContent.style.transform = `translateY(-${window.scrollY / 2}px)`
	})

	useEffect(() => {

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible")
				}
			})
		}, { threshold: 0.3 })

        const elements = document.querySelectorAll(".auto-show")
        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
	}, [ ])


	console.log('render')

	return (
		<>
			<Background />
			<div id="app">
				<a id="home"></a>
				<div id="page">
					<Header />
					<main>
						<Games />
						<News />
						<About />
						<Contact />
					</main>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
