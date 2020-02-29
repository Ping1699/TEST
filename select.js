$(document).ready(function() {

    var sel=doc.createElement("select");

    var opt=doc.createElement("option");
    var opt=$(opt);
    $(opt).text("+");
    $(opt).val("plus");
    $(sel).append (opt);

     var opt=doc.createElement("option");
     var opt=$(opt);
    $(opt).text("-");
    $(opt).val("minus");
    $(sel).append (opt);

     var opt=doc.createElement("option");
     var opt=$(opt);
    $(opt).text("*");
    $(opt).val("multiply");
    $(sel).append (opt);

     var opt=doc.createElement("option");
     var opt=$(opt);
    $(opt).text("");
    $(opt).val("square root");
    $(sel).append (opt);

    $("#ops").append(sel);

}