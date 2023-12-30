import Link from "next/link";
import { Product } from "../app/models";

async function getProducts(): Promise<Product[]>{
    // resolve over requesting
    const response = await fetch('http://localhost:3000/api/products', {
        next: {
            revalidate: 10 //cache dinamico - 10 segundos
            //tags:['products'] //cahce sobre demanda
        }
    });

    return response.json();

}

export async function ProductsList(){

    const products = await getProducts()
    return(
        <div>
            <h1>Listagem de produtos</h1>
            <ul>
                {products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <li>{product.name} - {product.price}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
