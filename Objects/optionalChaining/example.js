let exmp = {};

console.log(exmp?.name?.second);

let userAdmin = {
    admin() {
      console.log("Я админ");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // Я админ
  
  userGuest.admin?.(); // ничего