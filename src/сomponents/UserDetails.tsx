import React, { useEffect, useState } from 'react';
import { Card, CardHeader, Avatar, CardActions, Button, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { State, UserDetailedInfo } from '../types';
import { User } from '../api';
import { useDispatch, useSelector } from 'react-redux';

const UserDetails = () => {
    const [user, setUser] = useState<UserDetailedInfo>();
    const userLogin = useSelector((state: State) => state.loginSelectedUser);
    const isOpen = useSelector((state: State) => state.isOpenUserDetails);
    const isSaved: boolean = useSelector(
        (state: State) => !!state.savedUsers.find(user => user.login === userLogin)
    );
    const dispatch = useDispatch();
    const toggleIsOpen = () => dispatch({ type: 'TOGGLE_IS_OPEN_USER_DETAILS' })


    useEffect(() => {
        new User().getItemByLogin(userLogin)
            .then(res => {
                setUser(res);
            })
    }, [userLogin]);

    const saveUser = () => {
        if (user) {
            new User().saveItem(user)
            dispatch({
                type: 'SET_SAVED_USERS',
                payload: user
            });
        }
    };

    const unsaveUser = () => {
        new User().unsaveItem(userLogin);
        dispatch({
            type: 'UNSAVE_USER',
            payload: userLogin
        });
    };

    if (!isOpen) return null;

    return (
        <Card sx={{ minWidth: '300px', position: 'sticky', top: '24px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} src={user?.avatar_url} />
                }
                action={
                    <IconButton onClick={toggleIsOpen}>
                        <CloseIcon />
                    </IconButton>
                }
                title={user?.login}
                subheader={user?.name}
            />
            <img src={
                `https://github-readme-stats.vercel.app/api/top-langs?username=${user?.login}&show_icons=true&locale=ru&custom_title=Топ языков&layout=donut-vertical`
            } />
            <CardActions sx={{ justifyContent: 'center' }}>
                {
                    isSaved
                    &&
                    <Button variant='outlined' onClick={unsaveUser} color='error'>
                        Удалить из сохранненых
                    </Button>
                }
                {
                    !isSaved
                    &&
                    <Button variant='outlined' onClick={saveUser}>
                        Добавить в сохраненные
                    </Button>
                }
            </CardActions>
        </Card>
    )
};

export default UserDetails;