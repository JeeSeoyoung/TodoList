import React, { useState } from "react";
import TodoList from "./TodoList";
import styled from 'styled-components';
import Moment from 'moment';
const Container = styled.div`
width: 50vw;
height: 70vh;
margin:10vh 20vw;
padding:5vh 5vw;
border:1px soilid black;
flex-direction:row;
justify-content:between;
display:flex;
`;
const TodoForm = styled.div`
width:50%;
padding:10px 10px ;
border-right:1px solid black;
text-align:start;
`;
const Title = styled.h1`
padding-bottom:0px;
`;
const InputContainer = styled.div`
border-bottom:1px solid black;
padding:5px 10px;
display:flex;
justify-content:space-between;
`;
const Input = styled.input`
padding:5px;
border:none;
&:focus {
    outline:none;
}
`;
const SubmitBtn = styled.div`
border:none;
background-color:transparent;
font-size:12px;
color:navy;
`;

const TodoListContainer = styled.div`
width:50%;
padding:10 ;
text-align:start;
`;


export interface TodoI{
    title:String;
    id:number;
    status:boolean;
}

const defaultTodo:Array<TodoI>=[
    {title:'Go Home',id:1,status:false},
    {title:'Do Homework', id:2,status:false},
    {title:'Drink Coffee', id:3,status:false},
    {title:'Swimming', id:4,status:false},
    {title:'Reading Book', id:5,status:false}
];

export default function TodoApp(){
    const formatDate = Moment().format('MMM Do YY')
    const [todo,setTodo] = useState<TodoI>({title:'',id:0,status:false})
    const [todos,setTodos]=useState<TodoI[]>(defaultTodo)
    const [status,setStatus]=useState(false);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodo({title:e.target.value,id:0,status:false})
    }
    const onSubmit = (e:React.MouseEvent)=>{
        const id = todos.length+1;
        setTodos([...todos,{title:todo.title,id,status:false}])
    }
    const onDelete = (id:number)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    const onEdit = (id:number,newTodo:TodoI)=>{
        setTodos(todos.map(todo=>(todo.id===id?newTodo:todo)));
    }
    const onCheckStatus =(id:number,newTodo:TodoI)=>{
        {status?setStatus(false):setStatus(true)};
        setTodos(todos.map(todo=>(todo.id===id?newTodo:todo)));
    }
    const handleClickCheckBox=(id:number)=>{
        setStatus(true);
        setTodos(todos.map(todo=> todo.id===id?{...todo,status:!todo.status}:todo));
    }
    return (
        <Container>
            <TodoForm>
                <Title>Todo List </Title>
                <h3>{formatDate}</h3>
                <InputContainer>
                    <Input placeholder="What you have to do?" onChange={onChange}/>
                    <SubmitBtn onClick={onSubmit}>submit</SubmitBtn>
                </InputContainer>
            </TodoForm>
            <TodoListContainer>
                <TodoList todos={todos} handleClickCheckBox={handleClickCheckBox} onDelete={onDelete} onEdit={onEdit} onCheckStatus={onCheckStatus}/>
            </TodoListContainer>
        </Container>
    );
}