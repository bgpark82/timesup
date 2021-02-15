import Todos from "./components/Todos.js";
import Input from "./components/Input.js";

new (function () {
    this.init = () => {
        this.state = {
            todo: {},
            todos: [],
        };

        this.todos = new Todos();
        this.input = new Input({
            onChangeInput: this.onChangeInput,
            onChangeTitle: this.onChangeTitle,
            onClickSave: this.onClickSave,
        });

        this.$todos = document.querySelector(".todos");
    };

    this.onChangeInput = (e) => {
        console.log(e.target.name);
        this.state = {
            ...this.state,
            todo: {
                ...this.state.todo,
                [e.target.name]: e.target.value,
            },
        };
        console.log(this.state);
        this.setState();
    };

    this.onChangeTitle = (e) => {
        this.state = {
            ...this.state,
            todo: {
                ...this.state.todo,
                title: e.target.value,
            },
        };
        this.setState();
    };

    this.onClickSave = (e) => {
        this.state = {
            ...this.state,
            todos: [...this.state.todos, this.state.todo],
        };
        this.setState();
        this.render();
    };

    this.setState = () => {
        this.input.setState(this.state);
        this.todos.setState(this.state);
    };

    this.render = () => {
        console.log(this.state);
        this.input.render();
        this.todos.render();
    };

    this.init();
})();
