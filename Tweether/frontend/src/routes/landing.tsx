import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";
import RegistrationForm from "../components/RegistrationForm";

import { connectWallet } from "../web3/provider";

import "./landing.css";

const Landing = (props: { walletAddress: string; setWallet: any }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [connectLoading, setConnectLoading] = useState(false);

  return (
    <>
      <nav className="landing_nav">
        <div>Tweether</div>
        <div>
          {props.walletAddress ? (
            <button>{props.walletAddress}</button>
          ) : (
            <button
              onClick={() => {
                setConnectLoading(true);
                connectWallet()
                  .then((address) => props.setWallet(address))
                  .catch(() => {
                    window.alert(
                      "There has been an error connecting your wallet"
                    );
                  });
                setConnectLoading(false);
              }}
              disabled={connectLoading}
            >
              {connectLoading
                ? "Connecting Wallet..."
                : "Connect Metamask Wallet"}
            </button>
          )}
        </div>
      </nav>
      <div className="hero_center">
        <h1>
          A decentralized non-censorable micro-blogging platform built on the
          ethereum blockchain
        </h1>

        <div className="right_side">
          <div className="disclaimer">
            <p>
              To create an account, MetaMask will automatically open and ask you
              to confirm a transaction.
            </p>
            <p>
              Please note that creating an account on the Ethereum blockchain
              costs a small amount of Ether.
            </p>
          </div>

          <button
            onClick={() => {
              if (!props.walletAddress) {
                window.alert("Please connect your metamask wallet");
                return;
              }
              setShowRegisterModal(!showRegisterModal);
            }}
          >
            Create an account
          </button>
        </div>

        {showRegisterModal && (
          <Modal
            close={() => setShowRegisterModal(!showRegisterModal)}
            open={showRegisterModal}
          >
            <RegistrationForm walletAddress={props.walletAddress} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Landing;
