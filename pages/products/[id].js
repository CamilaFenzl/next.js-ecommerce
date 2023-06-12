'use client';

import { useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const products = [
  {
    id: 0,
    imgSrc: '/boobs.jpg',
    name: 'Título produto 0!',
    price: 10,
    description: 'Handmade product.',
  },
  {
    id: 1,
    imgSrc: '/rosabody.jpg',
    name: 'Título produto 1!',
    price: 20,
    description: 'Handmade product.',
  },
  {
    id: 2,
    imgSrc: '/yogadame.jpg',
    name: 'Título produto 2!',
    price: 30,
    description: 'Handmade product.',
  },
  {
    id: 3,
    imgSrc: '/plussizewoman.jpg',
    name: 'Título produto 3!',
    price: 40,
    description: 'Handmade product.',
  },
];

export default function Page() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const currentProduct = products[+router.query.id];
  const [cookies, setCookie, removeCookie] = useCookies(['camilashop-cart']);

  const currentCartCookie = cookies['camilashop-cart'] ?? {};
  const parsedCart = JSON.parse(currentCartCookie);

  useEffect(() => {
    console.log('Cookies: ', cookies);
  }, [cookies]);

  const changeCart = () => {
    console.log(cookies);
    parsedCart[currentProduct.id] = quantity;
    setCookies('camilashop-cart', JSON.stringify(parsedCart), { path: '/' });
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm={5}>
            <Image src={currentProduct?.imgSrc} fluid />
          </Col>
          <Col sm={7}>
            <h1>{currentProduct?.name} </h1>
            <p>{currentProduct?.description}</p>

            <Button variant="primary" size="sm" onClick={changeCart()}>
              Buy
            </Button>

            <ButtonGroup size="sm">
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
