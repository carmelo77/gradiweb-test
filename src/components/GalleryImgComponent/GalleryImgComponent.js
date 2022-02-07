import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';

export default function GalleryImgComponent({ images }) {
	return (
		<>
			<Carousel 
				className='py-8 px-2 lg:h-80'
				autoPlay
				showStatus={ false }
				showThumbs={ true }
				thumbWidth={ 120 }
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