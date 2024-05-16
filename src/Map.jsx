import React, { useState } from 'react';
import './Map.css';
import User from './User';

export default function Map() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 객체를 만든다.
    //  { id: 1, age: 30, name: '송중기' },
    // 2. 새로운 객체를 배열에 더한다.

    const newUser = {
      id: users.length + 1,
      age,
      name: name,
      // 키, 값이 같다면 생략할 수 있다. (name은 생략 안해둠)
    };

    // user를 바꿀 수 있는 방법은 오직 setUsers
    // 불변성을 유지하기 위해서 아래와 같이 작성한다.
    setUsers([...users, newUser]);
  };

  // 삭제 버튼 클릭
  // 송중기에 해당되지 않는 것만 가져오게끔 하면 송중기는 지울 수 있다.
  // 핸들러 함수가 아이템의 id를 알아야하기 때문에 인자로 받아야한다.
  const clickRemoveButtonHandler = (id) => {
    // 선택한 id를 제외, 선택되지 않은 것 들로만 새로운 배열을 만들어줌
    const userList = users.filter((item) => item.id !== id);
    setUsers(userList);
  };

  return (
    <div>
      <div>
        {/* input 태그는 value랑 onChange랑 엮어줘야한다. */}
        이름 :&nbsp;
        <input type="text" value={name} onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input type="text" value={age} onChange={ageChangeHandler} />
        <button type="button" onClick={clickAddButtonHandler}>
          추가
        </button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <User
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
