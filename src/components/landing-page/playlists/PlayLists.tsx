import { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

type PlayListProps = {
	image: string;
	title: string;
	cost: number;
	percent: number;
	increasing: boolean;
};

export function PlayList(props: PlayListProps) {
	const sign = props.increasing ? "+" : "-";
	return (
		<article className="playlist__card">
			<div className="img__container">
				<img
					className="music__image"
					src={props.image}
					alt={props.image}
				/>
				<img
					className="music__image blur"
					src={props.image}
					alt={props.image}
				/>
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
	const [featPlaylists, setFeatPlaylists] = useState([]);
	const token = useSelector((state) => state.token.value);

	useEffect(() => {
		async function getPlaylists() {
			const response = await fetch(
				"https://api.spotify.com/v1/browse/featured-playlists?limit=4",
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);

			const data = await response.json();
			const playlists = data.playlists.items;
			setFeatPlaylists(playlists);
		}

		if (token !== "") {
			getPlaylists();
		}
	}, [token]); // Run effect when token changes

	return (
		<section className="playlist__section" id="musics">
			<h1>Most Featured Playlists</h1>
			<div className="playlists__cards">
				{featPlaylists.length > 0 ? (
					featPlaylists.map((playlist, index) => (
						<PlayList
							key={index}
							image={playlist.images[0].url}
							increasing={true}
							percent={3.5}
							cost={353}
							title={playlist.name}
						/>
					))
				) : (
					<>
						<div className="playlists__cards">
							<div className="playlists__card loading"></div>
							<div className="playlists__card loading"></div>
							<div className="playlists__card loading"></div>
							<div className="playlists__card loading"></div>
						</div>
					</>
				)}
			</div>
		</section>
	);
}
export default PlayLists;
