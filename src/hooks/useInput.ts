import { useState, useCallback, ChangeEvent } from "react";


const useInput = (initialValue = "") =>{
    const [value, setValue] = useState(initialValue);

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    return { value, onChangeForm };
}

export default useInput;