# UI 구성하기

1. TodoTemplate : 화면 가운데 정렬시켜 주며 앱 타이틀(일정정리) 보여줌. children으로 내부 JSX를 props로 받아와 렌더링
2. TodoInsert : 새로운 항목 입력하고 추가할 수 있는 컴포넌트. state 통해 인풋 상태 관리
3. TodoListItem : 각 할 일 항목에 대한 정보 보여주는 컴포넌트. todo 객체를 props로 받아 와 상태에 따라 다른 스타일의 UI 보여줌
4. TodoList : todos 배열을 props로 받아 온 후 이를 배열 내장 함수 map을 사용해 여러개의 TodoListItem 컴포넌트로 변환해 보여줌
