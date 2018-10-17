/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Image = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://github.com/Seolhun" target="_blank">
              Github
            </Button>
            <Button href="blog">blog</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <Container
      padding={['bottom', 'top']}
      id={props.id}
      background={props.background}>
      <div className="productShowcaseSection paddingBottom">
        <h2>{"Who's Using This?"}</h2>
        <p>This project is used by all these people</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
          <a className="button" href={pageUrl('users.html', props.language)}>
            More {siteConfig.title} Users
          </a>
        </div>
      </div>
    </Container>
  );
};

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    // const editUrl = siteConfig.repoUrl + '/edit/master/website/siteConfig.js';
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div>
            <p>안녕하세요. 설훈입니다. :)</p>
            <p>여러분들을 이렇게 블로그에서 만나뵐 수 있게되어 영광입니다.</p>
            <p>
              <strong>2016년부터 </strong> 블로그를 시작하였습니다. 부족한 것이
              많아 배운 것을 기록하여 다시 되새겨 보고 싶은 욕구에
              시작하였습니다. 복사/붙여넣기도 해봤고, 참고하여 작성하기도,
              아니면 직접 처음부터 글을 써보면서 많은 도움을 얻었습니다. 이를
              통해 느낀 것은
              <code>
                기록하고 공유하는 것은, 개발자에게 거의 필수 덕목에 가깝다.
              </code>라는 생각도 갖게 되었습니다.
            </p>
            <p>
              <strong>2017년부터는 </strong>
              Github에
              <code>retrospective-diary</code>를 시작했습니다. 매일 있었던
              개발관련 사항들을 형식에 얽매이지 않고 기록/정리하는
              프로젝트입니다. 프로젝트에 대한 회고나 문제되었던 부분들을
              정리했고, 언어에 대한 문법이나 이론 등을 정리하기도 했습니다. 많이
              진행하지 못하고 있지만, 조금씩이라도 꾸준히 진행하려고 노력하고
              있습니다. 그러나, 진행하면서 관리 포인트가 늘어난다는 생각이
              들었습니다. 이를 해결하기 위해 블로그와 회고 프로젝트를 연동하는
              여러가지 해결책을 고민/조사하였고 결국, Markdown 형식의 홈페이지로
              개선하기 위해 Hugo를 사용하게 되었습니다.
            </p>
            <p>
              <strong>2018년부터는 </strong> retrospective-diary와
              Seolhun.github.io 블로그를 통합/운영하고, 추가적으로 기업과
              개인들의 Tech Blog의 데이터를 모아서 글을 쉽게 공유할 수 있는
              깃허브 기반 개발자 블로그 플랫폼을 만들려고 합니다. 올해 12월
              전까지 만드는 것이 작은 목표입니다.
            </p>
            <p>
              현재에는 개발관련한 Docs와 Blog로 문서화하여 Content에 집중하기
              위해 Docusaurus라는 도구를 이용하여 변경하였습니다. Component와
              플랫폼 관련 API 개발 사항 문서를 여기에 함께 공유해볼까 합니다.
            </p>
            <p>기대해주세요. :)</p>

            <h2 id="이력서-및-경력">이력서 및 경력</h2>
            <p>
              <a href="/files/seolhun_resume.pdf" class="button">
                SeolHun Resume Download
              </a>
            </p>
            <ul>
              <li>2017년 5월 ~ 현재 - ab180 프론트엔드 개발</li>
              <li>
                2017년 12월 ~ 2017년 3월 - 크로키닷컴 - 지그재그 백엔드 개발
                인턴
              </li>
              <li>2016년 9월 ~ 2017년 10월 - 아이메디신 - 뇌파 플랫폼 개발</li>
              <li>2016년 7월 ~ 2017년 8월 - 마이다스아이티 웹기획 인턴</li>
              <li>
                2015년 12월 ~ 2016년 6월 - 쌍용교육센터 빅데이터 플랫폼 교육
              </li>
            </ul>
            <h2 id="앞으로-진행사항">앞으로 진행사항</h2>
            <p>
              개인적으로 풀스택을 지향하며
              <code>
                데이터 시각화와 검색/추천 서비스를 개발하고 싶습니다.
              </code>{' '}
              이를 위해 간다하게 개발자 간의 깃허브 기반 플랫폼을 만들어,
              검색/추천 할 수 있는 기능을 개발하려고 합니다. Hi-Cord란 서비스를
              통해 개발 관련 컨텐츠와 로그 데이터를 수집할 수 있는 환경을
              구축하려고 합니다.이후에 컨텐츠와 로그 데이터를 통한 검색/추천
              서비스 개발 및 개선을 차례대로 진행 할 예정입니다. NodeJS와 Java,
              AWS를 중점으로 해당 서비스를 개발중에 있습니다. 프론트엔드는
              TypeScript와 React, Redux(Saga)를 중점적으로 이용하여 개발할
              것입니다.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Users />
        </div>
      </div>
    );
  }
}

module.exports = Index;
