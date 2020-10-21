export default function age(state = 18, action) {
    switch (action.type) {
        case "ADD": return state + 1;

        default: {
            return state;
        }
    }
}