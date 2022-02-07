import { useState, useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

export default function InfoComponent({ product }) {

	const [currentColor, setCurrentColor] = useState('');
	const [currentSize, setCurrentSize] = useState('');
	const [colors, setColors] = useState([]);
	const [sizes, setSizes] = useState([]);
	const [qtyProduct, setqQtyProduct] = useState(1);
	const [ formValues, handleInputChange ] = useForm({
		color: '',
	});

	const eqColors = [
		{ val: 'black', text: 'accent-black' },
		{ val: 'red', text: 'accent-red-600' },
	]

	const searchColor = () => {
		const result = product?.options.some(opt => opt.name.toLocaleLowerCase() == 'color');
		if(result) {
			const { values } = product?.options.find(opt => opt.name.toLocaleLowerCase() == 'color');
			setColors( values );
		}
	}

	const searchSize = () => {
		const result = product?.options.some(opt => opt.name.toLocaleLowerCase() == 'size');
		if(result) {
			const { values } = product?.options.find(opt => opt.name.toLocaleLowerCase() == 'size');
			setSizes( values );
		}
	}

	const increaseQtyProduct = () => {
		setqQtyProduct( qty => qty + 1);
	}

	const decreaseQtyProduct = () => {
		if(qtyProduct > 1) {
			setqQtyProduct( qty => qty - 1);
		}
	}

	useEffect(() => {
		if(product) {
			searchColor();
			searchSize();
		}
	}, [product]);

	useEffect(() => {
		if(formValues.color != '') {
			let found = eqColors.some( color => color.val.toLocaleLowerCase() == formValues.color.toLocaleLowerCase() );

			if(found) {
				let find = eqColors.find( color => color.val.toLocaleLowerCase() == formValues.color.toLocaleLowerCase() );
				setCurrentColor(find.text);
			} else {
				setCurrentColor('');
			}

		}
	}, [formValues.color])

	return (
		<>
			<span className='text-gray-400'>
				By credit Shoes
			</span>
			<div className='text-3xl font-bold'>
				{ product.title }
			</div>
			<div>
				<span className='text-xl font-bold'>
					$ { product.price.toFixed(2) }
				</span>
				&nbsp;
				<span className='text-sm text-gray-400'>
					$ { product.price_max.toFixed(2) }
				</span>
			</div>

			<LineDivider />

			<div className='py-4 flex'>
				Color: 
				<div className='radios-colors px-2 py-[2px]'>
					{
						colors.length > 0 && (
							colors.map((c, i) => (
								<ViewColor 
									key={ i }
									color={ c }
									handleInputChange={ handleInputChange }
									currentColor={ currentColor }
								/>
							))
						)
					}
				</div>
			</div>

			<LineDivider />

			<div className='py-4 flex'>
				<span className='pt-1 mr-2'>Size: </span>
				{
					sizes.length > 0 && (
						sizes.map((size, i) => (
							<ViewSize 
								key={ i }
								size={ size }
								currentSize={ currentSize }
								setCurrentSize={ setCurrentSize }
							/>
						))
					)
				}
			</div>

			<LineDivider />

			<SectionQtyAndPrices 
				qtyProduct={ qtyProduct }
				increaseQtyProduct={ increaseQtyProduct }
				decreaseQtyProduct={ decreaseQtyProduct }
				product={ product }
			/>

			<div className='btn-actions py-4 flex'>
				<a className='px-4 py-4 w-1/2 bg-gray-100 text-center font-medium cursor-pointer'>
					Add to favourite
				</a>
				<a className='px-4 py-4 w-1/2 bg-black text-center text-white font-medium cursor-pointer'>
					Add to Cart
				</a>
			</div>

			<div
				className='text-gray-500'
				dangerouslySetInnerHTML={{__html: product.description}} 
			/>
		</>
	)
}

function LineDivider() {
	return (
		<div className="relative flex py-5 items-center">
			<div className="flex-grow border-t border-gray-300"></div>
		</div>
	)
}

function ViewColor(props) {
	const { color, handleInputChange, currentColor } = props;

	return (
		<input
			type='radio'
			className={'mx-1 w-5 h-5 inline-block ' + currentColor}
			onChange={ handleInputChange }
			name='color' 
			value={color}
		/>
	)
}

function ViewSize({ currentSize, size, setCurrentSize }) {
	return (
		<div 
			className={currentSize == size ? 'size-options-active' : 'size-options-default'}
			onClick={ () => setCurrentSize(size) }
		>
			{ size }
		</div>
	)
}

function SectionQtyAndPrices({ qtyProduct, decreaseQtyProduct, increaseQtyProduct, product }) {
	return (
		<div className='qtyandprices flex justify-between items-center py-6'>
			<div className='flex px-1 border-2 rounded-md'>
				<a 
					className='py-2 px-2 cursor-pointer'
					onClick={ () => decreaseQtyProduct() }
				>
					<span className='text-xl'>-</span>
				</a>
				<div className='qty py-3 px-2'>
					{ qtyProduct }
				</div>
				<a 
					className='py-2 px-2 cursor-pointer'
					onClick={ () => increaseQtyProduct() }
				>
					<span className='text-xl'>+</span>
				</a>
			</div>
			<div>
				<span className='text-gray-400'>Total price: </span>
				<span className='font-bold'>
					$ { parseFloat(product.price * qtyProduct).toFixed(2) }
				</span>
			</div>
		</div>
	)
}