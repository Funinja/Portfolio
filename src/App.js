import './App.css';
import { VStack } from '@chakra-ui/layout';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  return (
	  <div className="App">
			<canvas id="bg"> 

			</canvas>

			<script type="module" src="/main.js"></script>
      
			<VStack p={5} w="100%">
				<Navbar />
        <Header />
				<Menu />
			</VStack>
    </div>
  );
}

export default App;
