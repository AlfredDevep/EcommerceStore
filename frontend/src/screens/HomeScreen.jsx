import { Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice.js';
import  Loader  from '../components/Loader'; 
import { Message } from '../components/Message';

export const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
        { isLoading ? (
          <Loader />
        ) : error ? (<Message variant='danger'> { error?.data.message || error.error} </Message>) : (<>
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
        </>)}
    </>
  );
};