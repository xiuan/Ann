function ReadXML() //讀入已有資訊
{
    var file = document.getElementById("file").files[0];
    document.getElementById("fileName").textContent = file.name;
    document.getElementById("fileSize").textContent = "(" + file.size + "byte)";

    document.getElementById("fileName").style.visibility = "visible";
    document.getElementById("fileSize").style.visibility = "visible";


    var reader = new FileReader();

    reader.onload = function() {
        //var display = document.getElementById("content");
        //display.textContent = reader.result;

        //alert(reader.result);

        //-----------------------------------------------------判斷tagname是否相同
        //將reader.result 放到  XML DOM 物件當中

        var xmlDoc, XmlStr;
        XmlStr = reader.result;

        if (window.ActiveXObject) 
        {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");

            xmlDoc.async = false;

            xmlDoc.load(XmlStr);
        }

        else if (document.implementation && document.implementation.createDocument) 
        {
            xmlDoc = document.implementation.createDocument("", "", null);
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(XmlStr, "text/xml");
        }

        else 
        {
            alert('無法載入檔案');
        }

        //  將取回的資料回填到表單當中 //
        var thisform = document.forms[0];
        var form_len = thisform.length;
        var form_elem;

        var objNodeLen = xmlDoc.documentElement.childNodes.length;

        //for (var i = 0; i < form_len; i++) 
        //{
        for (var j = 0; j < objNodeLen; j++) 
        {
            //form_elem = thisform.elements[i];
            var curNode = xmlDoc.documentElement.childNodes;
            var attnode = curNode.item(j)

            if (attnode.nodeType == 1) 
            {
                if (attnode.getAttributeNode("dataType").value == "select" || attnode.getAttributeNode("dataType").value == "radio" || attnode.getAttributeNode("dataType").value == "check") 
                {
                    var Code_len = curNode.item(j).childNodes.length;

                    for (var k = 0; k < Code_len; k++) 
                    {
                        var child = curNode.item(j).childNodes.item(k);
                        //if (child.nodeType == 1)
                            //alert(child.getAttributeNode("code").value);
                    }
                }
                else
                    alert(attnode.getAttributeNode("code").value);
            }

            //                if (form_elem.id == curNode.nodeName) 
            //                {
            //                    form_elem.value = curNode.firstChild.nodeValue;
            //                }

        }
        //}
    };

    //var encodingList = document.getElementById("encoding");
    var encoding = "UTF-8";

    reader.readAsText(file, encoding);
}