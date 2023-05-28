import Link from 'next/link';

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/product/1">
          <div>
            <img src="https://placehold.co/200?text=Product+1" />
          </div>
          <strong>Product 1</strong>
        </Link>
      </li>

      <li>
        <Link href="/product/2">
          <div>
            <img src="https://placehold.co/200?text=Product+2" />
          </div>
          <strong>Product 2</strong>
        </Link>
      </li>

      <li>
        <Link href="/product/3">
          <div>
            <img src="https://placehold.co/200?text=Product+3" />
          </div>
          <strong>Product 3</strong>
        </Link>
      </li>

      <li>
        <Link href="/product/4">
          <div>
            <img src="https://placehold.co/200?text=Product+4" />
          </div>
          <strong>Product 4</strong>
        </Link>
      </li>
    </ul>
  );
}
