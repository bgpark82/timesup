const Input = function ({
    onChangeStart,
    onChangeEnd,
    onChangeTitle,
    onClickSave,
}) {
    this.init = () => {
        this.$start = document.querySelector(".input__start");
        this.$end = document.querySelector(".input__end");
        this.$title = document.querySelector(".input__title");
        this.$btn = document.querySelector(".input__btn");
        this.state;

        this.bindEvents();
    };

    this.bindEvents = () => {
        this.$start.addEventListener("change", onChangeStart);
        this.$end.addEventListener("change", onChangeEnd);
        this.$title.addEventListener("change", onChangeTitle);
        this.$btn.addEventListener("click", this.onClickSave);
    };

    this.onClickSave = (e) => {
        this.setTimeout();
        onClickSave(e);
    };

    this.setTimeout = () => {
        const start = Date.now();

        const [endHour, endMinute] = this.state.todo.end.split(":");
        const date = new Date();
        date.setHours(endHour);
        date.setMinutes(endMinute);
        date.setSeconds(0);
        const end = Date.parse(date);

        const hours = end - start;

        const timeout = setTimeout(function () {
            alert("TimesUp!");
        }, hours);
    };

    this.setState = (state) => {
        this.state = state;
    };

    this.render = () => {
        this.$start.innerHTML = "";
        this.$end.innerHTML = "";
        this.$title.innerHTML = "";
    };

    this.init();
};

export default Input;