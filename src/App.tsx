import React from 'react';
import './App.css';

const App = () => {
  //const {isAuthenticated, authenticate} = useMoralis();

  const applyForCredit = async (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const signInWithLens = (e: React.MouseEvent<HTMLButtonElement>) => {
  
  
  }

  const connectWallet = async () => {
  //  try {
  //   await authenticate({
  //     provider: "WalletConnect",
  //     signingMessage:"Auth Requaried",
  //   });
  //  } catch (e) {
  //     console.error(e);
  //  }
  }

  return (
    <div className='Crēdere'>
      <h1>Crēdere</h1>
      <button className="walletConnect" onClick={connectWallet}>
        Connect to WalletConnect
      </button>
      <button className="signInWithLens" onClick={signInWithLens}>
        Sign in with Lens
      </button>
      <p className="description">This is a cool project.</p>
      <p className="connectingWallet">Connecting your wallet ...</p>
      <p className="SignninginwithLens">Signning in with Lens ...</p>
      <button className="applyForCredit" onClick={applyForCredit}>
        Apply for Credit
      </button>
      
    </div>
  )
}

export default App;