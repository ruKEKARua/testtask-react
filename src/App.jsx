import Header from './Components/Header';
import './UI/App.css';
import './UI/App-mobile.css';
import Top from './Components/Top';
import Bottom from './Components/Bottom';

function App() {
    return (
        <div className="App">
            <div className='wrapper'>
                <Header />

                <main>

                    <Top />

                    <Bottom />
                    

                </main>

            </div>

        </div>
    );
}

export default App;
