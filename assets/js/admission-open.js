function numbersonly(e) {
  var a = e.charCode ? e.charCode : e.keyCode;
  if (8 != a && (a < 48 || a > 57)) return !1;
}
function hideallerormsg() {
  $("#errnm").hide(),
    $("#errph").hide(),
    $("#erem").hide(),
    $("#errcity").hide(),
    $("#errns").hide(),
    $("#errlocation").hide();
}
function datasubmit() {
  $("#validMsg").hide();
  var e = $("#Email").val();
  if ("" == $("#Name").val() || " " == $("#Name").val()) {
    setTimeout(hideallerormsg, 3e3), $("#errnm").show();
    return;
  }
  if ("" == $("#Email").val() || " " == $("#Email").val()) {
    setTimeout(hideallerormsg, 3e3), $("#erem").show();
    return;
  }
  if (1 > e.indexOf("@")) {
    setTimeout(hideallerormsg, 3500), $("#erem").show();
    return;
  }
  if (2 > e.indexOf(".")) {
    $("#erem").show();
    return;
  }
  if ("" == $("#Phone").val() || " " == $("#Phone").val()) {
    setTimeout(hideallerormsg, 3500), $("#errph").show();
    return;
  }
  if ("" == $("#Location").val() || " " == $("#Location").val()) {
    setTimeout(hideallerormsg, 3500), $("#errlocation").show();
    return;
  }
  if ("0" == $("#statename").val() || "" == $("#statename").val()) {
    setTimeout(hideallerormsg, 3500), $("#errns").show();
    return;
  }
  if ("0" == $("#cityname").val() || "" == $("#cityname").val()) {
    setTimeout(hideallerormsg, 3500), $("#errcity").show();
    return;
  }
  var a = {};
  (a.name = $("#Name").val()),
    (a.email = $("#Email").val()),
    (a.phone = $("#Phone").val()),
    (a.location = $("#Location").val()),
    (a.city = $("#cityname").val()),
    (a.state = $("#statename").val()),
    (a.message = $("#Message").val()),
    $.ajax({
      contentType: "application/json",
      url: "https://api.littlemillennium.net/ref/web/api/admission_form",
      type: "POST",
      data: JSON.stringify(a),
      headers: { "ADM-TOKEN": ADM_VTK },
      dataType: "json",
      cache: !1,
      timeout: 6e5,
      success: function (e) {
        (a.city = $("#cityname option:selected").text()),
          postToUdt(a),
          setInterval(function () {
            window.location.href = "admission-thankyou.html";
          }, 1e3);
      },
    });
}
$(document).ready(function () {
  $.ajax({
    url: "https://api.littlemillennium.net/ref/web/api/state_list",
    type: "get",
    dataType: "json",
    success: function (e) {
      var a = e.length;
      $("#cityname").children("option:not(:first)").remove();
      for (var t = 0; t < a; t++) {
        var i = e[t].statename;
        $("#statename").append('<option value="' + i + '">' + i + "</option>");
      }
    },
  }),
    $("#statename").change(function () {
      var e = $(this).val();
      $.ajax({
        url: "https://api.littlemillennium.net/ref/web/api/cities/" + e,
        type: "get",
        dataType: "json",
        success: function (e) {
          var a = e.length;
          $("#cityname").children("option:not(:first)").remove();
          for (var t = 0; t < a; t++) {
            var i = e[t].cityid,
              n = e[t].cityname;
            $("#cityname").append(
              '<option value="' + i + '">' + n + "</option>"
            );
          }
        },
      });
    });
});
var ADM_VTK = "8CABUQYTE9997JALDKMETHIANTWSIFL149C6FA21";
function postToUdt(e) {
  $.ajax({
    contentType: "application/json",
    url: "udt_action.php",
    type: "POST",
    data: JSON.stringify(e),
    dataType: "json",
    cache: !1,
    success: function (e) {
      console.log(e);
    },
  });
}
