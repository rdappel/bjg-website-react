
import './News.css'

import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

import GradientButton from '../GradientButton'

const Item = ({ title, created, children }) => {
	return (
		<article className="auto-show">
			<h1>{title}</h1>
			<h2>{created}</h2>
			<div dangerouslySetInnerHTML={{ __html: children }} />
		</article>
	)
}

const News = ({ setNewsLoaded }) => {

	const newsUrl = 'https://gist.githubusercontent.com/rdappel/afb5d0005df6d7445b43ff3a17f65bb6/raw/8737711922c3f5f2046695742019ad8fa2cf99b5/news.json'
	const { data, loading } = useFetch(newsUrl)

	useEffect(() => {
		if (loading) return 
		setNewsLoaded(true)
		console.log('News loaded')
	}, [ loading, setNewsLoaded ])


	return (
		<section id="news">
			<h1>News</h1>

			{!loading && data && data.map(({ title, created, content }, index) => {
				return (<Item key={index} title={title} created={created}>{content}</Item>)
			})}

			<GradientButton id="more-news">More News</GradientButton>
		</section>
	)
}

export default News