# - 2019 Golas
- Books
  - 프론트엔드 개발자를 위한 JavaScript 완독/정리
  - JavaScript 함수형 프로그래밍 공부
  - HTTP 완벽가이드 완독/정리
- Projects
  - 개인 프로젝트(hi-cord) 개발/릴리즈
  - Localize-Component 개발/릴리즈
  - D3(vx 참고)를 이용한 Chart/TableComponent 개발/릴리즈

## The Growth Goals
#### - Static Goal
- 매일 1시간씩 책 독서하기
  - [x] 일
  - [ ] 월
  - [ ] 화
  - [ ] 수
  - [ ] 목
  - [ ] 금
  - [ ] 토
- [ ] 월 1회 블로그 작성하기
- 주 2~3회 운동하기
  - [ ] 1
  - [ ] 2
  - [ ] 3

#### - Weekly Checklist
- 할 일과 한 일 비교 점검/회고
  - [ ] 일
    - [ ] 이번주 Growth 기록
  - [ ] 토
    - [ ] 저번주 Static Goal 점검/회고

## What did I do for a week?
### HelperUtils 개선 (ABR-1089)
#### Array
방어적인 코드 작성으로 Native prototype을 확장 할 예정.

- Private Methods - **해당 코드는 HelperUtils 내부 혹은 외부 임시 편의를 위한 함수로서 Product 코드에 eslint 에러로 확인될 수있게 _를 prefix로 추가.**
  - [x] _log
- Public Methods
  - [x] removeDuplication
  - [x] uniq

### HelperUtils Test 코드 작성
- [x] removeDuplication
- [x] uniq
