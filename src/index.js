require('jquery' );
require('datatables.net' );
require('datatables.net-bs' );
import 'bootstrap';
import 'bootstrap-grid';
// require(  'bootstrap');
// import './css/bootstrap.css';
// import './css/bootstrap-grid.css';
import './css/Site.css';

function CargarTabla(){
  
    $.ajax({
      url:'https://dog.ceo/api/breeds/list/all',
      dataType: 'json',
      success: function (data) {
          const breedNames = data.message;
          for (const key in breedNames) 
          {
            var body = "<tr>";
            body    += "<td>" + key + "</td>";
            body    += "</tr>";
            $("#myTable").append(body);
          }
      $('#myTable').DataTable();

      }
  });
}

function CargarCombo()
{
  $.get('https://dog.ceo/api/breeds/list/all',(data) => 
  {
      const breedNames = data.message;
      const select = document.getElementById('select');
  
      for (const key in breedNames) {
        if (breedNames.hasOwnProperty(key)) {
          const option = document.createElement('option');
          option.value = key;
          option.innerHTML = key;
          
          select.appendChild(option);        
        }
      }
  });
}

let $elem = $(".myheader2");
$elem.is('h2') && console.log("Efectivamente es un h2");
CargarTabla();
CargarCombo();