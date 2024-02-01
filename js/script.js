function validateform(){
    const nama = document.forms['contact-form']['name-input'].value
    const getmail = document.forms['contact-form']['email-input'].value
    const getinterest = document.forms['contact-form']['interest-input'].value

    if (nama== ''){
        document.getElementById("error-name").innerHTML = "Nama Tidak Boleh Kosong!"
        return false
    }
    else if (getmail== ''){
        document.getElementById("error-email").innerHTML = "Email Tidak Boleh Kosong!"
        return false
    }
    else if (getinterest== ''){
        document.getElementById("error-interest").innerHTML = "Pilih Salah Satu"
        return false
    }

    setname(nama)
    return false

}    
function setname(name){
    document.getElementById('name').innerHTML = name;
    document.getElementById('error-name').innerHTML="";
    
    return false;

}


// slide image-------------------------------------------
var slideindex = 1;
showDivs(slideindex);

function plusDivs(m){
    showDivs(slideindex += m);
}

function showDivs(m) {
    var i;
    var imglist = document.getElementsByClassName('img-slideshow');
    if (m > imglist.length) slideindex = 1;
    else if (m < 1) slideindex = imglist.length;

    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display = "none";
    }
    imglist[slideindex - 1].style.display = 'block';
}


setInterval(() => {
    plusDivs(1);
}, 1000)

