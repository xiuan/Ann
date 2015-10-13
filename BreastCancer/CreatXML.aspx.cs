using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.IO;
using System.Xml;
using System.Data.OleDb;
using System.Data.SqlClient;

public partial class CreatXML : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //-----------------------------------------------------------產生XML檔案
        StreamReader reader = new StreamReader(Request.InputStream);
        string xmlData = reader.ReadToEnd();

        XmlDocument doc = new XmlDocument();
        doc.LoadXml(xmlData);

        doc.Save(MapPath("~/App_Data/NewForm.xml"));
        Response.Write("XML created!");

    }
}
