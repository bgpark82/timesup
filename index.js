import Todos from "./components/Todos.js";
import Input from "./components/Input.js";

// Let's check if the browser supports notifications
if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
}

// Let's check whether notification permissions have already been granted
else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    console.log(Notification.permission);
    var notification = new Notification("Hi there!");
}

// Otherwise, we need to ask the user for permission
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            var notification = new Notification("Hi there!");
        }
    });
}

new (function () {
    this.init = () => {
        this.state = {
            todo: {},
            todos: [],
        };

        this.todos = new Todos();
        this.input = new Input({
            onChangeEnd: this.onChangeEnd,
            onChangeStart: this.onChangeStart,
            onChangeTitle: this.onChangeTitle,
            onClickSave: this.onClickSave,
        });

        this.$todos = document.querySelector(".todos");
    };

    this.onChangeStart = (e) => {
        this.state = {
            ...this.state,
            todo: {
                ...this.state.todo,
                start: e.target.value,
            },
        };
        this.setState();
    };

    this.onChangeEnd = (e) => {
        this.state = {
            ...this.state,
            todo: {
                ...this.state.todo,
                end: e.target.value,
            },
        };
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
            todo: {},
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
