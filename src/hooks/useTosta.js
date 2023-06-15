import {toast } from "react-toastify";

const useTosta = () => {
    const notify = (title) => {
        toast(title);
    }
    return [notify];
}

export default useTosta;