// Grab HTML Elements
const btnUp = document.querySelector(".clicker__button-up");
const btnDown = document.querySelector(".clicker__button-down");
const yearSpan = document.querySelector(".clicker__span");
const contentSpan = document.querySelector(".click-contents__span");

const btnList = [btnUp, btnDown];

const contentList = [
  "Kevin Systrom 과 Mike Krieger 가 개발을 시작했다. 당시 프로젝트에서는 여러가지 기능이 많이 있었으나 결국 모바일에 초점을 맞추었고, 그해 10월에 iOS 버전 인스타그램을 개시하였다",
  "1월 부터는 사진을 찾기 쉽도록 해시태그가 도입되었다. 그리고 9월에 2.0버전이 나왔는데, 필터 등 많은 기능이 추가되었고, 원래는 복잡했던 아이콘이 단순화되어 바뀌었다",
  "4월에 Meta(Facebook) 에 10억달러에 인수되었는데, 인스타그램의 직원들을 Meta의 직원으로 일하게 되었고, 이후 독립적으로 운영되고 있다",
  "-",
  "12월에 사용자가 3억 명을 돌파했다고 공식 페이스북에서 밝혔다. 해당 글에서는 동시에 매일 7천 만 건 이상의 사진과 동영상이 올라오고 있다고말했고, 사칭 스팸 계정을 없에기 위해 트위터와 페이스북처럼 공식 계정에 붙여주는 인증 배지를 도입할 것이라고 예고했다",
  "8월 업데이트로 정사각형으로만 올릴 수 있었던 제약이 사람짐과 함께 광고가 추가되었다",
  "5월 무려 아이콘이 무척 간략하게 변경되었다 폴라로이드 사진기를 생각하게 만드는 아이콘이다. 사실적으로 표현하는 주위의 쇠퇴에 맞춰 미니멀리즘한 아이콘으로 바뀐 것이다그리고, 8월에 사용자가 찍고 레이어나 여러 효과들을 추가하여 스토리에 추가할 수 있는 기능인 스토리를 출시했다 마지막으로, 6월에 사용자가 5억명 돌파했다 이용자 중 3억 명은 하루에 한 번 이상 사용하며 매일 평균 9천 500만 개의 사진과 영상이 올라온다",
  "-",
  "9월말에 인스타그램 창업주 2명이 Meta을 떠났고 새로운 대표로는 Adam Mosseri 가 10월 1일에 임명되었다 그리고 2일뒤 전 세계적으로 접속이 마비되는 사건이 발생했다 그로인해 사용자는 새로운 피드를 보지 못했다",
  "2월에 숏폼 동영상 편집 기능인 릴스를 도입했다 그리고 8월에 팔로우 탭 제거 시범을 보이기 시작했는데, 이 탭에서는 사용자가 사람들의 글의 댓글을 볼 수 있었다 이러한 것들을 10월에 공식화 했다",
  "이 해부터 제대로 Instagram 을 이용하려면 로그인을 무조건 해야하도록 바뀌었다 개인 사생활 보호 및 보고만 가는 일명 '눈팅' 방지 목적인 것 같다",
  "-",
];

for (let i = 0; i < contentList.length; i++) {
  const element = contentList[i];
  if (element === "-") {
    contentList[i] = "내용이 없습니다!";
  }
}

// Set Variable
let years = 2010;
const today = new Date();
const year = today.getFullYear();

yearSpan.innerText = years;
changeContent();

// Set Function
function countYear(bool) {
  if (bool === true) {
    years += 1;
    changeContent();
  } else if (bool === false) {
    years -= 1;
    changeContent();
  }
}

function changeContent() {
  if (years > year) {
    printIn(contentSpan, `지금은 ${year}년입니다!`);
    printIn(yearSpan, years);
  } else if (years < 2010) {
    printIn(contentSpan, `${years}년?? Instagram 은 2010년에 태어났습니다`);
    printIn(yearSpan, years);
  } else {
    printIn(contentSpan, contentList[years - 2010]);
    printIn(yearSpan, years);
  }
}

function printIn(spanTag, content) {
  return (spanTag.innerText = content);
}

// Add Event Listener
for (let i = 0; i < btnList.length; i++) {
  const element = btnList[i];
  element.addEventListener("click", () => {
    if (i === 1) {
      countYear(true);
    } else if (i === 0) {
      countYear(false);
    }
  });
}
