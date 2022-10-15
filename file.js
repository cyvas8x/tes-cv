function openNav() {
    document.getElementById("mySidebar").style.width = "160px";
    document.getElementById("geser").style.marginLeft = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("geser").style.marginLeft= "0";
  }

  const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}
