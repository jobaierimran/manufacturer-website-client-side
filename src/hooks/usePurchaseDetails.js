import { useEffect, useState } from "react";

const usePurchaseDetails = (productId) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://thawing-cove-14033.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product];
}
export default usePurchaseDetails;