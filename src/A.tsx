import axios from "axios";
import { useEffect, useState } from "react";
import { useCancelToken } from "./useCancelToken";

function A() {
    const [x, setX] = useState<number>(0);
    const {newCancelToken, isCancel} = useCancelToken();
    const url = "https://httpbin.org/delay/3";

    useEffect(() => {
        (async () => {
            try{
                await axios.get(url, {
                    cancelToken: newCancelToken()
                });
                console.log("Done 1");
                setX(1);
            } catch(error) {
                if (isCancel(error)) console.log("canceled 1");
                else console.log(error);
            }
        })();

    }, []);


    useEffect(() => {
        (async () => {
            try{
                await axios.get(url, {
                    cancelToken: newCancelToken()
                });
                console.log("Done 2");
                setX(2);
            } catch(error) {
                if (isCancel(error)) console.log("canceled 2");
                else console.log(error);
            }
        })();

    }, []);


    useEffect(() => {
        (async () => {
            try{
                await axios.get(url, {
                    cancelToken: newCancelToken()
                });
                console.log("Done 3");
                setX(3);
            } catch(error) {
                if (isCancel(error)) console.log("canceled 3");
                else console.log(error);
            }
        })();

    }, []);

    return <div>Hey {x}</div>
}

export default A;