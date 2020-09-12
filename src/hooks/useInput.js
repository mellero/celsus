import { useState, createRef } from 'react';

export default (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const inputRef = createRef()
    return {
        value,
        setValue,
        resetValue: () => setValue(''),
        inputRef
    }

}