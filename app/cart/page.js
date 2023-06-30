import { Button, Col, Container, Row } from 'react-bootstrap';
import { products } from '../../app/products';

export default function Page({ removeProduct, currentCartCookie }) {
  console.log(currentCartCookie);
  // Object.keys returns an array with all keys of an object
  const cartList = Object.keys(currentCartCookie).map((key) => {
    const product = products.find((p) => {
      return p.id == key;
    });
    product.quantity = currentCartCookie[key];
    return product;
  });
  const toCheckout = () => {
    // window.location.href returns the current address or navigats to a given address
    window.location.href = '/checkout';
  };
  return (
    <div className="cart">
      <Container>
        <Row>
          <Col sm={5}>
            <h1>Shopping Cart</h1>
            <ul>
              {cartList
                .filter((p) => p.quantity)
                .map((product) => {
                  return (
                    <li
                      key={product.id}
                      data-test-id={`cart-product-${product.id}`}
                    >
                      <strong>{product.name}</strong>|
                      <span> Quantity: {product.quantity}</span>
                      <div>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => removeProduct(product.id)}
                          data-test-id={`cart-product-remove-${product.id}`}
                        >
                          Remove
                        </Button>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <Button
              variant="primary"
              size="sm"
              onClick={() => toCheckout()}
              data-test-id="cart-checkout"
            >
              To checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
