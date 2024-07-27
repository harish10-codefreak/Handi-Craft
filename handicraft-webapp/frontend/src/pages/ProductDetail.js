import React from 'react';

const ProductDetail = ({ match }) => {
  return (
    <div>
      <h2>Product Detail for {match.params.id}</h2>
    </div>
  );
};

export default ProductDetail;
