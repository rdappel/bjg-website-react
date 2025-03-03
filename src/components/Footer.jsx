
const footerStyle = {
	color: 'white',
	textAlign: 'center',
	padding: '20px',
	fontSize: '1rem',
	backgroundColor: '#1f1f1f'
}

const Footer = () => {

	const year = new Date().getFullYear()

	return (
		<footer style={footerStyle}>
			<p>&copy; 2008 - <span className="current">{year}</span> Digital ContentLLC. All rights reserved.</p>
		</footer>
	)
}

export default Footer
