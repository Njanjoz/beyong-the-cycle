import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import '../styles/Shop.css';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Breaking the Cycle Tee',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      impact: 'Feeds 1 child for 1 week',
      description: 'Premium cotton t-shirt with mission-driven design'
    },
    {
      id: 2,
      name: 'Heritage Hoodie',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=400&fit=crop',
      impact: 'Feeds 2 children for 1 week',
      description: 'Luxe fleece hoodie for winter warriors'
    },
    {
      id: 3,
      name: 'Impact Cap',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1452513295034-0009407a32a0?w=400&h=400&fit=crop',
      impact: 'Provides school supplies for 1 child',
      description: 'Classic structured cap in black & gold'
    },
    {
      id: 4,
      name: 'Tote Bag',
      price: '$30',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      impact: 'Provides lunch for 1 child for 1 week',
      description: 'Eco-friendly canvas tote bag'
    },
    {
      id: 5,
      name: 'Impact Bracelet',
      price: '$15',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      impact: 'Feeds 1 child for 3 days',
      description: 'Beaded bracelet with gold accents'
    },
    {
      id: 6,
      name: 'The Impact Guide',
      price: '$12',
      image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=400&h=400&fit=crop',
      impact: 'Funds 1 mentorship session',
      description: 'Educational guide on breaking poverty cycles'
    }
  ];

  return (
    <section className="shop" id="shop">
      <div className="shop-header">
        <h2 className="section-title">
          <FiShoppingBag size={28} className="title-icon" />
          SOCIAL IMPACT STORE
        </h2>
        <p className="section-subtitle">
          Every purchase directly funds our mission. Choose your impact.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-overlay">
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <span className="product-impact">💚 {product.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-cta">
        <p>Every purchase matters. Join our movement.</p>
        <button className="primary-cta">SHOP NOW</button>
      </div>
    </section>
  );
};

export default Shop;
