

import Hero from './Hero'
import Navbar from './Navbar'

const headerStyle = {
	width: '100%',
	height: 'var(--top-nav-height)',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0'
}

const Header = () => {

	return (
		<header style={headerStyle}>
			<Navbar />
			<Hero />
		</header>
	)
}

export default Header