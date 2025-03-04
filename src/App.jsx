
import { useState, useEffect, useRef } from 'react'

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

	const [ gamesLoaded, setGamesLoaded ] = useState(false)
	const [ newsLoaded, setNewsLoaded ] = useState(false)
	const observerRef = useRef(null)

	useEffect(() => {
		observerRef.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return
				entry.target.classList.add('visible')
			})
		}, { threshold: 0.3 })


        return () => observerRef.current.disconnect()
	}, [ ])

	useEffect(() => {
		if (!gamesLoaded || !newsLoaded) return

		console.log('linking observer')
		const elements = document.querySelectorAll('.auto-show')
		elements.forEach(element => observerRef.current.observe(element))
	}, [ gamesLoaded, newsLoaded ])


	return (
		<>
			<Background />
			<div id="app">
				<a id="home"></a>
				<div id="page">
					<Header />
					<main>
						<Games setGamesLoaded={setGamesLoaded} />
						<News setNewsLoaded={setNewsLoaded} />
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
