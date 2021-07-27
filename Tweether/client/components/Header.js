import React from "react";
import Link from "next/link";
import Image from "next/image";

import Modal from "./Modal";
import TweetComposer from "./TweetComposer";

import { getLoggedInUserId, getUserInfo } from "../web3/users";

import { Center } from "./Layout";
import Nav from "./Nav";

import Logotype from "../icons/logotype.svg";

export default class Header extends React.Component {
  state = {
    loggedIn: false,
    userInfo: {},
    showComposeModal: false,
  };

  async componentDidMount() {
    const userId = await getLoggedInUserId();
    const userInfo = await getUserInfo(userId);

    this.setState({
      loggedIn: true,
      userInfo,
    });
  }

  toggleComposeModal = () => {
    const { showComposeModal } = this.state;

    this.setState({
      showComposeModal: !showComposeModal,
    });
  };

  render() {
    const { loggedIn, userInfo, showComposeModal } = this.state;
    return (
      <header>
        <Center>
          <Link href="/">
            <a className="logotype">
              <Image src={Logotype} />
            </a>
          </Link>
          <nav>
            {loggedIn && (
              <Nav
                userInfo={userInfo}
                toggleComposeModal={this.toggleComposeModal}
              />
            )}
          </nav>
        </Center>

        {showComposeModal && (
          <Modal onClose={this.toggleComposeModal}>
            <TweetComposer onClose={this.toggleComposeModal} />
          </Modal>
        )}

        <style jsx>{`
          header {
            background-color: #ffffff;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `}</style>
      </header>
    );
  }
}
