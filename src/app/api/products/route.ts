import { NextResponse } from "next/server";

export async function GET(){
    // resolve over requesting
    const response = await fetch('http://localhost:8001/products', {
        next: {
            revalidate: 10 //cache dinamico - 10 segundos
            //tags:['products'] //cahce sobre demanda
        }
    });

    return NextResponse.json(await response.json());
}