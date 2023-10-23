export const ItemList = ({ item, addCart, decreaseCart }) => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-4">E-commerce Page</h1>
        <div className="flex flex-wrap justify-center">
          {item.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  Price: Rp{product.price}
                </p>
              </div>
              <div className="px-6 py-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addCart(product)}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 ml-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => decreaseCart(product)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
