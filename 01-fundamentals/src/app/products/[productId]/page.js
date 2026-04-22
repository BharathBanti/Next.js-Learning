async function ProductDetails({params}){
  const {productId} = await params;

  return <h2 className="text-yellow-500 text-5xl text-center">Product Details Page {productId}</h2>
}

export default ProductDetails;