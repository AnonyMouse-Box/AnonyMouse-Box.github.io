const hide = () => {
  document.getElementsByTagName("nav")[0].setAttribute("id", "hide");
  document.getElementsByClassName("unhide")[0].removeAttribute("id");
}

const unhide = () => {
  document.getElementsByClassName("unhide")[0].setAttribute("id", "hide");
  document.getElementsByTagName("nav")[0].removeAttribute("id");
}
