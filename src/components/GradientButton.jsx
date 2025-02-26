

import styles from './GradientButton.module.css'

const GradientButton = ({ id, children }) => {
	return (
		<button id={id} className={styles.gradientButton}>{children}</button>
	)
}

export default GradientButton