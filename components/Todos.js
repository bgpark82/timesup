const Todos = function () {
    this.init = () => {
        this.state;
        this.$todos = document.querySelector(".todos");
    };

    this.render = () => {
        this.$todos.innerHTML = "";

        this.state.todos.map((todo) => {
            const $div = document.createElement("div");
            $div.className = "todos__item";
            $div.innerHTML = `
                <div class="input__start">
                    <div>${todo.startHour}</div>:<div>${todo.startMinute}</div>
                </div>
                <div>~</div>
                <div class="input__end">
                    <div>${todo.endHour}</div>:<div>${todo.endMinute}</div>
                </div>
                <div>${todo.title}</div>
            `;
            this.$todos.appendChild($div);
        });
    };

    this.setState = (state) => {
        this.state = state;
    };

    this.init();
};

export default Todos;
