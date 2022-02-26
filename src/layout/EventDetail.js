import {FcCloseUpMode} from 'react-icons/fc';

const EventDetail = () => {

    return (
        <>
            <div className={"w-full h-40 bg-cover bg-no-repeat bg-center bg-cover"}></div>
            <div className={"bg-gray-100 h-[56rem]"}>
                <div className={"flex justify-items-start gap-4 py-16 px-16"}>
                    <FcCloseUpMode size={"64px"}/>
                    <div className={"flex flex-col justify-start gap-4"}>
                        <div className={"text-purple-700 text-2xl font-bold w-64 "}>Anica’s 22nd Birthday</div>
                        <div className={"text-purple-300 text-base"}>Hosted by Anica</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventDetail
