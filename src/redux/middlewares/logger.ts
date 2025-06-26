import type { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action: any) => {
    console.group(action.type);
    console.info("Prev State:", store.getState());
    const result = next(action);
    console.info("Next State:", store.getState());
    console.groupEnd();
    return result;
};

export default logger;
