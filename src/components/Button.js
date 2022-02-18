const Button = ({text}) => {
    return (
        <button style={{background: "linear-gradient(107.04deg, #06D6A0 48.99%, #5794F7 118.32%)"}}
                className={"font-bold text-white px-8 py-4 rounded-full"}>
            {text}
        </button>
    )
}

export default Button
