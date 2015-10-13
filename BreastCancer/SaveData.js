function Save(no) //存檔
{
    var objform = document.forms[no];


    var thisform = document.forms[no];
    var form_len = thisform.length;


    var out_string = '', string;
    out_string += '<XML>';
    for (var i = 0; i < form_len; i++) 
    {
        form_elem = thisform.elements[i];
        string = form_elem.type;
        out_string += '<' + form_elem.id + '>';
        if (string == "radio")
        {
            if (form_elem.checked == true)
                out_string += "true";
            else
                out_string += "false";
        }
        else
            out_string += form_elem.value;
        out_string += '</' + form_elem.id + '>';
    }
    out_string += '</XML>';

    alert(out_string);

    CallbackRequest(out_string, "CreatXML.aspx");
}