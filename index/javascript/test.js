const hide = () => {
  document.getElementsByTagName("nav")[0].setAttribute("id", "collapse");
  document.getElementByID("nav")[0].setAttribute("id", "hide");
  document.getElementsByClassName("content")[0].setAttribute("id", "hide-top");
  document.getElementsByClassName("unhide")[0].removeAttribute("id");
}

const unhide = () => {
  document.getElementsByClassName("unhide")[0].setAttribute("id", "hide");
  document.getElementsByClassName("content")[0].removeAttribute("id");
  document.getElementsByTagName("nav")[0].removeAttribute("id");
  document.getElementByID("nav")[0].removeAttribute("id");
}
