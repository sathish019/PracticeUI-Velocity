$(document).ready(function() {
    var userActivity = [
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        },
        {
          id: "#2178",
          subject: "Refund request",
          requested_date: "09/10/2019",
          latest_update: "08/21/2020",
          status: "Active",
          action: "Open"
        }
      ];
    
      $.each(userActivity, function(index, value) {
        console.log("user list");
        $("#user-activity").append(
          '<tr class="align-font-center bg-white border-btm"><td>' +
            value.id +
            "</td><td>" +
            value.subject +
            "</td><td>" +
            value.requested_date +
            "</td><td>" +
            value.latest_update +
            "</td><td>" +
            value.status +
            '</td><td class="blue-color pointer">' +
            value.action +
            "</td></tr>"
        );
      });
});