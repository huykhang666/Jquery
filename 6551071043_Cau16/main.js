$(document).ready(function() {
    $("#datepicker").datepicker({
        dateFormat: "mm/dd/yy",
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100"
    });
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    $(".add-row").click(function() {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const birthdate = $("#datepicker").val().trim();
        if (name === "") {
            alert("Please enter Name.");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Please enter a valid Email.");
            return;
        }
        if (birthdate === "") {
            alert("Please enter Birthdate.");
            return;
        }
        const newRow = `<tr>
            <td><input type="checkbox" class="row-select"></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${birthdate}</td>
        </tr>`;

        $("table tbody").append(newRow);
        $("#name").val("");
        $("#email").val("");
        $("#datepicker").val("");
    });
    $(".delete-row").click(function() {
        $("table tbody input.row-select:checked").closest("tr").remove();
    });

});