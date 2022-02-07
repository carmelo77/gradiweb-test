import { useEffect } from "react";

export default function ModalComponent({
	modalConfirm, 
	setModalConfirm, 
	sendProductCart, 
	product,
	currentSize
}) {

	useEffect(() => {
		if(modalConfirm) {
			document.getElementById("popup-modal").classList.add("flex")
			document.getElementById("popup-modal").classList.remove("hidden")
		} else {
			document.getElementById("popup-modal").classList.add("hidden")
			document.getElementById("popup-modal").classList.remove("flex")
		}

	}, [modalConfirm]);
	

	return (
		<div 
			className="overflow-y-auto overflow-x-hidden fixed right-0 bg-gray-100 bg-opacity-70
				left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full hidden" 
			id="popup-modal"
		>
			<div className="relative px-4 w-full max-w-xl h-full md:h-auto">
					<div className="relative py-12 bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex justify-end p-2">
						</div>
						<div className="p-6 pt-0 text-center">
								<svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
								<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want { product.title } { currentSize } size, in the cart?</h3>
								<button 
									data-modal-toggle="popup-modal" 
									type="button" 
									className="text-white bg-gradient-to-r bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
									onClick={ () => sendProductCart() }
								>
									Yes
								</button>
								<button 
									data-modal-toggle="popup-modal" 
									type="button" 
									className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
									onClick={ () => setModalConfirm(modal => !modal) }
								>
									No, cancel
								</button>
						</div>
					</div>
			</div>
		</div>
	);
}
