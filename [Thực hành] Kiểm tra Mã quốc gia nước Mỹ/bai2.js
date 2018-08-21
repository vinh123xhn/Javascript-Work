function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)){
        return true;
    }
    else {
        return false;
    }
}
var zipcode = prompt("nhập code đi",'');
alert("check code này nhé" + is_usZipCode(zipcode));