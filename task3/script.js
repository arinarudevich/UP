let photoPosts = [
    {
        id: '1',
        description: 'Dear Sam, Where?',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://4.bp.blogspot.com/-PYdVA1ft09E/VgQDcwao42I/AAAAAAAAT4s/9jYYUkEpzZg/s640/moonrise%2Bkingdom%2B13.jpg',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '2',
        description: 'one hell of a director',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://1.bp.blogspot.com/-4RDlXpuz7_c/TxIGHgNpgZI/AAAAAAAAXMY/SEFx3oYJUn0/s1600/Screen+shot+2012-01-14+at+6.25.52+PM.png',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '3',
        description: 'i just like this movie, ok?',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://www.indiewire.com/wp-content/uploads/2015/06/moonrise-kingdom.png?w=527',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '4',
        description: 'Bill fucking Murrey',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'https://s-media-cache-ak0.pinimg.com/originals/66/33/21/6633218547fec7297a5045621acee92e.jpg',
        hashTags: ['hashtag1', 'hashtag2', 'pampam'],
        likes: ['arina', 'someguy']
    },
    {
        id: '5',
        description: 'What kind of bird are you?',
        createdAt: new Date('2014-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'https://cdn-images-1.medium.com/max/2000/1*yFSVD1DnO1SxmbvFcR7x0w.jpeg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '6',
        description: 'le tempts de l amour ',
        createdAt: new Date('2012-02-23T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'https://frannielovesmarie.files.wordpress.com/2012/08/mkbeachdance-thumb-510x286-49267.jpg?w=584',
        hashTags: ['hashtag1', 'hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '7',
        description: 'if i were him i would get lost and probably die',
        createdAt: new Date('2018-01-23T23:00:00'),
        author: 'Иван',
        photoLink: 'https://killerstencil.files.wordpress.com/2012/06/moonrise-kingdom_eunice10.png',
        hashTags: ['hashtag1', 'hashtag2', 'pampam'],
        likes: ['arina', 'someguy']
    },
    /*{
        id: '8',
        description: 'love his hat',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://cmzone.vzbqbxhynotw9ion96xv.netdna-cdn.com/wp-content/uploads/2015/10/duckbootsmoonrisekingdom1.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },*/
    {
        id: '9',
        description: 'nice',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'https://media.npr.org/assets/img/2012/05/25/edelstein1_wide-ad2eceb25caa0387bb481bec3edb78984f5eb00b-s900-c85.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },
    {
        id: '10',
        description: 'pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://www.joaopessoa.pb.gov.br/portal/wp-content/uploads/2014/10/estarcine-2.jpg?x92016',
        hashTags: ['hashtag1', 'hashtag2', 'lol'],
        likes: ['arina', 'someguy']
    },
    {
        id: '11',
        description: 'pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam pam',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'https://s-media-cache-ak0.pinimg.com/originals/25/c6/f8/25c6f84e22e7783f007f025a2be8ec31.jpg',
        hashTags: ['hashtag1', 'hashtag2', 'lol'],
        likes: ['arina', 'someguy']
    },
    {
        id: '12',
        description: 'wedding',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://mechanicvillemile.com/wp-content/uploads/2012/08/moonrise-kingdom-051-1024x576.jpg',
        hashTags: ['hashtag1', 'hashtag2', 'lol'],
        likes: ['arina', 'someguy']
    }
];
let module = (function () {
    let currPostAmount = 0;

    return {
        currentPostAmount: currPostAmount,

        validatePhotoPost: function (photoPost) {
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
        },
        addPhotoPost: function (photoPost) {
            if (module.validatePhotoPost(photoPost)) {
                if (photoPosts.every(function (element) {
                    return element.id !== photoPost.id;
                })) {
                    photoPosts.push(photoPost);
                    moduledom.createPhotopost(photoPost, true);
                    return true;
                }
                else return false;
            }
            else return false;
        },
        getPhotoPost: function (someid) {
            let ph = photoPosts.find(function (element) {
                return element.id === someid;
            });
            moduledom.createPhotopost(ph);
            return ph;
        },
        removePhotoPost: function (someid) {
            if (photoPosts.some(function (element) {
                return element.id === someid;
            })) {
                photoPosts.splice(photoPosts.findIndex(function (element) {
                    return element.id === someid;
                }), 1);
                moduledom.deletePhotopost(someid);
                module.currentPostAmount = module.currentPostAmount - 1;
                module.getPhotoPosts(this.currentPostAmount, 1);
                return true;
            }
            else return false;
        },
        editPhotoPost: function (someid, photoPost) {
            if (photoPosts.some(function (element) {
                return element.id === someid;
            })) {
                let index = photoPosts.findIndex(function (element) {
                    return element.id === someid;
                });
                let newPhPost = Object.assign({}, photoPosts[index]);
                if (photoPost.hasOwnProperty('description')) {
                    newPhPost.description = photoPost.description;
                }
                if (photoPost.hasOwnProperty('photoLink')) {
                    newPhPost.photoLink = photoPost.photoLink;
                }
                if (photoPost.hasOwnProperty('hashTags')) {
                    newPhPost.hashTags = photoPost.hashTags;
                }
                if (photoPost.hasOwnProperty('likes') && newPhPost.likes.some(function (element) {
                    return element !== photoPost.likes;
                })) {
                    newPhPost.likes.push(photoPost.likes);

                }
                if (module.validatePhotoPost(newPhPost)) {
                    photoPosts[index] = newPhPost;
                    moduledom.deletePhotopost(photoPosts[index].id);
                    moduledom.createPhotopost(photoPosts[index], true);
                    return true;
                }
                else return false;
            }
            else return false;
        },
        getPhotoPosts: function (skip, top, filterConfig) {
            skip = skip || 0;
            top = top || 10;
            filterConfig = filterConfig || {};
            if (typeof skip !== 'number' || typeof top !== 'number' || typeof filterConfig !== 'object') {
                console.log('Invalid arguments');
            }

            function compareDates(a, b) {
                return b.createdAt - a.createdAt;
            }
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

            let newPhPosts = photoPosts.sort(compareDates);
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
            let ph = newPhPosts.slice(0, top);

            if (Object.keys(filterConfig).length === 0 && skip !== 0) {
                ph.forEach(function (item) {
                    moduledom.createPhotopost(item);
                });
            }
            else {
                photoPosts.forEach(function (item) {
                    moduledom.deletePhotopost(item.id);
                });


                ph.forEach(function (item) {
                    moduledom.createPhotopost(item);
                });
            }
            return newPhPosts.slice(0, top);
        }
    }
}());

/* tests
console.log("get photoposts");
console.log(module.getPhotoPosts());
console.log("get 5 photo posts from 3d");
console.log(module.getPhotoPosts(3, 5));
console.log("get photo posts with author 'arina'");
console.log(module.getPhotoPosts(0, 5, { author: 'arina' }));
console.log("get 10 photo posts created after date 2013-02-13T23:00:00 with author 'arinarudevich' and with 'hashtag1'");
console.log(module.getPhotoPosts(0, 10, { author: 'arinarudevich', createdAt: new Date('2013-02-13T23:00:00'), hashTags: 'hashtag1' }));
console.log("get photo post with id 4");
console.log(module.getPhotoPost('4'));
console.log("add new photo post and check data");
console.log(module.addPhotoPost({
    id: '11',
    description: '',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: '',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
}));
console.log(module.addPhotoPost({
    id: '11',
    description: 'blablabla',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'arina',
    photoLink: 'whatthefuck',
}));
console.log(module.getPhotoPosts());
console.log("remove photo post with id 11");
console.log(module.removePhotoPost('11'));
console.log(module.getPhotoPosts());
console.log("edit photo post with id 6 and 8")
console.log(module.editPhotoPost('6', { photoLink: 'lala', description: '', hashTags: ['whaat'] }));
console.log(module.getPhotoPosts());
console.log(module.editPhotoPost('8', { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg', description: 'lalalal', hashTags: ['whaat'] }));
console.log(module.getPhotoPosts());

*/

