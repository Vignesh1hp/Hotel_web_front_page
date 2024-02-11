document.addEventListener("DOMContentLoaded",function (){
  console.log("DOM fully loaded and parsed");
  const orderForm = document.getElementById("orderForm");

  orderForm.addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    if(name.trim() === '' || email.trim() === '' || phone.trim() === ''){
      alert("please fill out all fields.");
      return;
    }
    this.submit();
  });
});