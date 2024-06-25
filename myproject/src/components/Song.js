import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<Img src={currentSong.cover} alt={currentSong.name}></Img>
			<H2>{currentSong.name}</H2>
			<H3>{currentSong.artist}</H3>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	margin-top: 10vh;
	min-height: 50vh;
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 20%;
	border-radius: 50%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const H2 = styled.h2`
	padding: 3rem 1rem 1rem 1rem;
`;

const H3 = styled.h3`
	font-size: 1rem;
`;

export default Song;
