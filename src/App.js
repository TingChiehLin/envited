import Header from './layout/Header';
import Main from './layout/Main';

import Left from './imgs/product-mage/Left.png';
import Middle from './imgs/product-mage/Middle.png';
import Right from './imgs/product-mage/Right.png';

const App = () => {
    return (
        <div style={{background: "linear-gradient(163.63deg, #501FC1 12.2%, #C346D5 96.78%)"}} className="h-screen">
            <Header/>
            <Main>
                <div className={"w-96 md:w-full"}>
                    <div className={"text-[2rem] md:text-4xl font-bold text-white mt-20 mb-6 text-center"}>Facebook events without Facebook.</div>
                    <div className={"text-base md:text-xl font-light text-white mb-6 text-center"}>Easily host and share events with your friends
                        across any social media.
                    </div>
                </div>
                <button style={{background: "linear-gradient(107.04deg, #06D6A0 48.99%, #5794F7 118.32%)"}}
                        className={"font-bold text-white px-8 py-4 rounded-full"}>
                    🎉 Create my next event
                </button>
                <div className={"w-full flex justify-center items-center gap-0 bg-landing-background bg-no-repeat bg-center"}>
                    <img src={Left} alt={"Left"}/>
                    <img src={Middle} alt={"Middle"}/>
                    <img src={Right} alt={"Right"}/>
                </div>
            </Main>
        </div>
    );
}

export default App;
