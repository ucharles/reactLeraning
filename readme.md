# React.js
도구의 등장 배경을 이해하자. 이 도구로 무슨 문제를 해결하려 했는가?

### Vanila
1. HTML 요소를 만들고
2. 이벤트 리스너로 동작을 읽음
3. JS에서 데이터 갱신을 한 뒤
4. HTML 갱신

### React
1. JS(React)에서 HTML 생성
2. HTML 갱신

React는 엔진. HTML을 인터랙티브하게 만들어주는 라이브러리.
React DOM은 모든 React Element를 HTML Body에 놓을 수 있게 해줌.
!React의 동작 본질을 이해해야 한다!

createElement(<HTML Tag>, {Property}, <Content>);
<HTML Tag>: 내용을 삽입하고 싶은 HTML Tag을 기입
{Property}: Event Listener, id, class, Style 등을 기입
<Content>: 표시하고 싶은 내용을 기입

JSX:
컴포넌트의 첫글자는 반드시 대문자일 것.
소문자라면 JSX는 HTML 태그로 인식함.

이벤트 리스너를 통해 데이터를 갱신할 때...
Vanila: 데이터가 포함된 부분들이 전부 갱신
(ex. body - div 에 태그가 있을 때, body와 div가 전부 갱신됨)
React.js: 바뀐 부분만 갱신함
기존 렌더링과 다음 렌더링의 차이 부분만 갱신하는 것.