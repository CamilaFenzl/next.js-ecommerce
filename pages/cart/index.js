import { Button, Col, Container, Row } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { products } from '../../app/products';

export default function Page() {
  const [cookies, setCookie, removeCookie] = useCookies(['camilashop-cart']);
  let currentCartCookie = cookies['camilashop-cart'] ?? {};

  // Object.keys returns an array with all keys of an object
  const cartList = Object.keys(currentCartCookie).map((key) => {
    console.log('this is cookie with id', key);
    const product = products.find((p) => {
      console.log('this is product with id', p.id, 'cookie id', key);
      return p.id == key;
    });
    product.quantity = currentCartCookie[key];
  });
  console.log(cartList, products);
  const toCheckout = () => {
    // window.location.href returns the current address or navigats to a given address
    window.location.href = '/checkout';
  };

  console.log('camilashop-cart', currentCartCookie);
  const removeProduct = (id) => {
    currentCartCookie = currentCartCookie ?? {};
    delete currentCartCookie[id];

    setCookie('camilashop-cart', currentCartCookie, { path: '/' });
  };
  return (
    <div className="cart">
      <Container>
        <Row>
          <Col sm={5}>
            <h1>Shopping Cart</h1>
            <ul>
              {products
                .filter((p) => p.quantity)
                .map((product) => {
                  return (
                    <li data-test-id={`cart-product-${product.id}`}>
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
          </Col>
          <Col>
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
