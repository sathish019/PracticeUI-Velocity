$(document).ready(function() {
  var driversList = [
    {
      driverName: "Bebon",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Gran Tesoro",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Belafonte",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    },
    {
      driverName: "Chester",
      price: "$6,234",
      brand: "Volvo",
      miles: "123 miles"
    }
  ];

  $.each(driversList, function(index, value) {
    $("#drivers-list").append(
      '<div class="dp-flex pd-10"> <div class="circle-48 prime-bg-color p-relative"><div class="circle-16 bg-blue p-absolute right-0"></div></div> <div class="dp-flex-c mg-l-10p w-80 mg-t-5p"><div class="dp-flex-sp-bw"><span>' +
        value.driverName +
        "</span><span>" +
        value.price +
        '</span></div> <div class="dp-flex-sp-bw"> <span>' +
        value.brand +
        "</span> <span>" +
        value.miles +
        "</span></div></div> </div>"
    );
  });

  var serviceRemainders = [
    { vehicle: "#11283" },
    { vehicle: "#11456" },
    { vehicle: "#11567" },
    { vehicle: "#12343" }
  ];

  $.each(serviceRemainders, function(index, value) {
    $("#service-remainder").append(
      '<div class="dp-flex-sp-bw mg-l-5 mg-r-5 mg-t-10p"><label class="container">Vehicle: ' +
        value.vehicle +
        '<input type="checkbox" > <span class="checkmark"></span></label><div class="due-label fs-12">Due Today</div></div>'
    );
  });

  var latestTrips = [
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    },
    {
      destination: "Bebon",
      price: "$6,234",
      date: "Volvo",
      time: "13 mins"
    }
  ];

  $.each(latestTrips, function(index, value) {
    $("#latest-trips").append(
      '<div class="dp-flex pd-10"> <div class="dp-flex-c mg-l-10p w-95 mg-t-5p"><div class="dp-flex-sp-bw"><span>' +
        value.destination +
        "</span><span>" +
        value.price +
        '</span></div> <div class="dp-flex-sp-bw"> <span>' +
        value.date +
        "</span> <span>" +
        value.time +
        "</span></div></div> </div>"
    );
  });

  var vehiclesDashboard = [
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "137",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "234",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "345",
      energy_used: "450kwh",
      action: "Manage"
    },
    {
      name: "Spire",
      id: "#12010",
      vehicle_model: "Tesla Model X",
      next_service: "08/21/2020",
      trips: "567",
      energy_used: "450kwh",
      action: "Manage"
    }
  ];

  pushVehiclesdashboard(vehiclesDashboard);

  // Get the modal
  var modal = document.getElementById("myModal");

  // Form that opens the modal
  var form = document.getElementById("add-vehicle-details");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close-btn")[0];

  // When the user clicks the button, open the modal
  form.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function(event) {
    console.log(span);
    if (event.target == span) {
      modal.style.display = "none";
      console.log("close opt");
    }
    event.stopPropagation();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      console.log(event.target);
      modal.style.display = "none";
      console.log("outside modal");
    }
  };

  $("#vehicles-modal-form").submit(function(event) {
    console.log(vehiclesDashboard);
    var vehName = $("#vName").val();
    var vehId = $("#vId").val();
    var vehModel = $("#vModel").val();
    var vehDuedate = $("#vDuedate").val();
    var vehTrips = $("#vTrips").val();
    var vehEnergy = $("#vEnergy").val();
    var vehAction = "Manage";
    vehiclesDashboard.push({
      name: vehName,
      id: vehId,
      vehicle_model: vehModel,
      next_service: vehDuedate,
      trips: vehTrips,
      energy_used: vehEnergy,
      action: vehAction
    });
    pushVehiclesdashboard(vehiclesDashboard);
    $("#add-vehicle-details").hide();
  });

  $("#slider-range").change(function(event) {
    pushVehiclesdashboard(vehiclesDashboard);
  });
});

var sliderBar = document.getElementById("slider-range");

function pushVehiclesdashboard(vehiclesDashboard) {
  $("#vehicles-dashboard").html("");
  $.each(vehiclesDashboard, function(index, value) {
    var totalTrips = Number(value.trips);
    if (totalTrips >= sliderBar.value) {
      $("#vehicles-dashboard").append(
        '<tr class="align-font-center bg-white border-btm"> <td class="dp-flex align-it-center"><div class="dp-flex-c circle-34 prime-bg-color"></div><div class="dp-flex-c mg-l-10p"><div>' +
          value.name +
          '</div><div class="mg-t-5p">' +
          value.id +
          "</div></div></td><td>" +
          value.vehicle_model +
          "</td><td>" +
          value.next_service +
          "</td><td>" +
          value.trips +
          "</td><td>" +
          value.energy_used +
          '</td><td class="blue-color pointer">' +
          value.action +
          "</td></tr>"
      );
    }
  });
}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(12.972442, 77.580643),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
