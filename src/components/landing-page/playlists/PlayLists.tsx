import "./style.scss"

type PlayListProps = {
	image: string;
	title: string;
	cost: number;
	percent: number;
	increasing: boolean;
};

function PlayList(props: PlayListProps) {
	const sign = props.increasing ? '+' : '-';
	return (
		<article className="playlist__card">
			<div className="img__container">
				<img className="music__image" src={props.image} alt={props.image} />
				<button className="play__btn">
					<img src="/icons/play.svg" alt="" />
				</button>
			</div>
			<div className="card__details">
				<h3>{props.title}</h3>
				<div className="card__metrics">
					<div>
						<span>value</span>
						<p>{props.cost}mus</p>
					</div>
					<div>
						<span>flux</span>
						<p>
							{sign}
							{props.percent}%
						</p>
					</div>
				</div>
			</div>
		</article>
	);
}

function PlayLists() {
	return (
		<section className="playlist__section" id="musics">
			<h1>Most Featured Playlists</h1>
			<div className="playlists__cards">
				<PlayList
					image="/images/playlist-1.jfif"
					increasing
					percent={3.5}
					cost={353}
					title="Love in the moon"
				/>
				<PlayList
					image="/images/playlist-2.jpg"
					increasing
					percent={3.5}
					cost={353}
					title="Sugar Baby"
				/>
				<PlayList
					image="/images/playlist-3.jfif"
					increasing
					percent={3.5}
					cost={353}
					title="Unconditional Space"
				/>
				<PlayList
					image="/images/playlist-4.jfif"
					increasing
					percent={3.5}
					cost={353}
					title="Into the Universe"
				/>
			</div>
		</section>
	);
}
export default PlayLists;
