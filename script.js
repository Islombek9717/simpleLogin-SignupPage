$(function () {
  $("h1 span").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("form").hide();
    $("." + $(this).data("class")).fadeIn(500);
  });
  $.validator.addMethod(
    "noSpace",
    function (value, element) {
      return value == "" || value.trim().length != 0;
    },
    "Spaces are not allowed"
  );
  var $register = $("#signup");
  if ($register.length) {
    $register.validate({
      rules: {
        username: {
          required: true,
          noSpace: true,
        },
        lsname: {
          required: true,
        },
        gender: {
          required: true,
        },
        female: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
        },
        cfpassword: {
          required: true,
          // equalTo:"#password"
        },
      },
      messages: {
        username: {
          required: "Please enter username",
        },
        lsname: {
          required: "Please enter lastname",
        },
        gender: {
          required: "Please submit your gender",
        },

        email: {
          required: "Please enter email",
          email: "Please enter valid email",
        },
        password: {
          required: "Please enter the password",
        },
        cfpassword: {
          required: "Please enter the password",
          // equalTo:"Please enter the same password"
        },
      },
      errorPlacement: function (error, element) {
        if (element.is(":radio")) {
          error.appendTo(element.parents(".gender"));
        } else {
          error.insertAfter(element);
        }
      },
    });
  }
});
