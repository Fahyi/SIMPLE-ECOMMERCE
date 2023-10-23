import React, { useEffect, useState } from "react";

const ProductHistoryCard = ({ historyItem }) => {
  const [item, setItem] = useState([{}]);
  let temp = [];

  return (
    <div>
      {historyItem.map((a) => (
        <p>{a._id}</p>
      ))}
    </div>
  );
};

export default ProductHistoryCard;
