'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { products } from '../products';
import './products.scss';
export default function Page({ changeProduct }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const currentProduct = products[+router.query.id];

  const changeCart = () => {
    changeProduct(currentProduct.id, quantity);
    alert('Product added to cart!');
  };
  const inputOnChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <>
      <Container>
        <Row>
          <Col sm={5}>
            <Image
              src={currentProduct?.imgSrc}
              fluid
              data-test-id="product-image"
            />
          </Col>
          <Col sm={7}>
            <h1>{currentProduct?.name} </h1>
            <p>{currentProduct?.description}</p>
            <div>
              <span data-test-id="product-price">{currentProduct?.price}</span>{' '}
              <span>€</span>{' '}
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => changeCart()}
              data-test-id="product-add-to-cart"
            >
              Buy
            </Button>
            <InputGroup className="mb-3 mx-3 product-controls">
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </Button>
              <Form.Control
                defaultValue={quantity}
                value={quantity}
                onChange={inputOnChange}
                data-test-id="product-quantity"
              />
              <Button
                variant="outline-secondary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
