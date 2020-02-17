$(document).ready(function() {
  var serviceRemainders = {
    serviceNeeded: [
      {
        name: "Spire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "EOS",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Eagle",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Bebop",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    waiting: [
      {
        name: "Expedition",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Bliss",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Vigor",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    inService: [
      {
        name: "Scorpion",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Resolve",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ],
    fullyServiced: [
      {
        name: "Empire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "EOS",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Spire",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      },
      {
        name: "Nebula",
        price: "$233",
        item: "Tire replacement",
        date: "06/12/2019"
      }
    ]
  };

  $.each(serviceRemainders.serviceNeeded, function(index, value) {
    $("#service-needed").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-blue"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.waiting, function(index, value) {
    $("#waiting").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-green"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.inService, function(index, value) {
    $("#in-service").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-blue"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });

  $.each(serviceRemainders.fullyServiced, function(index, value) {
    $("#fully-serviced").append(
      '<div class="mg-t-15p pd-20 bg-white pointer border-left-green"><div class="dp-flex-sp-bw"><div>' +
        value.name +
        "</div><div>" +
        value.price +
        '</div></div><div class="dp-flex-sp-bw icon-color mg-t-5p"><div>' +
        value.item +
        "</div><div>" +
        value.date +
        "</div></div></div>"
    );
  });
});
