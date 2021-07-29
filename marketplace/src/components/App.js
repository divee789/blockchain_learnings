import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import "./App.css";

const App = () => {
  useEffect(() => {
    loadWeb3();
    loadBlockChainData();
  }, []);

  const [state, setState] = useState({
    account: "",
    productCount: 0,
    products: [],
    loading: true,
    marketPlace: null,
  });

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockChainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      const productCount = await marketplace.methods.productCount().call();
      productCount.toString();
      let products = state.products;
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        products.push(product);
      }
      setState({
        ...state,
        marketPlace: marketplace,
        account: accounts[0],
        loading: false,
        products,
      });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  };

  const createProduct = async (name, price) => {
    setState({ ...state, loading: true });
    state.marketPlace.methods
      .createProduct(name, price)
      .send({ from: state.account })
      .once("receipt", (receipt) => {
        setState({ ...state, loading: false });
      });
  };

  const purchaseProduct = async (id, price) => {
    setState({ ...state, loading: true });
    state.marketPlace.methods
      .purchaseProduct(id)
      .send({ from: state.account, value: price })
      .once("receipt", (receipt) => {
        setState({ ...state, loading: false });
      });
  };

  return state.loading ? (
    <>
      <h1>LOADING....</h1>
    </>
  ) : (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Divine Olokor Blockchain Marketplace
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              <span id="account">{state.account || "LOADING ACCOUNT"}</span>
            </small>
          </li>
        </ul>
      </nav>
      <div id="content">
        <h1>Add Product</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const price = window.web3.utils.toWei(
              productPrice.toString(),
              "Ether"
            );
            createProduct(productName, price);
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              className="form-control"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              className="form-control"
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
        <p> </p>
        <h2>Buy Product</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            {state.products.map((product, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>
                    {window.web3.utils.fromWei(
                      product.price.toString(),
                      "Ether"
                    )}{" "}
                    Eth
                  </td>
                  <td>{product.owner}</td>
                  <td>
                    {!product.purchased ? (
                      <button
                        name={product.id}
                        value={product.price}
                        onClick={(event) => {
                          purchaseProduct(
                            event.target.name,
                            event.target.value
                          );
                        }}
                      >
                        Buy
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
