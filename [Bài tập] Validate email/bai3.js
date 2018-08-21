function checkEmail(str) {
    regexp = /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/;
    str = prompt("nhập email");
    if (regexp.test(str)) {
        alert("email hợp lê");
    } else {
        alert("email không hợp lệ");
    }

}
