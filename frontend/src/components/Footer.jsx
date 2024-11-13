import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
    const curentYear = new Date().getFullYear();

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'> &copy; ProShop {curentYear}</Col>
            </Row>
        </Container>
    </footer>
  )
}
