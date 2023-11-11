import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Divider, Link, Paper, Stack, Typography } from '@mui/material';

const User = (props: { avatarSrc: string, login: string, githubUrl: string }) => {
    const { avatarSrc, login, githubUrl } = props;
    const dispatch = useDispatch();

    const onSelectLoginUser = () => dispatch({ type: 'SET_LOGIN_SELECTED_USER', payload: login });

    return (
        <Paper
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                p: '8px 16px'
            }}
        >
            <Stack
                direction='row'
                gap={2}
            >
                <Avatar
                    alt={login}
                    src={avatarSrc}
                    sx={{ width: 60, height: 60 }}
                />

                <div>
                    <Typography variant='h6'>
                        {login}
                    </Typography>
                    <Link target="_blank" href={githubUrl} variant='subtitle1'>{githubUrl}</Link>
                </div>
            </Stack>

            <Stack direction='row' spacing={1}>
                <Divider sx={{ height: 60 }} orientation='vertical' />
                <Button variant='outlined' onClick={onSelectLoginUser}>Детали</Button>
            </Stack>
        </Paper>
    );
};

export default User;