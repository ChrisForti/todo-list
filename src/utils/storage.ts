export function saveTodos (value: string) {
    localStorage.setItem("todo-list", value)
}

export function recallTodos () {
    return localStorage.getItem("todo-list")
}