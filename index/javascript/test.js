const hide = () => {
  document.getElementsByClassName("unhide")[0].removeAttribute("id");
  document.getElementsByClassName("hide")[0].setAttribute("id", "disappear");
  document.getElementsByTagName("nav")[0].setAttribute("id", "collapse");
  document.getElementsByClassName("title")[0].setAttribute("id", "hide");
  document.getElementsByClassName("quote")[0].setAttribute("id", "hide");
  document.getElementsByClassName("content")[0].setAttribute("id", "hide-top");
  document.getElementsByClassName("menu")[0].setAttribute("id", "hide");
}

const unhide = () => {
  document.getElementsByClassName("unhide")[0].setAttribute("id", "disappear");
  document.getElementsByClassName("hide")[0].removeAttribute("id");
  document.getElementById("nav")[0].removeAttribute("id");
  document.getElementsByClassName("title")[0].removeAttribute("id");
  document.getElementsByClassName("quote")[0].removeAttribute("id");
  document.getElementsByClassName("content")[0].removeAttribute("id");
  document.getElementsByClassName("menu")[0].removeAttribute("id");
}
