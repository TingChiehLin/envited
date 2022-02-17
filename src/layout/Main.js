const Main = (props) => {
    return (
        <main className={"flex justify-center items-center gap-4 flex-col"}>
            {props.children}
        </main>
    )
}

export default Main
