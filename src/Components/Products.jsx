import React, { useState } from 'react';

const productsData = [
  {
    id: 1,
    image: require("../Assets/Images/Products/Products-1.jpg"),
    description: "Description of Product 1",
    info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 2,
    image: require("../Assets/Images/Products/Products-1.jpg"),
    description: "Description of Product 1",
    info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 3,
    image: require("../Assets/Images/Products/Products-1.jpg"),
    description: "Description of Product 1",
    info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 4,
    image: require("../Assets/Images/Products/Products-1.jpg"),
    description: "Description of Product 1",
    info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    id: 5,
    image: require("../Assets/Images/Products/Products-1.jpg"),
    description: "Description of Product 1",
    info:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  // Add more product objects as needed
];

export default function Products() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  const visibleProducts = showMore ? productsData : productsData.slice(0, 3);

  return (
    <div>
      <section className='products'>
        <div className='products-heading'>
          <h1>OUR PRODUCTS</h1>
        </div>
        <div className='container'>
          <div className='row'>
            {visibleProducts.map((product, index) => (
              <div key={product.id} className={`products-main col-lg-4 col-md-6 col-sm-12 ${index >= 3 && !showMore ? 'hidden' : ''}`} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                <div className='products-main-info'>
                  <img src={product.image} alt={`Product ${product.id}`} />
                  <p>{product.description}</p>
                  {/* <p>{product.info}</p> */}
                  <a href="">Enquiry Now</a>
                </div>
              </div>
            ))}
          </div>
          {productsData.length > 3 && (
            <div className='view-products-main'>
              <p className='view-products' onClick={handleClick} style={{ transition: 'opacity 0.5s ease-in-out' }}>
                {showMore ? 'View Less' : 'View More'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
