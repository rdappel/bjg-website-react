
import './Contact.css'

const Contact = () => {
	return (
		<section id="contact">
					<h1>Contact Us</h1>
					<div>
						<h2>Contact Form</h2>
						<form id="contact-form">
							<label htmlFor="name">Name:</label>
							<input type="text" id="name" name="name" required />
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" name="email" required />
							<label htmlFor="subject">Subject:</label>
							<input type="text" id="subject" name="subject" required />
							<label htmlFor="category"></label>
							<select id="category" name="category">
								<option value="general">General Information</option>
								<option value="support">Product Support</option>
								<option value="website">Website Issues</option>
							</select>
							<label htmlFor="message">Message:</label>
							<textarea id="message" name="message" required></textarea>
							<button type="submit">Send</button>
						</form>
					</div>

					<div>
						<h2>Mailing Address</h2>
						<p className="address">Big John Games dba Digital Content, LLC<br />
							7483 Cahill Road<br />
							Edina, MN 55439</p>
						<h2>Support</h2>
						<h3>How to Buy</h3>
						<p>You can buy our games for your Nintendo Switch by visiting Nintendo Online. For a Quick Guide to
							the process check out the following page on Nintendo&apos;s site:&nbsp;
							<a href="https://www.nintendo.com/us/switch/online/">https://www.nintendo.com/us/switch/online/</a>
						</p>
						<h3>Nintendo Support</h3>
						<p>For support with your Nintendo Switch, please visit the Nintendo Support site:&nbsp;
							<a href="https://en-americas-support.nintendo.com/app/home">https://en-americas-support.nintendo.com/app/home</a>
						</p>
						<h3>Need More Specific Support?</h3>
						<p>For support please use the Contact form provided and choose &quot;Product Support&quot; from the drop-down.</p>
					</div>
				</section>
	)
}

export default Contact