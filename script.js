document.addEventListener("DOMContentLoaded",function (){
  const orderForm = document.getElementById("orderForm");
  const orderButton = document.getElementById("orderButton");

  orderForm.addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    if(name.trim() === '' || email.trim() === '' || phone.trim() === ''){
      alert("please fill out all fields.");
      return;
    }
    orderForm.submit();
  });
});