import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import { TodoI } from "./TodoApp";
import {Delete} from '@styled-icons/fluentui-system-filled/Delete';
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt';
import {ArrowEnterLeft} from '@styled-icons/fluentui-system-filled/ArrowEnterLeft';
import {Xmark} from '@styled-icons/fa-solid/Xmark';
import CheckBox from "./CheckBox";

const EditIcon=styled(EditAlt)`
color:red;
width:25px;
margin:5px;
`;
const DeleteIcon=styled(Delete)`
color:black;
width:25px;
margin-right:5px;
`;
const CheckIcon=styled(ArrowEnterLeft)`
color:blue;
width:20px;
margin:15px;
`;
const CancelIcon=styled(Xmark)`
color:black;
width:15px;
margin-right:15px;
`;
const TileContainer = styled.div`
display:flex
flex-direction:column;
`;
const ItemTile = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:20px;
height:5vh;
width:20vw;
align-items: center;
border-bottom:1px solid black;
`;
const ItemTitle = styled.h4<{isChecked:boolean}>`
text-decoration:${(props)=>(props.isChecked?'line-through':null)}
`;
const EditInput = styled.input`
border:none;
&:focus {
    outline:none;
}
`;
interface TodoItemProps{
    todo:TodoI;
    onDelete:(id:number)=>void
    onEdit:(id:number,newTodo:TodoI)=>void
    handleClickCheckBox:(id:number)=>void
}

export default function TodoItem({todo,onDelete,onEdit,handleClickCheckBox}:TodoItemProps){
    const [isEdit,setIsEdit]=useState(false);
    const [newTodo,setNewTodo]=useState(todo);
    const [isChecked,setIsChecked]=useState(todo.status);
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setNewTodo({...todo,[name]:value});
    }
    return(
        <TileContainer>
            <ItemTile>
                <CheckBox onClick={()=>handleClickCheckBox(todo.id)} />
                {isEdit?
                <EditInput type='text' name="title" placeholder={todo.title.toString()}  onChange={onChange}></EditInput>
                :<ItemTitle isChecked={isChecked}>{todo.title}</ItemTitle>}
                <div>
                    {isEdit?
                        // <div>
                        //     <button onClick={()=>{setIsEdit(false); onEdit(todo.id,newTodo);}}>ok</button>
                        //     <button onClick={()=>{setIsEdit(false)}}>cancel</button>
                        // </div>
                        // :<div>
                        //     <button onClick={()=>onDelete(todo.id)}>delete</button>
                        //     <button onClick={()=>{setIsEdit(true)}}>edit</button>
                        // </div>
                        <div>
                            <CheckIcon onClick={()=>{setIsEdit(false); onEdit(todo.id,newTodo);}} />
                            <CancelIcon onClick={()=>{setIsEdit(false)}} />
                        </div>
                        :<div>
                            <EditIcon onClick={()=>{setIsEdit(true)}} />
                            <DeleteIcon onClick={()=>onDelete(todo.id)} />
                        </div>
                    }
                    
                </div>
            </ItemTile>
        </TileContainer>
    );
}