import { useState } from 'react';
import { TextField, IconButton, Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoItemProps {
    id: number
    value: string
}

let count = 1;

export default function Todo() {

    const [list, setList] = useState<TodoItemProps[]>([{ id: 0, value: '' }]);

    function handleChange(value: string, id: TodoItemProps['id']) {
        setList(prev => prev.map(item => item.id === id ? { ...item, value } : item))
    }

    function handleDelete(id: TodoItemProps['id']) {
        setList(prev => prev.filter(item => item.id !== id))
    }

    function handleAdd(index: number) {
        const newItem = { id: count++, value: '' }
        setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
    }


    return (
        <>
            {list.map((item, index) => (
                <div key={item.id}>
                    <TextField
                        value={item.value}
                        onChange={e => handleChange(e.currentTarget.value, item.id)}
                    />
                    <IconButton onClick={() => handleAdd(index)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
        </>
    );
};
