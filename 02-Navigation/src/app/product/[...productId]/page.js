async function Page({ params }) {
  const { productId } = await params;
  console.log(params);

  return (
    <div>
      <h1 className="text-2xl text-amber-300 m-3">Product Details Page</h1>
      <h3 className="m-3">This is product of Id: {productId[0]} and size is: {productId[1]} and color is: {productId[2]}</h3>
    </div>
  )
}

export default Page;