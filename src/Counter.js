import React, { useState, useReducer } from 'react';


function reducer(state, action) {
    // action.type 에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};







/* useState 사용법
const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}
*/

export default Counter


// 비구조화 배열의 예제
// const array = ['dog', 'cat', 'sheep'];
// const [first, second] = array;
// console.log(first, second); // dog cat
