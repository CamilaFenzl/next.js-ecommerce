'use client';

import { useRouter } from 'next/router';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const products = [
  { id: 0, imgSrc: '/boobs.jpg', name: 'Natural boobs!' },
  { id: 1, imgSrc: '/rosabody.jpg', name: 'Beautiful vase!' },
  { id: 2, imgSrc: '/boobsvase.jpg', name: 'Diversity for my plants!' },
  { id: 3, imgSrc: '/plussizewoman.jpg', name: 'My beautiful body!' },
];

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>This is the product page {products[+router.query.id]?.name} </h1>
      <h3>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </h3>
      <img src={products[+router.query.id]?.imgSrc} width="400"></img>
    </div>
  );
}
