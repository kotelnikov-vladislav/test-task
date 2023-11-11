import React, { useEffect, useState } from 'react';
import { Stack, Paper, InputBase, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../api';
import { State } from '../types';

const Search = () => {
    const [enteredLogin, setEnteredLogin] = useState<string>('');
    const dispatch = useDispatch();
    const countFoundUsers: number = useSelector((state: State) => state.foundUsers.length);

    useEffect(() => {
        new User().getItemsByString(enteredLogin)
            .then(res => {
                dispatch({ type: 'SET_FOUND_USERS', payload: res['items'] })
            })
    }, [enteredLogin]);

    const onChangeStr = (event: React.ChangeEvent): void => {
        const target: any = event.target;
        setEnteredLogin(target.value);
    };

    return (
        <Stack spacing={1}>
            <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='Поиск пользователей GitHub'
                    onChange={onChangeStr}
                />
                <IconButton type='button' sx={{ p: '10px' }}>
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Typography variant='body2'>
                Найдено {countFoundUsers} аккаунтов
            </Typography>
        </Stack>
    )
};

export default Search;