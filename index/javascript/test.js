const hide = () => {
  document.getElementsByClassName("unhide")[0].removeAttribute("id");
  document.getElementsByTagName("nav")[0].setAttribute("id", "collapse");
  document.getElementsByClassName("title")[0].setAttribute("id", "hide");
  document.getElementsByClassName("quote")[0].setAttribute("id", "hide");
  document.getElementsByClassName("content")[0].setAttribute("id", "hide-top");
}

const unhide = () => {
  document.getElementsByClassName("unhide")[0].setAttribute("id", "hide");
  document.getElementById("nav")[0].removeAttribute("id");
  document.getElementsByClassName("title")[0].removeAttribute("id");
  document.getElementsByClassName("quote")[0].removeAttribute("id");
  document.getElementsByClassName("content")[0].removeAttribute("id");
}
