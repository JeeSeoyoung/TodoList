
import styled from 'styled-components';
import { TodoI } from './TodoApp';
import TodoItem from './TodoItem';

const Container = styled.div`
height: 70vh;
overflow: auto;
&::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }
`;
const ListTile = styled.div`
display:flex;
flex-direction:row;
margin:10px;
`;

interface TodoListProps{
    todos:TodoI[]
    onDelete:(id:number)=>void
    onEdit:(id:number,newTodo:TodoI)=>void
    onCheckStatus:(id:number,newTodo:TodoI)=>void
    handleClickCheckBox(id:number):void
}
export default function TodoList({todos,onDelete,onEdit,onCheckStatus,handleClickCheckBox}:TodoListProps){
    
    return(
        <Container>
            {todos.map(todo=>
            <ListTile>
            <TodoItem todo={todo} onDelete={onDelete} onEdit={onEdit} handleClickCheckBox={handleClickCheckBox}/>
            </ListTile>
            )}    
        </Container>
    );
}