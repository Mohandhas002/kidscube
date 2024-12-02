function corpdatasubmit() {
  WCF_VTK = "8CABUQYTE8887B7652METHDNSKIFL149C6FA98";
  var a = {};
  (a.name = $("#name").val()),
    (a.email = $("#email").val()),
    (a.phone = $("#phone").val()),
    (a.location = $("#location").val()),
    (a.company = $("#company").val()),
    $.ajax({
      contentType: "application/json",
      url: "https://api.littlemillennium.net/ref/web/api/corp_tieup_form",
      type: "POST",
      data: JSON.stringify(a),
      headers: { "WCCFM-TOKEN": WCF_VTK },
      dataType: "json",
      cache: !1,
      timeout: 6e5,
      beforeSend: function () {},
      complete: function () {},
      success: function (a) {
        window.location.href = "corporate_tieup_thankyou.html";
      },
    });
}
