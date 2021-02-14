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
                <div>${todo.start}</div>
                <div>~</div>
                <div>${todo.end}</div>
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
