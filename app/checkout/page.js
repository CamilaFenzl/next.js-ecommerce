import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

export default function Page() {
  return (
    <div className="cart">
      <Container>
        <Row>
          <Col sm={5}>
            <h1>Checkout page</h1>
            <form id="checkout-form" action="/thanks">
              <InputGroup className="mb-3">
                <InputGroup.Text>First name</InputGroup.Text>
                <Form.Control data-test-id="checkout-first-name" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Last name</InputGroup.Text>
                <Form.Control data-test-id="checkout-last-name" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control data-test-id="checkout-email" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Adress</InputGroup.Text>
                <Form.Control data-test-id="checkout-adress" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>City</InputGroup.Text>
                <Form.Control data-test-id="checkout-city" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Postal code</InputGroup.Text>
                <Form.Control data-test-id="checkout-postal-code" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Country</InputGroup.Text>
                <Form.Control data-test-id="checkout-country" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Credit Card</InputGroup.Text>
                <Form.Control data-test-id="checkout-credit-card" required />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Expiration date</InputGroup.Text>
                <Form.Control
                  data-test-id="checkout-expiration-date"
                  required
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Security code</InputGroup.Text>
                <Form.Control data-test-id="checkout-security-code" required />
              </InputGroup>

              <Button
                variant="primary"
                size="sm"
                type="submit"
                data-test-id="checkout-confirm-order"
              >
                Confirm order
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
