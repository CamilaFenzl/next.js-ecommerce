import Link from 'next/link';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';
import { products } from '../app/products';
export default function Page() {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={6} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imgSrc}
                  alt={`product ${product.name}`}
                  fluid
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link
                    href={`/products/${product.id}`}
                    data-test-id={`product-${product.id}`}
                  >
                    <Button variant="color" size="sm">
                      View product
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
