import Logo from '../imgs/logo.png';

const Header = () => {
    return (
        <header className="h-16 w-full flex justify-between items-center px-8">
            <img src={Logo} className="w-40" alt="logo"/>
            <button
                    style={{background: "linear-gradient(107.04deg, #C346D5 52.6%, #501FC1 118.32%)"}}
                    type="button"
                    className="
                    py-2
                    px-8
                    rounded-full
                    text-white
                    font-bold
                    ">
                Log In
            </button>
        </header>
    )
}

export default Header
