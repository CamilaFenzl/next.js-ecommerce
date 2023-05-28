'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return <h1>This is the product page. {router.query.slug}</h1>;
}
