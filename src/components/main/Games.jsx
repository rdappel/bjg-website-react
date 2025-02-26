
import './Games.css'

import GradientButton from '../GradientButton'


const Game = ({ title, imageUrl, children }) => {
	return (
		<div className="game">
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			{children}
		</div>
	)
}

const Games = () => {
	return (
		<section id="games">
			<h1>Games</h1>

			<Game title="Cube Creator X" imageUrl="/images/games/cube-creator-x.gif">
				<p>Big John Games, in a partnership with ARC Systems Works, brings the latest adaptation of the Cube Creator series to the Nintendo Switch with Cube Creator X. The Nintendo Switch allows Cube Creator X to stretch its legs and accommodate much larger worlds which feel vast and alive (more than three times the total cubes in Cube Creator DX). ARC Systems&apos; incredible history of brilliant art direction is evident in a massive cosmetic upgrade in character and level design. Multiplayer is supported for Competitive and Cooperative styles of play up to four players. In Cube Creator X, players can choose Creative Mode to create their masterpiece worlds. Robust editing tools can be utilized to help unleash player&apos;s creativity more efficiently. In Adventure Mode, players will embark on various quests and fight epic battles. Players create shelters, and even fortresses and cities. Many new items have been added, including weapons, architecture, and agriculture cubes. Half-cubes have also been added, along with the ability for the main character to experience hot & cold, as well as the ability to grow in size after consuming food items. The Stages Mode allows players to create stage levels with a jumping-off point and a goal to be accomplished. Players can add movement blocks, monsters, treasure chests, along with many more new, unique cubes. The players&apos; stages can be uploaded to the Cube Creator X community (the Plaza) to be shared with anyone looking for their next challenging stage to conquer.</p>
			</Game>
			<Game title="Lionel City Builder 3D: Rise of the Rails" imageUrl="/images/games/lionel.jpg">
				<p>Create your own world and drive your custom-built train right through it in Lionel City Builder 3D: Rise of the Rails. Choose from Creative Mode, where you&apos;ll create your own cities to drive your custom trains through, or from Story Mode, where you&apos;ll learn to drive trains, repair tracks, and help keep the rail system alive. The game&apos;s innovative design and Stereoscopic 3D gameplay graphics are perfect for train-lovers and gamers alike, providing a creative and strategic game play experience with a dose of Lionel fun that&apos;s guaranteed to be off the tracks. Features: Select from hundreds of objects to build amazingly unique environments. Learn to drive numerous trains, and pick up/deliver cargo and passengers efficiently. Unlock various exciting achievements for more action-packed train track building and world creation. Stereoscopic 3D gameplay graphics enable you to view your worlds from many wide-ranging camera perspectives. Share your creative worlds with friends via QR Codes.</p>
			</Game>
			<Game title="Cube Creator 3D" imageUrl="/images/games/cube-creator.jpg">
				<p>Craft your own realm in stunning randomly generated worlds in Cube Creator 3D. You can also gather resources, combine elements, explore & combat strange creatures to survive in this expansive, cubic domain. Creative Mode allows you to explore worlds in true Stereoscopic 3D. The dual-screen presentation keeps your resource inventory free from cluttering the gameplay screen. Easy-to-use touchscreen controls make the open-world gameplay better than ever. Break-through dynamic lighting & effects positions Cube Creator 3D a cube above the rest. In Survival Mode, players can explore, craft, mine, & battle in forest, desert, mountain, & tundra-themed worlds. To start, you must use only your bare hands to gather resources to then craft tools & weapons, & to build protective shelters. Building better tools & weapons allows you to explore caves, mine their precious ores, & combat the many malicious monsters. Craft, explore and conquer these voxel worlds to make them entirely your own realm.</p>
			</Game>
			<Game title="Thorium Wars: Attack of the Skyfighter" imageUrl="/images/games/thorium_skyfighter.jpg">
				<p>Humanity thought that it&apos;s victory in the war with the Thorions, a race of fearless war machines run amok, would restore peace to the Earth. But a generation later, humanity&apos;s worst fear is realized: the Thorions have returned, seeking revenge and aiming to wipe out the human race in a quest to dominate the galaxy. It&apos;s up to you to go on the attack against the Thorions and defeat them in battle once more. Pilot your choice of three Skyfighters across alien worlds to protect human colonies and destroy Thorion forces. Blast away at hulking mechs, menacing gun turrets, and swarming drones. Push your dogfighting skills to their limits against adept Thorion Skyfighters. Indra and Shango Skyfighters join the original Utu to provide fighters suited to any style of air combat Choose between three difficulty levels before playing or replaying any mission Earn medals at every level of difficulty by completing missions with minimal losses Use new Boost maneuvers to dodge gunfire and power-up your piloting skills Blast away with high speed gunfire or deliver additional destruction to the enemy with new Charged shot mode.</p>
			</Game>
			<Game title="Strike Force Foxx" imageUrl="/images/games/strike_force.jpg">
				<p>Your nation is depending on you to save it in Strike Force Foxx on the Nintendo 3DSTM, the newest release from Big John Games and Gamers Digital due out in July 2014. Strike Force Foxx is a side-scrolling, 3D retro chopper attack-and-rescue game with a modern feel. You are Captain Raymond Foxx, guiding your Razor-One helicopter through intense missions, battling the enemy and saving your citizens from terror. The mission is in: you&apos;ve been ordered to destroy the terrorist organization, Grid, who is taking over your country. You also need to rescue all of your civilians that have been taken hostage by Grid, while you pursue the elusive Dr. Synchros, the mastermind behind the hostile takeover. Players will take to the air in their helicopter in more than 35 missions to eliminate the numerous hazardous obstacles, including gunmen, tanks, helicopters, planes, machine-gunning jeeps, heat-seeking missiles, gunboats, battleships, submarines, and more. Along the way, players can upgrade their chopper with new, more powerful weapons to eradicate the enemy more efficiently. Players will be able to unleash a troop of mercenaries into a battle zone to help beat back the enemy, so the player can focus on rescuing civilians.</p>
			</Game>

			<GradientButton id="more-games">More Games</GradientButton>
		</section>
	)
}

export default Games