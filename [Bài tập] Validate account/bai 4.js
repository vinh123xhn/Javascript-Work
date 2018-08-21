function checkAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    str = prompt("nhập account");
    if (regexp.test(str)) {
        alert("account hợp lê");
    } else {
        alert("account không hợp lệ");
    }

}
