import { SearchResult, UserDetailedInfo, UserFromSearchResult } from './types';

const API_URL = 'https://api.github.com' as const;

const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN as string;

const HEADERS = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`
} as const;

class User {
    private async request<T>(path: string, strForSearch: string): Promise<T> {
        const GITHUB_API_URL = `${API_URL}${path}`
        const result = await fetch(GITHUB_API_URL + strForSearch, { headers: HEADERS });
        const resultParse = await result.json();

        return resultParse;
    }

    async getItemsByString(str: string): Promise<SearchResult> {
        if (str === '') {
            const res = await this.request<UserFromSearchResult[]>('/users', str);
            return {
                items: res,
                total_count: res.length,
                incomplete_results: true
            };
        }
        return await this.request<SearchResult>('/search/users?q=', str);
    }

    async getItemByLogin(login: string): Promise<UserDetailedInfo> {
        return await this.request<UserDetailedInfo>('/users/', login);
    }

    getSavedItems(): UserDetailedInfo[] {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    saveItem(item: UserDetailedInfo): void {
        const items = this.getSavedItems();
        localStorage.setItem('users', JSON.stringify([...items, item]));
    }

    unsaveItem(login: string): void {
        const items = this.getSavedItems().filter(user => user.login !== login);
        localStorage.setItem('users', JSON.stringify(items));
    }
}

export {
    User
};
