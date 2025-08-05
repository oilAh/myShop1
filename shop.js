// ข้อมูลลูกค้า
function loadXMLDoc() { // ฟังก์ชันสำหรับโหลด XML
    // สร้าง XMLHttpRequest object เพื่อดึงข้อมูล XML 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this); // เมื่อโหลดข้อมูลเสร็จแล้ว เรียกใช้ฟังก์ชัน myFunction
      }
    };
    xmlhttp.open("GET", "customer.xml", true); // เปิดการเชื่อมต่อกับไฟล์ XML
    // "GET" คือวิธีการดึงข้อมูล, "dbshop.xml" คือชื่อไฟล์ XML ที่จะดึงข้อมูล
    xmlhttp.send(); // ส่งคำขอไปยังเซิร์ฟเวอร์
}
  
function myFunction(xml) { // ฟังก์ชันที่ใช้จัดการข้อมูล XML ที่โหลดมา
    // ประกาศตัวแปรสำหรับเก็บข้อมูลจาก XML
    var firstName, lastName, nickname, age, id, i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
    xmlDoc = xml.responseXML; // แปลงข้อมูล XML ที่ได้รับเป็นเอกสาร XML
    txt1 = "";
    txt2 = "";
    txt3 = "";
    txt4 = "";
    txt5 = "";

       //tag name ใน XML
    firstName = xmlDoc.getElementsByTagName("firstName");
    lastName = xmlDoc.getElementsByTagName("lastName");
    nickname = xmlDoc.getElementsByTagName("nickname");
    age = xmlDoc.getElementsByTagName("age");
    id = xmlDoc.getElementsByTagName("id");

    for (var i = 0; i < firstName.length; i++) {
      
      txt1 += firstName[i].childNodes[0].nodeValue + "<br>";
      txt2 += lastName[i].childNodes[0].nodeValue + "<br>";
      txt3 += nickname[i].childNodes[0].nodeValue + "<br>";
      txt4 += nickname[i].childNodes[0].nodeValue + "<br>";
      txt5 += id[i].childNodes[0].nodeValue + "<br>";
  }
    document.getElementById("demo1").innerHTML = txt1;  // แสดงผลใน HTML
    document.getElementById("demo2").innerHTML = txt2;
    document.getElementById("demo3").innerHTML = txt3;
    document.getElementById("demo4").innerHTML = txt4;
    document.getElementById("demo5").innerHTML = txt5;
}


//ข้อมูลสินค้า
function loadXMLDoc1() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this);
    }
  };
  xmlhttp.open("GET", "product.xml", true);
  xmlhttp.send();
}

function myFunction1(xml) {
  var id, product, description, price, quantity, i, xmlDoc, txt1, txt2, txt3, txt4, txt5 ;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  id = xmlDoc.getElementsByTagName("id");
  product = xmlDoc.getElementsByTagName("product");
  description = xmlDoc.getElementsByTagName("description");
  price = xmlDoc.getElementsByTagName("price");
  quantity = xmlDoc.getElementsByTagName("quantity");

  for (i = 0; i < id.length; i++) {
    txt1 += id[i].childNodes[0].nodeValue + "<br>";
    txt2 += product[i].childNodes[0].nodeValue + "<br>";
    txt3 += description[i].childNodes[0].nodeValue + "<br>";
    txt4 += price[i].childNodes[0].nodeValue + "<br>";
    txt5 += quantity[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("po1").innerHTML = txt1;
  document.getElementById("po2").innerHTML = txt2;
  document.getElementById("po3").innerHTML = txt3;
  document.getElementById("po4").innerHTML = txt4;
  document.getElementById("po5").innerHTML = txt5;
}

//ข้อมูลพนักงานขาย
function loadXMLDoc2() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this);
    }
  };
  xmlhttp.open("GET", "order.xml", true);
  xmlhttp.send();
}

function myFunction2(xml) {
  var name, product, quantity, price, total,i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  name = xmlDoc.getElementsByTagName("name");
  product = xmlDoc.getElementsByTagName("product");
  quantity = xmlDoc.getElementsByTagName("quantity");
  price = xmlDoc.getElementsByTagName("price");
  total = xmlDoc.getElementsByTagName("total");

  for (i = 0; i < name.length; i++) {
    txt1 += name[i].childNodes[0].nodeValue + "<br>";
    txt2 += product[i].childNodes[0].nodeValue + "<br>";
    txt3 += quantity[i].childNodes[0].nodeValue + "<br>";
    txt4 += price[i].childNodes[0].nodeValue + "<br>";
    txt5 += total[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("em1").innerHTML = txt1;
  document.getElementById("em2").innerHTML = txt2;
  document.getElementById("em3").innerHTML = txt3;
  document.getElementById("em4").innerHTML = txt4;
  document.getElementById("em5").innerHTML = txt5;
}

function loadXMLDoc3() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction3(this);
    }
  };
  xmlhttp.open("GET", "transport.xml", true);
  xmlhttp.send();
}

function myFunction3(xml) {
  var transportID, company, type, date, status,i, xmlDoc, txt1, txt2, txt3, txt4, txt5;
  xmlDoc = xml.responseXML;
  txt1 = "";
  txt2 = "";
  txt3 = "";
  txt4 = "";
  txt5 = "";

  transportID = xmlDoc.getElementsByTagName("transportID");
  company = xmlDoc.getElementsByTagName("company");
  type = xmlDoc.getElementsByTagName("type");
  date = xmlDoc.getElementsByTagName("date");
  status = xmlDoc.getElementsByTagName("status");

  for (i = 0; i < transportID.length; i++) {
    txt1 += transportID[i].childNodes[0].nodeValue + "<br>";
    txt2 += company[i].childNodes[0].nodeValue + "<br>";
    txt3 += type[i].childNodes[0].nodeValue + "<br>";
    txt4 += date[i].childNodes[0].nodeValue + "<br>";
    txt5 += status[i].childNodes[0].nodeValue + "<br>";
    
  }
  document.getElementById("buy1").innerHTML = txt1;
  document.getElementById("buy2").innerHTML = txt2;
  document.getElementById("buy3").innerHTML = txt3;
  document.getElementById("buy4").innerHTML = txt4;
  document.getElementById("buy5").innerHTML = txt5;
}
