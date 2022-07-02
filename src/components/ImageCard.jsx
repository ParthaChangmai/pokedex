import React from 'react';

const ImageCard = ({ images }) => {
	const { back_default, back_shiny, front_default, front_shiny } = images;

	return (
		<div className="grid grid-cols-2">
			<img src={front_default} alt="" />
			<img src={front_shiny} alt="" />
			<img src={back_default} alt="" />
			<img src={back_shiny} alt="" />
		</div>
	);
};

export default ImageCard;
