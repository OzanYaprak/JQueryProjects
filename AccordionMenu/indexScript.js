$(function () {
    $("#accordion p:not(:first)").hide();
    $("#accordion h4").click(function () {
        $(this).next().slideToggle(500).siblings("p:visible").slideUp(500);
        //Burada bulunan this selector u h4 ü temsil ediyor, next ise html tarafında seçilmiş olan selector den sonraki gelen html etiketini temsil ediyor, burada <p></p> etiketine denk geliyor.
    })
});