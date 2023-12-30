import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params} : {params : {productId: string}}){
    // resolve over requesting
    const response = await fetch(`http://localhost:8002/reviews/?product_id=${params.productId}`, {
        next: {
            revalidate: 10 //cache dinamico - 10 segundos
            //tags:['products'] //cahce sobre demanda
        }
    });

    return NextResponse.json(await response.json());
}