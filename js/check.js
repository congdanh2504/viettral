$.each($('.input-group input'),(index, value)=>{
    $(value).on('input', () => {
        $(value).css('borderColor', 'green');
        if ($(value).val() == ""){
            $(value).css('borderColor', 'red');
        }
    });
});

$('#emailsu').on('input', () => {
    if (!validateEmail($('#emailsu').val())){
        $('#emailsu').css('borderColor', 'red');
    } else {
        $('#emailsu').css('borderColor', 'green');
    }
})

$('#cpasssu').on('input', () => {
    if ($('#cpasssu').val() != $('#passsu').val()){
        $('#cpasssu').css('borderColor', 'red');
    } else {
        $('#cpasssu').css('borderColor', 'green');
    }
})

function validateFormSI(e) {
    if ($("#usersi").val() == "" || $("#passsi").val() == "") {
        if ($("#usersi").val() == ""){
            $("#usersi").css('borderColor', 'red');
        } 
        if ($("#passsi").val() == "") {
            $("#passsi").css('borderColor', 'red');
        }
        return false;
    } 
    let query = "?username=" + $("#usersi").val() + "&password=" + $("#passsi").val();
    e.href = "trangchu.html"+query
}

function validateForm(e) {
    if ($("#emailsu").val() == "" || $("#usersu").val() == "" || $("#passsu").val() == "" || $("#cpasssu").val() == "" || $("#usersu").val() == "admin") {
        if ($("#emailsu").val()== ""){
            $("#emailsu").css('borderColor', 'red');
        }
        if ($("#usersu").val() == "" || $("#usersu").val() == "admin"){
            $("#usersu").css('borderColor', 'red');
        }
        if ($("#passsu").val() == ""){
            $("#passsu").css('borderColor', 'red');
        }
        if ($("#cpasssu").val()  == ""){
            $("#cpasssu").css('borderColor', 'red');
        }
        return false;
    } 
    if ($("#passsu").val() != $("#cpasssu").val()){
        $("#passsu").css('borderColor', 'red');
        $("#cpasssu").css('borderColor', 'red');
        return false;
    } 
    if (validateEmail($("#emailsu").val())==false){
        $("#emailsu").css('borderColor', 'red');
        return false;
    }
    let query = "?username=" + $("#usersu").val() + "&password=" + $("#passsu").val();
    e.href = "trangchu.html"+query
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}