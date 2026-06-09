export const Logo_Url ="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const User_Logo = (email) => `https://i.pravatar.cc/150?img=${email}`;

export const api_get_options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const Img_CDN_Url = "https://image.tmdb.org/t/p/original";

export const LoginBgImage = "https://d3ghupt9z9s6o0.cloudfront.net/app/uploads/2017/04/13100509/Netflix-Background.jpg";

export const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' }
  ];

export const lang = {
    "en":{
        SearchPlaceHolder: "Search for movies, TV shows, and more...",
        SearchButton: "Search"
    },
    "hi":{
        SearchPlaceHolder: "फिल्में, टीवी शो और अधिक के लिए खोजें...",
        SearchButton: "खोजें"
    }
}

export const GPTApiKey = process.env.REACT_APP_OPENAI_KEY;