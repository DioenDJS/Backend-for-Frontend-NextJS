import { Product, Review } from "@/src/app/models";


export async function getProductWithReviews(id: string): Promise<{product: Product, reviews: Review[]}> {
    const productFetch = fetch(`http://localhost:3000/api/products/${id}`,{
        next:{
            revalidate: 10
        }
    });

    const reviewsFetch = fetch(`http://localhost:3000/api/products/${id}/reviews`,{
        next:{
            revalidate: 1 * 60 * 60 // cache de 1 hora
        }
    });

    const [productResponse, reviewsResponse] = await Promise.all([productFetch, reviewsFetch]);

    const [product, reviews] = await Promise.all([
        productResponse.json(),
        reviewsResponse.json(),
    ]);

    return {product, reviews};
}