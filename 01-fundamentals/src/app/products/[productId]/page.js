async function ProductDetails({params}){
  const {productId} = await params;

  return <h2>Product Details Page {productId}</h2>
}

export default ProductDetails;