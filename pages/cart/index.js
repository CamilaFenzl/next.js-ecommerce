import { Col, Container, Row } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

export default function Page() {
  const [cookies] = useCookies(['camilashop-cart']);
  const currentCartCookie = cookies['camilashop-cart'] ?? {};
  console.log('camilashop-cart', currentCartCookie);
  return (
    <div className="cart">
      <Container>
        <Row>
          <Col sm={5}>
            <h1>Shopping Cart</h1>
            <ul>
              {Object.keys(currentCartCookie).map((key) => {
                return (
                  <li data-test-id={`cart-product-${key}`}>
                    <strong>Product id: {key}</strong> |
                    <span> Quantity: {currentCartCookie[key]}</span>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
