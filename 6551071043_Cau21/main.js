const $input = $("#todo-input");
const $addBtn = $("#add-btn");
const $list = $("#todo-list");

$addBtn.on("click", () => {
    const text = $input.val().trim(); 

    if (text === "") {
        return alert("Vui lòng nhập công việc!");
    }

    const $li = $("<li>").text(text); 

    const $delBtn = $("<button>")
        .text("X")
        .addClass("delete-btn");

    $delBtn.on("click", (e) => {
        e.stopPropagation();
        $li.remove();
    });

    $li.on("click", () => {
        $li.toggleClass("completed");
    });

    $li.append($delBtn); 
    $list.append($li); 
    
    $input.val("");
});

$input.on("keypress", (e) => {
    if (e.key === "Enter") {
        $addBtn.trigger("click");
    }
});