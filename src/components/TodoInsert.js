import React, { useCallback, useState } from 'react';
// https://react-icons.netlify.com/#/icons/md 페이지에 아이콘 뜨는데 사용하고 싶은 아이콘 import 구문 사용해 불러온 후 컴포넌트처럼 사용
// import {아이콘 이름} from 'react-icons/md'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick 이벤트로도 가능하지만 onKeyPress 이벤트 통해 엔터키 감지 로직 따로 작성해줘야함
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      // value 값 초기화
      setValue('');
      // submit 이벤트는 브라우저 새로고침을 발생시킴, 이를 방지하기 위해 사용
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
