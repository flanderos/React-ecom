import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './specificProductCard';


function ProductDetailPage() {
    const { productId } = useParams(); 
    const [product, setProduct] = useState(null); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
                const jsonData = await response.json(); 
              
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                setProduct(jsonData.data); 
            } catch (error) {
                alert("Failed to fetch product:", error); 
            }
        };
    
        fetchProduct(); 
    }, [productId]); 

    return (
        <div>
            {product ? ( 
                <ProductCard product={product} />
            ) : (
                <p>Loading product details...</p> 
            )}
        </div>
    );
}

export default ProductDetailPage;
