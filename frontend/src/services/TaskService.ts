import HttpService from "./HttpService";
const currentRoute = "/api/task";

const getTasks = () => {
    return HttpService.get(currentRoute);
}

const addTask = (text: string) => {
    return HttpService.post(currentRoute, { text });
}

const toggleDone = (id: string, isDone: boolean) => {
    return HttpService.put(currentRoute, { id, isDone });
}

const deleteTask = (id: string) => {
    return HttpService.delete(`${currentRoute}/${id}`, {});
}

export default {
    getTasks,
    addTask,
    toggleDone,
    deleteTask
}