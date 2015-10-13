function Creatxml() 
{
    alert("!!!");
    var thisform = document.all;
    var form_len = thisform.length;
    //alert(form_len);


    var out_string = '';


    out_string += '<XML>';
    var form_elem;
    for (var i = 0; i < form_len; i++) 
    {
        form_elem = document.all[i];
        if (form_elem.type == "text" || form_elem.type == "textarea") 
        {
            out_string += '<' + form_elem.id + '>';
            out_string += form_elem.value;
            out_string += '</' + form_elem.id + '>';
        }
        //---radio
        if (form_elem.type == "radio") 
        {
            out_string += '<' + form_elem.id + '>';
            out_string += form_elem.checked;
            out_string += '</' + form_elem.id + '>';
        }
        //---select
        if (form_elem.type == "select-one") 
        {
            var SItem = document.getElementById(form_elem.id);
            var SOption = SItem.options[SItem.selectedIndex];
            out_string += '<' + SOption.id + '>';
            out_string += SOption.text;
            out_string += '</' + SOption.id + '>';
        }
    }
    out_string += '</XML>';

    alert(out_string);

    CallbackRequest(out_string, "CreatXML.aspx");

    alert("XML created!");

}