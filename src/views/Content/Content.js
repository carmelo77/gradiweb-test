import { useEffect, useState } from 'react';

import GalleryImgComponent from '../../components/GalleryImgComponent';
import InfoComponent from '../../components/InfoComponent/';
import { getProduct } from '../../api/products';

export default function Content() {

	const [product, setProduct] = useState(null);

	const index = async () => {
		try {
			const response = await getProduct();
			console.log(response);
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
					<div className='w-100 flex'>
						<div className='w-2/5 text-white px-4'>
							{
								product.images.length > 0 && (
									<GalleryImgComponent 
										images={ product.images }
									/>
								)
							}
						</div>
						<div className='w-3/5 py-8 px-12'>
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