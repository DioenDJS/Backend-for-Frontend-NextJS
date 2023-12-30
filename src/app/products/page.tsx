import { ProductsList } from "@/src/components/productList";
import { Suspense } from "react";

async function ProductsListPage(){

    return(
        <div>
            <Suspense fallback={'loading... '}>
                <ProductsList/>
            </Suspense>
        </div>
    )
}

export default ProductsListPage;