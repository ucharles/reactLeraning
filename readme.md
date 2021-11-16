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

React는 엔진. HTML을 인터랙티브하게 만들어주는 라이브러리.<br/>
React DOM은 모든 React Element를 HTML Body에 놓을 수 있게 해줌.<br/>
!React의 동작 본질을 이해해야 한다!<br/>

createElement(<HTML Tag>, {Property}, <Content>);<br/>

<HTML Tag>: 내용을 삽입하고 싶은 HTML Tag을 기입<br/>
{Property}: Event Listener, id, class, Style 등을 기입<br/>
<Content>: 표시하고 싶은 내용을 기입<br/>

JSX:<br/>
컴포넌트의 첫글자는 반드시 대문자일 것.<br/>
소문자라면 JSX는 HTML 태그로 인식함.<br/>

이벤트 리스너를 통해 데이터를 갱신할 때...<br/>
Vanilla: 데이터가 포함된 부분들이 전부 갱신<br/>
(ex. body - div 에 태그가 있을 때, body와 div가 전부 갱신됨)<br/>
React.js: 바뀐 부분만 갱신함<br/>
기존 렌더링과 다음 렌더링의 차이 부분만 갱신하는 것.<br/>

const [state, modifier] = React.useState(<state>);<br/>
modifier로 state의 내용을 바꿀 때, 전체 컴포넌트가 재렌더링됨.<br/>

[Hook의 규칙](https://ko.reactjs.org/docs/hooks-rules.html#explanation)<br/>

HTML이 아닌 JSX를 사용하고 있으므로, 차이점을 알아야함.<br/>
HTML JSX<br/>
class className<br/>
for forHtml<br/>

부모의 State가 변경되는 경우, 자식 Component도 모두 변경되므로<br/>
어플리케이션이 느려지는 원인이 될 수 있음.<br/>
컴포넌트가 변경되었는지 상태를 메모하는 함수가 존재한다.<br/>

State가 변경될 때 함수 안에 있는 모든 코드(해당 컴포넌트)는 재실행된다. (모든 코드가 재실행됨)<br/>
컴포넌트 안의 특정 코드를 단 한번만 실행시키고 싶을 때, useEffect를 사용.<br/>

이 경우는 인수1만 바뀌어도 실행됨<br/>
useEffect(() => {<br/>
실행될 코드<br/>
}, [인수1, 인수2])
