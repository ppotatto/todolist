const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();//<-이건 무조건적으로 써야함 시계만드려면...?;아마..ㅋㅋ..ㅠ...
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //<-이게 있어야 딜레이 없이 시계가 바로 출력되게 함!!
setInterval(getClock, 1000);
