# JSCONF

## Don't block the event loop! 매끄러운 경험을 위한 자바스크립트 비동기 처리
- 강재석

#### Single Thread
- Javascript는 싱글스레드로서 이벤트가 지연되거나 끊키는 경우가 많다. 이러한 상황을 Blocking된다라고 표현한다
- 이러한 상황은 대부분 싱글스레드와 단일 호출스택의 엔진이 특징인 JS를 잘 이해하지 못하는 경우가 많은 경우이다.

#### Preventing Blocking
#### Backgroudns
- 배경에서 상당한 메모리를 차지하는 이벤트가 실행되고 있어, Form Input의 입력이 지연된다.

#### Solution
- Async
	- 비동기 통신을 통해 Non-Blocking 처리를 함으로서 일종의 tic 형식의 주기적인 이벤트를 비동기적으로 전송하는 방법이다.
	- 해당 방법의 문제는 Non-Blocking처리가 되는 시점이 일정하지 않으며, 입력되는 값이 지연되는 것처럼 느껴져서 UX/UI 입장에서 올바른 해결책이 아닐 수 있다.
- ServiceWorker.js
	- ServiceWorker를 통해 SingleThread에 문제를 개선할 수 있다.
	- 하지만, ServiceWorker를 통해서 메세지를 서로 주고 받아야되기 때문에 부담이 생길 수 있다
	- 비동기보다 0.5초정도 빠른 성능을 보여주었다.
- Blocking 되는 코드를 개선
	- 근본적으로 해당 Blocking의 문제는 랜더링의 비용이 많이 크다는 것이다.
	- repaint, reflow 되는 요소들을 파악하고, Blocking이 될만한 요소들을 줄여나가는 것이 중요하다.
	- 그럼에도 불구하고, 다양한 에니메이션과 큰 Resource가 필요하면 워커나 비동기방식을 선택하여 이를 줄여나가는 것이 필요하다.


극단적인 경우였지만 사례에 수치를 자료로 갖고와서 괜찮았다. 아쉬운 점은 Event Loop에 대한 얘기보다 Event Loop에 발생되는 Blocking처리에 대한 얘기가 많았다는 점이다. 오히려 해당 내용에 대해서는 [Event Loop Youtube](https://www.youtube.com/watch?v=cCOL7MC4Pl0) 영상을 강력 추천한다.

---

## 축하합니다! 당신의 스타트업에서 처음으로 아이를 갖게 되셨습니다. 이제 어떡하죠?
- 웬디 궈

#### 스타트업의 육아 시스템
- 대부분의 스타트업에서는 육아휴직에 대한 문화나 제도가 부족한 경우가 많다.
- 미국 핀테크 회사에서 해당부분들에 대한 법적으로나 제도적으로 부족한 것이 많아 직접 겪어 나가면서 문제를 해결해 나갔다.
- 한국에 이러한 문화가 부족하다는 사실을 많이 들었으며, 58% 정도의 직원들이 육아에 대한 부담감을 느끼고 있는데, 이러한 부분은 시스템적으로 개선해야한다.
- 육아 시스템 개선을 통해 중요한 깨달음은 육아에 대한 질적인 중요성을 상당히 느꼈으며, 자녀를 1명만 낳기로 결정하게 되는 계기가 되었다.
- 이러한 상황에도 불구하고, 개발자의 커리어를 이어나가기 위해서는 리모트 근무 및 육아를 만들어나갈 수 있는 환경/시스템을 만들기 위한 노력을 개발자들이 함께 해주어야 한다고 생각한다.


선진국들에 대한 육아환경들에 대한 부분이 크게 다르지 않다는 것을 느끼기도 했지만, 개발자로서의 고민과 문제를 해결하기 위한 열정을 느낄 수 있었다. 기술적인 얘기보다는 여성으로서 커리어에 대한 고민과 시스템의 부재에 대해 어떻게 해결해 나갈지를 공유하는 느낌으로서 필요성과 열정에 많은 공감을 느꼈다.

---

## 오픈소스 프로젝트 mocha에서 배운 것들
- 변정훈 aka Outsider

#### 오픈 메인테이너가 되는 방법
- 관심 있는 오픈소수에 자주 작은 단위로 비춰주는 곳이 효과적이다.
- 한두번씩 들어오는 개발자는 많으나, 작은 단위로 꾸준히 관심을 보여주는 사람은 극히 드물다.
- 메인테이너의 공백이 생기어 모집하게 되는 경우도 있으나, 프로젝트가 커져서 모집하는 경우도 자주 존재한다.

#### 오픈 소스 메인테이너를 하면서...
- 생각보다 너무 바쁘다. 정말 우리가 생각하는 것보다 오픈소스 메인터는 무지 바쁘다.
	- 대부분의 메인테이너들은 본업이 존재하는 경우가 많으나, 시간이 날때마다 기여하고 있다.
- Issue나 PR관련하여 최소한의 조건을 지켜주어야 한다. 메인테이너들의 시간을 아끼도록 노력해야 한다.
- PR이 머지되는 기간이 최대 11개월까지 겪는 것을 보았다.
	- 생각 보다 프로덕트의 사이드이팩트가 되는부분들을 심도있게 논의하고 진행한다.
	- 11개월 동안 포기하지 않고, 진행한 컨트리뷰터에 큰 박수를 보내고 싶었다.
- 최근 PR이 두번다 리버트되는 상황을 겪어서 자신감이 많이 떨어졌지만, 프로덕트의 안정성이 가장 중요하다고 생각한다.

#### 오픈소스에 대해
- 오픈소스는 회사 내에서 쓰는 코드와 같다. 당신의 문제를 해결해주지만, 해결해야만 하는 도구는 아니다.
- 오픈소스는 경쟁하는 것이 아니라, 같이 성장하길 원하며, 각자의 색을 갖길 원한다.
	- 모카와 제스트는 서로의 경쟁을 위해 피쳐를 만들지 않는다 - [모카 오픈소스에 대한 모카 설립자 의견](https://github.com/mochajs/mocha/issues/3387)

---

## 생명을 살리는 자바스크립트와 인공지능
- 안재만

#### 1%만 줄이더라도 1000명의 목숨을 살릴 수 있다.
- 의사의 데이터 기반한 사고를 높이고, 과오를 줄일 수 있다면, 1000명을 살릴 수 있다는 통계가 있다.
- 이러한 인공지능 개발을 통해서, 생명을 살리는 인문학적인 기여를 한다는 것에 큰 만족을 느끼고 있다.

#### 파이프라인의 개발
- 데이터 수집
	- NodeJS 파이프라인은 통해 이벤트를 수집/분석 한다.
	- 이벤트 기반 NodeJS를 통해 Thread를 관리하지 않고도 쉽게 다양한 이벤트를 처리할 수 있다.
- 분석
	- 현재 데이터의 분석은 Python으로 진행하고 있으며, Worker Job을 지속적인 분석을 진행하고 있다.
- 프론트
	- 인공지능의 데이터를 주로 통계를 내고 보여주기 위해 노력하고 있다.
- 기타...

다양한 언어를 기반으로 파이프라인을 구축하여 인공지능에 필요한 데이터를 쉽게 수집/축적 될 수 있도록 노력하고 있다.
그러나, 개인적으로 자기 자랑과 회사 얘기를 좀 많이 해서 강의가 별로였다...

---

## 백 투 더 퓨처 오브 자바스크립트 II: 미래를 넘어
- 윌리언 마르틴쉬

#### Pattern Matching - [Link](https://github.com/tc39/proposal-pattern-matching)
- if, switch, ternary Operator를 고민하지 않고도 1개의 Pattern Matching을 쉽게 구현할 수 있다.
- double equals(값 비교, Triple Equals(타입, 값 비교) 등을 고민하여 if, switch 등을 고민하게 되지만, 패턴 매칭을 통해서는 두가지의 경우를 모두 수렴하며, 객체의 값을 쉽게 비교할 수 있게 된다.
- 함수형의 패턴을 받아들인것과 같으며, 내부에서 if와 switch 등을 더 확장시킬 수 있어서 복잡한 조건문을 쉬운 플로우를 구성할 수 있게해준다.

```js
const res = await fetch(jsonService)
case (res) {
  when {status: 200, headers: {'Content-Length': s}} ->
    console.log(`size is ${s}`),
  when {status: 404} ->
    console.log('JSON not found'),
  when {status} if (status >= 400) -> {
    throw new RequestError(res)
  },
}
````

#### Pipe Operator - [Link](https://github.com/tc39/proposal-pipeline-operator)
- 함수형이 강조되는 기능들이 많이 생기고 있다.
- Javascript만의 신택스를 통해 라이브러리 없이도 함수형 기능을 제공한다.
- RxJS와 같은 Pipe, Observer 패턴을 Native로서 받아들이고 개선하기 위해 현재 tc39에서 많은 제안들이 오가고 있다.

```js
let person = { score: 25 };

let newScore = person.score
  |> double
  |> add(7, ?)
  |> boundScore(0, 100, ?);

newScore //=> 57
````

그 외 TC39에서 관심 가질만한 사실은, Javascript의 기능들을 대부분의 C++과 같은 Web API, Assembly API의 확장을 통해 속도 개선에 대한 제안들이 많이 오가고 있다는 사실이다.

개인적으로 Pipe Operator가 빠른 시일내에 개발되면 더 좋겠다는 생각을 갖고있다. lodash나 ramda를 통해서도 구현이 가능하지만, Pipe라는 Operator만 사용하더라도, 대부분의 RxJS와 같은 라이브러리는 필요없어지게되며 Pure한 Javascript 개발에 집중할 수 있을 것으로 기대한다.