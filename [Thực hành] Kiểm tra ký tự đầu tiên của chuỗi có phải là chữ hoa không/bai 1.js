function isUpperCase(str) {
    str = prompt("nhập thử nào",'');
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        alert("String is first character is uppercase");
    }
    else {
        alert("string's first character is not uppercase ");
    }
}