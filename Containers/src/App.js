// import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
// import { UserLoader } from "./UserLoader";
// import { ProductLoader } from "./ProductLoader";
import { ProductInfo } from "./ProductInfo";
// import { ResourceLoader } from "./ResourceLoader";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLoaclStorageData = key => ()=>{
	return localStorage.getItem(key)
}

const Text =({message})=> <h1>{message}</h1>

function App() {
  return (
    <>
      {/* Laoding single data using less dynamic loader */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="456">
        <UserInfo />
      </UserLoader>

      <ProductLoader productId="1234">
        <ProductInfo />
      </ProductLoader> */}

      {/* Laoding all data using  dynamic loader with passing a few props */}
      {/* <ResourceLoader resourceUrl="./users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="./products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader> */}

      {/* Laoding all data using  anonymous loader wity passing url and name */}

      <DataSource
        getDataFunc={getServerData("./users/123")}
        resourceName="user">
        <UserInfo />
      </DataSource>

	  <DataSource
        getDataFunc={getServerData("./products/1234")}
        resourceName="product">
        <ProductInfo />
      </DataSource>
    </>
  );
}

export default App;
