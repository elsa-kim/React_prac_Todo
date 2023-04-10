import React from 'react';
// https://react-icons.netlify.com/#/icons/md 페이지에 아이콘 뜨는데 사용하고 싶은 아이콘 import 구문 사용해 불러온 후 컴포넌트처럼 사용
// import {아이콘 이름} from 'react-icons/md'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
