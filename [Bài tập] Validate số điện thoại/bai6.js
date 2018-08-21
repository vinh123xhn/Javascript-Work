function checkPhonenumber(str) {
    regexp = /^[0-9]{2}[-0]{2}[0-9]{8,}$/;
    str = prompt("nhập số điện thoại",'');
    if (regexp.test(str)){
        alert("số điện thoại đúng");
    } else {
        alert("số điện thoại sai");
    }
}