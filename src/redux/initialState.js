const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title 1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-08-2022'),
            author: 'Hugh Grant'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('06-12-2023'),
            author: 'Brad Pitt'
        },
        {
            id: '4',
            title: 'Article title 4',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('07-12-2007'),
            author: 'Angelina Jolie'
        }
    ],

    categories: [
        {
            id: '1',
            title: 'Sport'
        },
        {
            id: '2',
            title: 'News'
        },
        {
            id: '3',
            title: 'Movies'
        }
    ]
};

export default initialState;