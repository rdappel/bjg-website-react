

const backgroundStyle = {
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	zIndex: '-2',
}

const imageStyle = {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	filter: 'blur(2px)',
}

const Background = () => {
	return (
		<div id="background" style={backgroundStyle}>
			<img src="/images/cityscape-bg.png" alt="Background image" style={imageStyle} />
		</div>
	)
}

export default Background