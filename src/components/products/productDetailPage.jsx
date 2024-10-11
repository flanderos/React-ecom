import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './specificProductCard';


function ProductDetailPage() {
    const { productId } = useParams(); // Retrieves the product ID from the URL
    const [product, setProduct] = useState(null); // State to hold the product details

    console.log(productId); // Log the product ID for debugging

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch product data from the API using the productId
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
                const jsonData = await response.json(); // Parse the JSON response
                console.log("Fetched data:", jsonData); // Log the fetched data for debugging
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`); // Throw an error if the response status is not OK
                }
                setProduct(jsonData.data); // Update the state with the fetched product data
            } catch (error) {
                console.error("Failed to fetch product:", error); // Log any errors that occur during the fetch
            }
        };
    
        fetchProduct(); 
    }, [productId]); 

    return (
        <div>
            {product ? ( // Conditionally render the product details if the product is available
                <ProductCard product={product} />
            ) : (
                <p>Loading product details...</p> // Render a loading message if product data is not yet available
            )}
        </div>
    );
}

export default ProductDetailPage;
