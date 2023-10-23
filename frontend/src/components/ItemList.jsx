export const ItemList = ({ item, addCart, decreaseCart }) => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-4">Produk Makanan</h1>
        <div className="flex flex-wrap justify-center">
          {item.map((product) => (
            <div
              key={product.id}
              className="flex max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-6 py-4">
                <a href="">
                  <img
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt=""
                    width="100"
                    height="100"
                  />
                </a>
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  Price: Rp{product.price}
                </p>
              </div>
              <div className=" px-6 py-4">
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
