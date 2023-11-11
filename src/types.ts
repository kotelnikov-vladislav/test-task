// API
interface UserFromSearchResult {
    'login': string;
    'id': number;
    'node_id': string;
    'avatar_url': string;
    'gravatar_id': string;
    'url': string;
    'html_url': string;
    'followers_url': string;
    'following_url': string;
    'gists_url': string;
    'starred_url': string;
    'subscriptions_url': string;
    'organizations_url': string;
    'repos_url': string;
    'events_url': string;
    'received_events_url': string;
    'type': string;
    'site_admin': boolean;
    'score': number;
};

interface SearchResult {
    'total_count': number;
    'incomplete_results': boolean;
    'items': UserFromSearchResult[];
}

interface UserDetailedInfo {
    'login': string;
    'id': number;
    'node_id': string;
    'avatar_url': string;
    'gravatar_id': string;
    'url': string;
    'html_url': string;
    'followers_url': string;
    'following_url': string;
    'gists_url': string;
    'starred_url': string;
    'subscriptions_url': string;
    'organizations_url': string;
    'repos_url': string;
    'events_url': string;
    'received_events_url': string;
    'type': string;
    'site_admin': boolean;
    'name': string;
    'company': any;
    'blog': string;
    'location': string;
    'email': any;
    'hireable': any;
    'bio': any;
    'twitter_username': any;
    'public_repos': number;
    'public_gists': number;
    'followers': number;
    'following': number;
    'created_at': string;
    'updated_at': string;
}


//  Store
type ActionTypes =
    'SET_LOGIN_SELECTED_USER' |
    'TOGGLE_IS_OPEN_USER_DETAILS' |
    'SET_FOUND_USERS' |
    'SET_SAVED_USERS' |
    'UNSAVE_USER'

interface Action {
    type: ActionTypes;
    payload: any;
}

interface State {
    loginSelectedUser: string;
    isOpenUserDetails: boolean;

    savedUsers: UserDetailedInfo[];
    foundUsers: UserFromSearchResult[];
}

export type {
    UserFromSearchResult,
    SearchResult,
    UserDetailedInfo,

    ActionTypes,
    Action,
    State
};