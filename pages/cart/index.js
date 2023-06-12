export default function Page() {
  const [cookies, setCookie, removeCookie] = useCookies(['camilashop-cart']);
  const currentCartCookie = cookies['camilashop-cart'] ?? {};
  const parsedCart = JSON.parse(currentCartCookie);

  return (
    <div className="about">
      <h1>Shopping Cart</h1>
      <ul>
        {Object.keys(parsedCart).map((key) => {
          <li>
            <strong>Product id: {key}</strong> |
            <span> Quantity: {parsedCart[key]}</span>
          </li>;
        })}
      </ul>
    </div>
  );
}
