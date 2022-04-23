let show = document.querySelectorAll(".question_answer_accodion");
show.forEach((question) => {
    question.addEventListener("click", () => {
        if (question.classList.contains("active")) {
            question.classList.toggle("active");
        } else {
            show.forEach((element) => {
                element.classList.remove("active");
            });
            question.classList.add("active");
        }
    });
});
