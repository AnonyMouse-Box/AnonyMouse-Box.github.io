let circle = document.getElementsByClassName('circle')

const progress = (id) => {
  if(document.getElementById(id).value === 100){
    window.alert('Complete!');
    document.getElementById(id).value = 0;
    circle.classList.add('animate');
  } else {
    document.getElementById(id).value ++;
    document.getElementById(id).title = document.getElementById(id).value;
  }
}
