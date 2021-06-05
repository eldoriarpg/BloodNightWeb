import {useEffect} from "react";
import {getTypes, moblist} from "./api/base";

function App() {
    useEffect(() => {
        (async () => {
            console.log(await moblist())
        })()
    })

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <p>🧛 Blood Night Web</p>
                <p>{window.location.hash}</p>
            </div>
        </div>
    );
}

export default App;
