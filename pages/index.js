import Link from 'next/link';

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/product/1">
          <div>
            <img src="/mug.jpg" alt="mug" width="200"></img>
          </div>
          <strong>Product 1</strong>
        </Link>
      </li>
      <li>
        <Link href="/product/2">
          <div>
            <img src="/bottle.jpg" alt="bottle" width="200"></img>
          </div>
          <strong>Product 2</strong>
        </Link>
      </li>

      <li>
        <Link href="/product/3">
          <div>
            <img src="/happyvase.jpg" alt="vase" width="200" />
          </div>
          <strong>Product 3</strong>
        </Link>
      </li>

      <li>
        <Link href="/product/4">
          <div>
            <img src="/plates.jpg" alt="plates" width="200" />
          </div>
          <strong>Product 4</strong>
        </Link>
      </li>
    </ul>
  );
}
