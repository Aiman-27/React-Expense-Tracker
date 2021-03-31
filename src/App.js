import logo from './logo.svg';
import './App.css';

//import the Global Provider
import { GlobalProvider} from './context/GlobalState';

// Import Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory} from './components/TransactionHistory'
import { AddTransaction} from './components/AddTransaction'


function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
      <Balance></Balance>
      <AccountSummary></AccountSummary>
      <TransactionHistory></TransactionHistory>
      <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
