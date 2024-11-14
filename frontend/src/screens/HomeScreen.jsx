import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
import axios from 'axios';

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products'); // Ensure the URL is correct
        console.log('Fetched products:', data); // Debugging log
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <p>No products available</p>
        )}
      </Row>
    </>
  );
};