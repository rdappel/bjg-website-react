
import './Games.css'

import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

import GradientButton from '../GradientButton'


const Game = ({ title, imageUrl, children }) => {
	return (
		<div className="game auto-show">
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			{children}
		</div>
	)
}

const Games = ({ setGamesLoaded }) => {

	const gamesUrl = 'https://gist.githubusercontent.com/rdappel/07e39bfbf2d3d2d4c2337beebc42bfd4/raw/c6e88dd982bda2bb55c566ec130e2806814413a8/games.json'
	const { data, loading } = useFetch(gamesUrl)

	useEffect(() => {
		if (loading) return
		setGamesLoaded(true)
		console.log('Games loaded')
	}, [ loading, setGamesLoaded ])

	return (
		<section id="games">
			<h1>Games</h1>
			{!loading && data && data.map(({ title, image, description }, index) => (
				<Game key={index} title={title} imageUrl={image}><p>{description}</p></Game>
			))}
			<GradientButton id="more-games">More Games</GradientButton>
		</section>
	)
}

export default Games