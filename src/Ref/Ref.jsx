import { useEffect } from "react";
import { useRef } from "react";


const Ref = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])
    
    return (
        <div>
            <input ref={inputRef}  type="text" name="" id="" placeholder="Type something" style={{padding: "12px", borderRadius: "8px"}} />
        </div>
    );
};

export default Ref;