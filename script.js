$(document).on("pageshow", "#loginPage", function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // 1. Kalau kosong
        if (username === "" || password === "") {

            $("#popupError").text("Sila isi username dan password").popup("open");

        } 
        // 2. Kalau betul
        else if (username === "admin" && password === "1234") {

            $("#popupSuccess").text("Berjaya login!").popup("open");

            // pergi page selepas 1 saat
            setTimeout(function () {
                $.mobile.changePage("#homePage");
            }, 1000);

        } 
        // 3. Kalau salah
        else {

            $("#popupError").text("Username atau password salah").popup("open");

        }

    });

});