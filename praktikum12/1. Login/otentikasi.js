function Login(){ 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user=="anan04" && pass=="049"){
        alert("Selamat anda berhasil login");
    }else{
        alert("Username dan password anda salah!");
    }
}