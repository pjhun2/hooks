import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
//    자동 렌더링
//    useEffect(() => {
//        console.log("렌더링이 완료되었습니다!");
//        console.log({
//            name,
//            nickname
//        });
//    });

//        마운트 시에만 렌더링
//        useEffect(() => {
 //           console.log('마운트 될 때만 실행됩니다.');
//        }, []);

//    특정 값만 렌더링 되게
//    useEffect(() => {
//        console.log(name);
//    }, [name]);


//    마운트, 언마운트 시 렌더링이나 값 사라지게
//    useEffect(() => {
//        console.log('effect');
//        console.log(name);
//        return () => {
//            console.log('cleanup');
//            console.log(name);
//        };
//    });

    // 언마운트 될 때 함수 호출, 두번째 파라미터에 비어있는 배열을 넣으면 됨
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, []);


    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>

    )
}

export default Info


// 비구조화 배열의 예제
// const array = ['dog', 'cat', 'sheep'];
// const [first, second] = array;
// console.log(first, second); // dog cat
