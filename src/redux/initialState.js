const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title 1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-08-2022'),
            author: 'Hugh Grant',
            category: 'News'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('06-12-2023'),
            author: 'Brad Pitt',
            category: 'Movies'
        },
        {
            id: '4',
            title: 'Article title 4',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('07-12-2007'),
            author: 'Angelina Jolie',
            category: 'Sport'
        }
    ],

    categories: [
        {
            id: 'sport',
            title: 'Sport'
        },
        {
            id: 'news',
            title: 'News'
        },
        {
            id: 'movies',
            title: 'Movies'
        }
    ]
};

export default initialState;