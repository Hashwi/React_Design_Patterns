// import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
// import { UserLoader } from "./UserLoader";
// import { ProductLoader } from "./ProductLoader";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";

function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="456">
        <UserInfo />
      </UserLoader>

      <ProductLoader productId="1234">
        <ProductInfo />
      </ProductLoader> */}

      <ResourceLoader resourceUrl="./users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="./products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
