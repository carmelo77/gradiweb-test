import { Carousel } from 'react-responsive-carousel';

export default function GalleryImgComponent({ images }) {
	return (
		<>
			<Carousel 
				className='py-8 px-2'
				autoPlay
				showStatus={ false }
				showThumbs={ false }
				// dynamicHeight={ true }
			>
				{
					images.length > 0 && (
						images.map((img, i) => (
							<div key={ i }>
								<img src={ img } />
							</div>
						))
					)
				}
			</Carousel>
		</>
	);
}