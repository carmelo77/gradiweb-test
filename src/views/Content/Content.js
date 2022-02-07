import { useEffect, useState } from 'react';

import GalleryImgComponent from '../../components/GalleryImgComponent';
import InfoComponent from '../../components/InfoComponent/';
import { getProduct } from '../../api/products';

export default function Content() {

	const [product, setProduct] = useState(null);

	const index = async () => {
		try {
			const response = await getProduct();
			setProduct(response);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		index();
	}, []);

	return (
		<>
			{
				!!(product) && (
					<div className='grid md:grid-cols-2 sm:grid-cols-1'>
						<div className='w-full text-white px-4'>
							{
								product.images.length > 0 && (
									<GalleryImgComponent 
										images={ product.images }
									/>
								)
							}
						</div>
						<div className='w-full lg:py-8 md:py-4 px-12'>
							<InfoComponent 
								product={ product }
							/>
						</div>
					</div>
				)
			}
		</>
	);
}