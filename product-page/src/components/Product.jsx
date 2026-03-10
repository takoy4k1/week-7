function Product({ product }) {
  return (
    <div className="bg-amber-100 rounded-xl shadow-md p-4 ">
      <img
        src={product.image}
        alt={product.name}
        className=" "
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.brand}</p>
      <p className="text-gray-600 text-sm mt-2">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-3 text-pink-400">
        {product.price}
      </p>
    </div>
  );
}

export default Product;