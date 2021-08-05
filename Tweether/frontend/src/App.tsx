import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  getLoggedInUserId,
  getUserInfo,
  getCurrentWalletConnected,
  loadAlchemyWeb3,
  addWalletListener,
} from "./web3/provider";

import Landing from "./routes/landing";
import Profile from "./routes/profile";
import HomePage from "./routes/home";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import TweetComposer from "./components/TweetComposer";

function App() {
  const [state, setState] = useState<any>({
    loggedIn: false,
    userInfo: {},
    showComposeModal: false,
  });
  const [appReady, setAppReady] = useState(false);

  const [wallet, setWallet] = useState<string>(null as any);

  const bootstrap = async () => {
    try {
      const walletAddress = await getCurrentWalletConnected();
      if (walletAddress) {
        setWallet(walletAddress);
      }
      setAppReady(true);
    } catch (error) {
      console.log("BOOTSTRAP ERROR", error.message);

      window.alert(
        "There has been an error setting up the application for you, please reload the page"
      );
    }
  };

  const toggleComposeModal = () => {
    const { showComposeModal } = state;

    setState({
      ...state,
      showComposeModal: !showComposeModal,
    });
  };

  const bootstrapUserInfo = async () => {
    console.log("WALLET", wallet);
    try {
      setAppReady(false);
      const userId = await getLoggedInUserId(wallet);
      console.log("USER ID", userId);
      const userInfo = await getUserInfo(userId as number);
      console.log("USER INFO", userInfo);
      setState({
        ...state,
        loggedIn: true,
        userInfo,
      });
      setAppReady(true);
    } catch (error) {
      if (error.message === "Couldn't find user!") {
        setState({
          ...state,
          loggedIn: false,
          userInfo: {},
        });
        setAppReady(true);
        return;
      }

      window.alert(
        "There has been an error setting up the application for you, please reload the page"
      );
    }
  };

  useEffect(() => {
    if (wallet) {
      bootstrapUserInfo();
    }
  }, [wallet]);

  useEffect(() => {
    loadAlchemyWeb3().then(() => bootstrap());
    addWalletListener(
      (address) => {
        setWallet(address);
        return;
      },
      () => window.alert("There has been an error")
    );
  }, []);

  return appReady ? (
    <Router>
      <nav>
        {state.loggedIn && (
          <Nav
            userInfo={state.userInfo}
            toggleComposeModal={toggleComposeModal}
          />
        )}
        {state.showComposeModal && (
          <Modal close={toggleComposeModal} open={state.showComposeModal}>
            <TweetComposer onClose={toggleComposeModal} userAddress={wallet} />
          </Modal>
        )}
      </nav>
      <Switch>
        {!state.loggedIn ? (
          <Route exact>
            <Landing walletAddress={wallet} setWallet={setWallet} />
          </Route>
        ) : (
          <>
            <Route exact>
              <HomePage />
            </Route>
            <Route path="/profile">
              <Profile userName={state.userInfo.username} />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  ) : (
    <h1>LOADING APPLICATION</h1>
  );
}

export default App;
