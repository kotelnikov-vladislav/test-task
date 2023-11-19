import React, { useState } from 'react';
import { Container, Pagination, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../types';
import Users from './Users';
import Search from './Search';
import { div } from '../utils';
import UserDetails from './UserDetails';
import { MAX_SHOW_USER } from '../constants';


const App = () => {
    const [page, setPage] = useState(1);

    const foundUsers = useSelector((state: State) => state.foundUsers);
    const countFoundUsers = foundUsers.length;
    const showFoundUsers = foundUsers.slice(MAX_SHOW_USER * page - MAX_SHOW_USER, MAX_SHOW_USER * page);

    const savedUsers = useSelector((state: State) => state.savedUsers);

    const onChangePagination = (_: unknown, value: number) => setPage(value);

    return (
        <Stack spacing={7.5} alignItems='center' sx={{ p: '60px 0' }}>
            <Container maxWidth='md'>
                <Search />
            </Container>
            <Container maxWidth='md'>
                <Stack
                    direction='row'
                    spacing={5}
                    justifyContent='center'
                    alignItems='start'
                    width='100%'
                >
                    <Stack spacing={4} width='100%'>
                        <div>
                            <Typography variant='h2' fontSize='32px' mb={1}>
                                Сохраненные пользователи
                            </Typography>
                            <Users users={savedUsers} />
                        </div>

                        <div>
                            <Typography variant='h2' fontSize='32px' mb={1}>
                                Найденные пользователи
                            </Typography>
                            <Users users={showFoundUsers} />
                        </div>
                    </Stack>

                    <UserDetails />
                </Stack>
            </Container>
            <Container maxWidth='md'>
                <Pagination
                    count={div(countFoundUsers, MAX_SHOW_USER)}
                    size='large'
                    onChange={onChangePagination}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                />
            </Container>
        </Stack>
    )
};

export default App;