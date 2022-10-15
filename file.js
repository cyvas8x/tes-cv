function openNav() {
    document.getElementById("mySidebar").style.width = "160px";
    document.getElementById("geser").style.marginLeft = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("geser").style.marginLeft= "0";
  }

  function darkmode() {
    if (document.getElementById('darkmode-toggle').checked) {
      var element = document.body;
      element.classList.toggle("dark");   
    } else {
        var element = document.body;
        element.classList.toggle("normal")
    }
}
