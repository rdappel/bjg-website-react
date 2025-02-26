

import './GradientButton.css'

const GradientButton = ({ id, children }) => {
	return (
		<button id={id} className="gradient-button">{children}</button>
	)
}

export default GradientButton