

export const getProduct = async () => {

    const params = {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
        },
    }

    try {
        const res = await fetch('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js', params);
        const response = await res.json();
        
        return response;
    } catch (err) {
        console.log(err);
    }
}