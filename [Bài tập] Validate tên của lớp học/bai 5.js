function checkClass(str) {
    regexp = /^[C,A,P]{1}[0-9]{4}[G,H,I,K,L,M]{1}$/;
    str=prompt("nhập tên lớp",'');
    if (regexp.test(str)){
        alert("tên lớp học đúng rồi");
    }
    else {
        alert("tên lớp học sai rồi");
    }
}