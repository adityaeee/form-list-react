import Lottie from "lottie-react";
import animation from "../assets/animation/animation404.json";

const PageNotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-2">
                <span style={{ width: 500 }}>
                    <Lottie animationData={animation} />
                </span>
            </div>
            <button type="submit" className="btn login-button">
                Back
            </button>
        </>
    );
};

export default PageNotFound;
