//1. 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
//2. 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
//3. 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
//4. 마우스를 우 클릭하면 title이 바뀌어야 합니다.
//5. title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
//6. .css 와 .html 파일은 수정하지 마세요.
//7. 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
//8. 모든 조건이 충족되지 못하면 ❌를 받습니다.

const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#FC2D2D"];
const superEventHandler = {
  handleMouseEnter: function mouseenter() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleMouseLeave: function mouseleave() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleWindowResize: function resize() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  rightclickHandler: function contextmenu() {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[3];
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
h2.addEventListener("contextmenu", superEventHandler.rightclickHandler);
