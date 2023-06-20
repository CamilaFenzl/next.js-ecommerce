import { Button, Col, Container, Row, InputGroup, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { products } from '../../app/products';

export default function Page() {
  const [cookies, setCookie, removeCookie] = useCookies(['camilashop-cart']);

  const currentCartCookie = cookies['camilashop-cart'] ?? {};
  console.log('camilashop-cart', currentCartCookie);
  const confirmOrder = (id) => {
    let currentCartCookie = cookies['camilashop-cart'];
    currentCartCookie = currentCartCookie ?? {};
    delete currentCartCookie[id];

    setCookie('camilashop-cart', currentCartCookie, { path: '/' });
  };
  return (
    <div className="cart">
      <Container>
        <Row>
          <Col sm={5}>
            <h1>Checkout page</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text>First name</InputGroup.Text>
              <Form.Control data-test-id="checkout-first-name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Last name</InputGroup.Text>
              <Form.Control data-test-id="checkout-last-name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control data-test-id="checkout-email" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Adress</InputGroup.Text>
              <Form.Control data-test-id="checkout-adress" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>City</InputGroup.Text>
              <Form.Control data-test-id="checkout-city" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Postal code</InputGroup.Text>
              <Form.Control data-test-id="checkout-postal-code" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Country</InputGroup.Text>
              <Form.Control data-test-id="checkout-country" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Credit Card</InputGroup.Text>
              <Form.Control data-test-id="checkout-credit-card" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Expiration date</InputGroup.Text>
              <Form.Control data-test-id="checkout-expiration-date" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>Security code</InputGroup.Text>
              <Form.Control data-test-id="checkout-security-code" />
            </InputGroup>

            <Button
              variant="primary"
              size="sm"
              onClick={() => confirmOrder()}
              data-test-id="checkout-confirm-order"
            >
              Confirm order
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
