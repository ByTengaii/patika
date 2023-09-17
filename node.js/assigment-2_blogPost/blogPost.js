const blog = [

    {
        id: 1,
        postHead : "Node.js Nedir?",
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        publishedDate: "19.08.2023"
    },
    {
        id: 2,
        postHead : "Javascript Nedir?",
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        publishedDate: "19.08.2023"
    },
    {
        id: 3,
        postHead : "HTML ve CSS Nedir?",
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        publishedDate: "19.08.2023"
    }    
]

function listPosts (dataBase) {
    dataBase.forEach(element => {
        console.log(element);
    });
}

function addPost (item, dataBase){
    const promise = new Promise((resolve, reject) => {
        try {
            dataBase.push(item);
            resolve('Post eklendi')
        }
        catch(error)
        {
            resolve('Post ekleme başarısız');
            console.log(error);
        }
    });
    return promise;
}

async function showPosts(dataBase){
    try{
        await addPost({
            id: 4,
            postHead : "Ekleme",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            publishedDate: "19.08.2023"
        },dataBase);
        listPosts(dataBase);
    }
    catch(error)
    {
        console.log(error);
    }
}

showPosts(blog);
