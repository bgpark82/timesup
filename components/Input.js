import { EVENT } from "../utils/constant.js";

const Input = function ({ onChangeInput, onChangeTitle, onClickSave }) {
    this.init = () => {
        this.$startHour = document.querySelector(".input__start__hour");
        this.$startMinute = document.querySelector(".input__start__minute");
        this.$endHour = document.querySelector(".input__end__hour");
        this.$endMinute = document.querySelector(".input__end__minute");
        this.$title = document.querySelector(".input__title");
        this.$btn = document.querySelector(".input__btn");
        this.state;

        this.bindEvents();
    };

    this.bindEvents = () => {
        this.$startHour.addEventListener(EVENT.CHANGE, onChangeInput);
        this.$startMinute.addEventListener(EVENT.CHANGE, onChangeInput);
        this.$endHour.addEventListener(EVENT.CHANGE, onChangeInput);
        this.$endMinute.addEventListener(EVENT.CHANGE, onChangeInput);
        this.$title.addEventListener(EVENT.CHANGE, onChangeTitle);
        this.$btn.addEventListener(EVENT.CLICK, this.onClickSave);
    };

    this.onClickSave = (e) => {
        this.setTimeout();
        onClickSave(e);
    };

    this.setTimeout = () => {
        const { endHour, endMinute, title } = this.state.todo;
        const start = Date.now();
        const date = new Date();
        date.setHours(endHour);
        date.setMinutes(endMinute);
        date.setSeconds(0);
        const end = Date.parse(date);
        const hours = end - start;

        setTimeout(() => {
            new Notification("times up!", {
                body: title,
            });
        }, hours);
    };

    this.getTimeDiff = (endHour, endMinute) => {
        const start = Date.now();

        const date = new Date();
        date.setHours(endHour);
        date.setMinutes(endMinute);
        date.setSeconds(0);
        const end = Date.parse(date);
        const hours = end - start;
        return hours;
    };

    this.setState = (state) => {
        this.state = state;
    };

    this.render = () => {
        const {
            startHour,
            startMinute,
            endHour,
            endMinute,
            title,
        } = this.state.todo;
        this.$startHour.value = startHour;
        this.$startMinute.value = startMinute;
        this.$endHour.value = endHour;
        this.$endMinute.value = endMinute;
        this.$title.value = title;
    };

    this.init();
};

export default Input;
