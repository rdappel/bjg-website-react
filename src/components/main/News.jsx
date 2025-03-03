
import GradientButton from '../GradientButton'
import './News.css'

const Item = ({ title, created, children }) => {
	return (
		<article className="auto-show">
			<h1>{title}</h1>
			<h2>{created}</h2>
			{ children }
		</article>
	)
}

const News = () => {
	return (
		<section id="news">
			<h1>News</h1>
			<Item title="Cube Creator X Available for the Nintendo Switch" created="November 14, 2019">
				<p>That&apos;s right. In conjunction with Arc Systems, we&apos;ve released the latest version in the Cube Creator franchise for the Nintendo Switch system (NOA - The European/Australian version will release next week 11/14/19). </p>
				<p>Have a look at the <a href="https://youtu.be/xB4DIZrplfs">trailer</a>!</p>
				<p>Otherwise, you&apos;ll be able to find it in the eShop now. Enjoy!</p>
			</Item>

			<Item title="Update from President Ken on Cube Creator 3D 1.2 progress" created="October 27, 2016">
				<p>Dear Loyal Cube Creator 3D Players,</p>
				<p>There has been a slight delay in development of Cube 1.2. We are a family business. As such, we have had an unexpected tragedy in our family and that has required much of our time to be devoted to mourning, grieving and dealing with many family matters.</p>
				<p>I would also like to let everyone know we are down to last our last 50 bugs. We are working hard to eliminate these as fast as possible. We are back to 100 percent and are knocking off these bugs as quickly as we can.</p>
				<p>Thank you for all of your support.</p>
				<p>Ken Patterson, President of Big John Games</p>
			</Item>

			<Item title="Cube Creator 3D moves to #7 all-time on Nintendo of Japan&apos;s 3DS download chart" created="August 14, 2016">
				<p>This just in! Cube Creator 3D has moved into the #7 position on the 3DS all-time download chart, according to Nintendo of Japan&apos;s website. Cube Creator 3D has jumped ahead Super Mario Bros, Smash Bros, and Super Mario Bros 3 in downloads on the 3DS in Japan.</p>
			</Item>

			<Item title="Cube Creator 1.2 list of features set" created="June 9, 2016">
				<p>We&apos;ve been hard at work on the Cube Creator 3D 1.2 update. We&apos;ve added in more features to make the update more robust, some even in the last few weeks. Here is the complete list of features for release sometime this Fall:</p>
				<p>
					<ul>
						<li>Multiplayer up to 4 players [local]</li>
						<li>Multiplayer Combat with other players</li>
						<li>New Magic Wand Projection Weapon</li>
						<li>New Texture Packs</li>
						<li>New Music</li>
						<li>3rd-person Viewing Option</li>
						<li>New Flag Object & &quot;Capture the Flag&quot; gameplay</li>
						<li>Transfer your friends&apos; worlds & share them on your 3DS</li>
						<li>Animated players</li>
						<li>eShop Store Access for Upgrades</li>
					</ul>
				</p>
			</Item>


			<Item title="Lionel City Builder 3D set for NOA release on January 14" created="January 7, 2016">
				<p>Our newest 3DS title, Lionel City Builder 3D, is approved and ready for launch on Thursday, January 14 2016. After the buzz of the Holidays has hopefully worn off, Lionel City Builder 3D will be available in the Nintendo eShop [NOA] for an introductory price of $4.99 until 1/28. After the introductory period, the price will be $7.99.</p>
				<p>Keep an eye out on Facebook and Twitter for more release info by searching for the hashtag #LionelCityBuilder3D. </p>
			</Item>

			<GradientButton id="more-news">More News</GradientButton>
		</section>
	)
}

export default News