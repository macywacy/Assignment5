function getlist()
{
 var listRequest= new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
 
     listRequest.onreadystatechange = function()
    {
        if (listRequest.readyState == 4 && listRequest.status == 200)
        {
            var output = JSON.parse(listRequest.responseText);
        GenerateOutput(output);
        }
    };
    
    listRequest.open("GET", url, true);
listRequest.send();
}
function GenerateOutput(result)
{
    var count = 0;
    table = "";
    
    table += ('<th>'+'Customer ID'+
              '<th>'+ 'Company Name'+
              '<th>' + 'City');
    
    for (count = 0; count < result.GetAllCustomersResult.length; count++)
    {
  table += "<tr>";
table += "<td>"+ result.GetAllCustomersResult[count].CustomerID+"</td>";
table += "<td>"+ result.GetAllCustomersResult[count].CompanyName+"</td>";
table += "<td>"+ result.GetAllCustomersResult[count].City+"</td>";
table += "</tr>";
}
document.getElementById("listdisplay").innerHTML=table;
}






function gethistory()
{
var objRequest= new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("hist").value;
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
        GenerateOutput2(output);
    }
};
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput2(result)
{
    var count = 0;
    table ="";
  table += ('<th>' + 'Product Name'+
              '<th>'+'Total');
  
  for (count = 0; count < result.length; count++)
  {
  table += "<tr>";
table += "<td>"+ result[count].ProductName+"</td>";
table += "<td>"+ result[count].Total+"</td>";
table += "</tr>";
}
document.getElementById("historydisplay").innerHTML=table;
}
    
function getorders()
{
    var objRequest= new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("custid").value;
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
        GenerateOutput3(output);
    }
};
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput3(result)
{
    var count = 0;
    table ="";
    
    table += ('<th>' + 'Order Date'+
              '<th>'+'Order ID' +
              '<th>'+'Ship Address'+
              '<th>'+'Ship City'+
              '<th>'+'Ship Name'+
              '<th>'+'Ship Postcode'+
              '<th>'+'Shipped Date');
    
    
    
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
    {
table += "<tr>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].OrderDate+"</td>"; 
table += "<td>"+ result.GetOrdersForCustomerResult[count].OrderID+"</td>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].ShipAddress+"</td>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].ShipCity+"</td>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].ShipName+"</td>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].ShipPostcode+"</td>";
table += "<td>"+ result.GetOrdersForCustomerResult[count].ShippedDate+"</td>";
        table+="</tr>";
    }
    
    document.getElementById("orderdisplay").innerHTML = table;
    }
    
    
    
   function menuchoice()
   {
   
if (document.getElementById("menu").value=="CustomerList")
{
    
    document.getElementById("section1").style.display="block";
    document.getElementById("section2").style.display="none";
    document.getElementById("section3").style.display="none";

}
else if (document.getElementById("menu").value=="getCustomerOrderHistory")
{
    
    document.getElementById("section2").style.display="block";
   document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
}
else if (document.getElementById("menu").value=="getOrdersForCustomer")
{

document.getElementById("section3").style.display="block";
document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    }
   else
   {
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
   }
   }