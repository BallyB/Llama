import { writable} from "svelte/store";

const auth = {
    user: "",
    userType: "",
    userId: "",
    token: ""
};

const { subscribe, set, update } = writable(auth);

const setAuth = newValue => update(auth => {
    return { ...auth, ...newValue };
});

const reset = () => {
    set(auth);
};

export default {
    subscribe,
    setAuth,
    reset
}