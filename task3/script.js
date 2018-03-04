var photoPosts = [
    {
        id: '1',
        description: 'some description',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '2',
        description: 'some description',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '3',
        description: 'some description',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '4',
        description: 'some description',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '5',
        description: 'some description',
        createdAt: new Date('2014-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '6',
        description: 'some description',
        createdAt: new Date('2012-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '7',
        description: 'some description',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '8',
        description: 'some description',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '9',
        description: 'some description',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '10',
        description: 'some description',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashTags: ['hashtag1', 'hashtag2', 'lol'],
        likes: ['arina', 'someguy']
    }
];
(function () {
    function validatePhotoPost(photoPost) {
        if (photoPost.id === '' || typeof photoPost.id !== 'string')
            return false;
        if (photoPost.description === '' || typeof photoPost.description !== 'string' || photoPost.description.length > 200)
            return false;
        if (!(photoPost.createdAt instanceof Date))
            return false;
        if (photoPost.author === '' || typeof photoPost.author !== 'string')
            return false;
        if (photoPost.photoLink === '' || typeof photoPost.photoLink !== 'string')
            return false;
        if (photoPost.likes === null)
            return false;
        else return true;
    }
    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            if (photoPosts.every(function (element) {
                return element.id !== photoPost.id;
            })) {
                photoPosts.push(photoPost);
                return true;
            }
            else return false;
        }
        else return false;
    }
    function getPhotoPost(someid) {
        return photoPosts.find(function (element) {
            return element.id === someid;
        });
    }
    function removePhotoPost(someid) {
        if (photoPosts.some(function (element) {
            return element.id === someid;
        })) {
            photoPosts.splice(photoPosts.findIndex(function (element) {
                return element.id === someid;
            }), 1);
            return true;
        }
        else return false;
    }
    function editPhotoPost(someid, photoPost) {
        if (photoPosts.some(function (element) {
            return element.id === someid;
        })) {
            var index = photoPosts.findIndex(function (element) {
                return element.id === someid;
            });
            var newPhPost = Object.assign({}, photoPosts[index]);
            if (photoPost.hasOwnProperty('description')) {
                newPhPost.description = photoPost.description;
            }
            if (photoPost.hasOwnProperty('photoLink')) {
                newPhPost.photoLink = photoPost.photoLink;
            }
            if (photoPost.hasOwnProperty('hashTags')) {
                newPhPost.hashTags = photoPost.hashTags;
            }
            if (validatePhotoPost(newPhPost)) {
                photoPosts[someid] = newPhPost;
                return true;
            }
            else return false;
        }
        else return false;
    }
    function getPhotoPosts(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
            console.log('Invalid arguments');
        }
        function compareDates(a, b) {
            return b.createdAt - a.createdAt;
        }

        var newPhPosts = photoPosts.sort(compareDates);

        function authorFilter(element) {
            if (element.author === filterConfig.author) {
                return element;
            }
        }
        function hashtagFilter(element) {
            if (element.hashTags.some(function (tag) {
                return tag === filterConfig.hashTags;
            })) {
                return element;
            }
        }
        function dateFilter(element) {
            if (element.createdAt > filterConfig.createdAt) {
                return element;
            }
        }
        newPhPosts = photoPosts.slice(skip);

        if (filterConfig.hasOwnProperty('author')) {
            newPhPosts = newPhPosts.filter(authorFilter);
            if (newPhPosts.length === 0) {
                console.log("There are no posts with such author.")
            }
        }
        if (filterConfig.hasOwnProperty('createdAt')) {
            newPhPosts = newPhPosts.filter(dateFilter);
            if (newPhPosts.length === 0) {
                console.log("There are no posts created after this date.")
            }

        }
        if (filterConfig.hasOwnProperty('hashTags')) {
            newPhPosts = newPhPosts.filter(hashtagFilter);
            if (newPhPosts.length === 0) {
                console.log("There are no posts with such hashtag.")
            }

        }
        return newPhPosts.slice(0, 10);
    }
    console.log("get photoposts");
    console.log(getPhotoPosts());
    console.log("get 5 photo posts from 3d");
    console.log(getPhotoPosts(3, 5));
    console.log("get photo posts with author 'arina'");
    console.log(getPhotoPosts(0, 5, { author: 'arina' }));
    console.log("get 10 photo posts created after date 2013-02-13T23:00:00 with author 'Иванов Иван' and with 'hashtag1'");
    console.log(getPhotoPosts(0, 10, { author: 'Иванов Иван', createdAt: new Date('2013-02-13T23:00:00'), hashTags: 'hashtag1' }));
    console.log("get photo post with id 4");
    console.log(getPhotoPost('4'));
    console.log("add new photo post and check data");
    console.log(addPhotoPost({
        id: '11',
        description: '',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: '',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    }));
    console.log(addPhotoPost({
        id: '11',
        description: 'blablabla',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'arina',
        photoLink: 'whatthefuck',
    }));
    console.log(getPhotoPosts());
    console.log("remove photo post with id 11");
    console.log(removePhotoPost('11'));
    console.log(getPhotoPosts());
    console.log("edit photo post with id 6 and 8")
    console.log(editPhotoPost('6', { photoLink: 'lala', description: '', hashTags: ['whaat'] }));
    console.log(getPhotoPosts());
    console.log(editPhotoPost('8', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg', description: 'lalalal', hashTags: ['whaat'] }));
    console.log(getPhotoPosts());

}());

