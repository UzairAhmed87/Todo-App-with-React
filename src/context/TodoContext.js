import {useContext ,createContext} from "react"

export const TodoContext = createContext({
    todo : [
        {
            id : 1,
            todo : "todo mesg",
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    updatedTodo :(todo,id)=>{},
    deleteTodo : (id)=>{},
    toggle : (id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}
