import React from 'react';
import { Stack } from '@mui/material';
import User from './User';
import { UserDetailedInfo, UserFromSearchResult } from '../types';


const Users = (props: { users: UserFromSearchResult[] | UserDetailedInfo[] }) => {
    const { users } = props;

    return (
        <Stack spacing={4} width='100%'>
            {
                users.map(user => {
                    return (
                        <User
                            avatarSrc={user.avatar_url}
                            login={user.login}
                            githubUrl={user.html_url}
                            key={user.id}
                        />
                    )
                })
            }
        </Stack>
    );
};

export default Users;