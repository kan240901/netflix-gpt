export const Logo_Url ="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const User_Logo = (email) => `https://i.pravatar.cc/150?img=${email}`;

export const api_get_options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGQ4YTM3MjY3N2Q5ZmI0ZjY5NzA0ZjNlNDQ2ZTZiNyIsIm5iZiI6MTc4MDMwNTI0MC4xMTIsInN1YiI6IjZhMWQ0ZDU4NzZjZThkZjVmNTRhNjg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TBqGzETHbP88Uilv2O8pBLLg3eCZ8zlobd7YrY2_W8E'
    }
};