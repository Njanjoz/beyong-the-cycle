import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/pages/Shop.css';

const ShopPage = ({ setCurrentPage }) => {
  const products = [
    {
      id: 1,
      name: 'Breaking the Cycle Tee',
      price: 25,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      impact: 'Feeds 1 child for 1 week',
      colors: ['Black', 'Navy', 'White']
    },
    {
      id: 2,
      name: 'Heritage Hoodie',
      price: 45,
      image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=400&fit=crop',
      impact: 'Feeds 2 children for 1 week',
      colors: ['Black', 'Gray']
    },
    {
      id: 3,
      name: 'Impact Cap',
      price: 20,
      image: 'https://images.unsplash.com/photo-1452513295034-0009407a32a0?w=400&h=400&fit=crop',
      impact: 'Provides school supplies for 1 child',
      colors: ['Black', 'Gold']
    },
    {
      id: 4,
      name: 'Tote Bag',
      price: 30,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      impact: 'Provides lunch for 1 child for 1 week',
      colors: ['Black', 'Cream']
    },
    {
      id: 5,
      name: 'Impact Bracelet',
      price: 15,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      impact: 'Feeds 1 child for 3 days',
      colors: ['Gold', 'Silver']
    },
    {
      id: 6,
      name: 'The Impact Guide',
      price: 12,
      image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=400&h=400&fit=crop',
      impact: 'Funds 1 mentorship session',
      colors: ['Standard']
    },
  ];

  return (
    <div className="shop-page">
      <button className="back-btn" onClick={() => setCurrentPage('home')}>
        <FiArrowLeft size={20} /> Back
      </button>

      <div className="shop-header">
        <h1>Social Impact Store</h1>
        <p>Every purchase directly funds our mission. Shop with purpose.</p>
      </div>

      <div className="shop-content">
        <aside className="shop-filters">
          <h3>Filter</h3>
          <div className="filter-group">
            <h4>Price Range</h4>
            <input type="range" min="10" max="50" />
          </div>
          <div className="filter-group">
            <h4>Category</h4>
            <label><input type="checkbox" /> Apparel</label>
            <label><input type="checkbox" /> Accessories</label>
            <label><input type="checkbox" /> Books</label>
          </div>
        </aside>

        <div className="products-section">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="product-impact">💚 {product.impact}</p>
                  <div className="product-colors">
                    {product.colors.map((color) => (
                      <span key={color} className="color-tag">{color}</span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <button className="quick-view">Quick View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="why-buy">
        <h2>Why Buy From Our Store?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>🎯 Direct Impact</h3>
            <p>100% of profits fund our programs</p>
          </div>
          <div className="why-card">
            <h3>♻️ Sustainable</h3>
            <p>Eco-friendly materials & ethical production</p>
          </div>
          <div className="why-card">
            <h3>🌍 Global Shipping</h3>
            <p>Worldwide delivery to support local</p>
          </div>
          <div className="why-card">
            <h3>💎 Premium Quality</h3>
            <p>Luxury materials that last</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
