
import './Footer.css'

const Footer = () => {

	const year = new Date().getFullYear()

	return (
		<footer>
			<p>&copy; 2008 - <span className="current">{year}</span> Digital ContentLLC. All rights reserved.</p>
		</footer>
	)
}

export default Footer
