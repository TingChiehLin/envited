import {Link} from 'react-router-dom';

import Left from "../imgs/product-mage/Left.png";
import Middle from "../imgs/product-mage/Middle.png";
import Right from "../imgs/product-mage/Right.png";
import Button from "../components/Button";

const Main = () => {
    return (
        <main className={"flex justify-center items-center gap-4 flex-col"}>
            <div className={"w-96 md:w-full"}>
                <div className={"text-[2rem] md:text-4xl font-bold text-white mt-20 mb-6 text-center"}>Facebook events
                    without Facebook.
                </div>
                <div className={"text-base md:text-xl font-light text-white mb-6 text-center"}>Easily host and share
                    events with your friends
                    across any social media.
                </div>
            </div>
            <Link to={"/create"}>
                <Button text={"🎉 Create my next event"}/>
            </Link>
            <div
                className={"w-full flex justify-center items-center gap-0 bg-landing-background bg-no-repeat bg-center"}>
                <img src={Left} alt={"Left"}/>
                <img src={Middle} alt={"Middle"}/>
                <img src={Right} alt={"Right"}/>
            </div>
        </main>
    )
}

export default Main
