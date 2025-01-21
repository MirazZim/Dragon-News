import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";

const FIndUsOn = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3 text-black">Find Us on</h1>

            <div className="flex join join-vertical *:bg-gray-200 ">
                <button className="btn join-item bg-gray-200 border-none text-black justify-start"><FaFacebook />
                    Facebook</button>

                <button className="btn join-item bg-gray-200 border-none text-black justify-start"><FaTwitter /> Twitter</button>

                <button className="btn join-item bg-gray-200 border-none text-black justify-start"><FaInstagram /> Instagram</button>

            </div>
        </div>
    );
};

export default FIndUsOn;