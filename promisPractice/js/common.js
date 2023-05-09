setTimeout(function () {
  console.log('A')
}, 3000);
setTimeout(function () {
  console.log('B')
}, 2000);
setTimeout(function () {
  console.log('C')
}, 1000);

// 1. callback 함수로 a,b,c 순으로 콘솔에 출력

/* 2. promise를 함수로 등록한 뒤 그 함수를 이용하여
      a,b,c 순으로 콘솔에 출력 */