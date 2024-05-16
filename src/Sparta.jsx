import React, { useState } from 'react';

export default function Sparta() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  console.log('id', id);
  console.log('password', password);

  const HandleChangeId = (e) => {
    setId(e.target.value);
  };

  const HandleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const HandleLoginReset = () => {
    alert(
      `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`
    );
    setId('');
    setPassword('');
  };

  return (
    <>
      <form>
        이름 : <input type="text" value={id} onChange={HandleChangeId} />
        비밀번호 :
        <input
          type="password"
          value={password}
          onChange={HandleChangePassword}
        />
      </form>
      <button type="submit" onClick={HandleLoginReset}>
        로그인
      </button>
    </>
  );
}
