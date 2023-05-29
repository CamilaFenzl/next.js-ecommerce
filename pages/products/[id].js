'use client';

import { useRouter } from 'next/router';

const products = [
  { id: 1, name: 'mug.jpg' },
  { id: 2, name: 'bottle.jpg' },
  { id: 3, name: 'happyvase.jpg' },
  { id: 4, name: 'plates.jpg' },
];

export default function Page() {
  const router = useRouter();
  return <h1>This is the product page {router.query.id} </h1>;
}
