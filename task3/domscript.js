
let moduledom = (function () {
    let username = null;
    return {
        user: username,
        createPhotopost: function (post, first) {
            if (typeof post === 'object') {
                let photopost = document.createElement('div');
                photopost.className = 'photopost';
                photopost.id = post.id;
                if (typeof first === 'boolean' && first) {
                    document.getElementsByClassName('add_button')[0].parentNode.insertBefore(photopost,
                        document.getElementsByClassName('add_button')[0].nextSibling);
                }
                else {
                    document.getElementsByTagName('main')[0].insertBefore(photopost, document.getElementById('show'));
                }

                let name = document.createElement('p');
                name.className = 'name';
                name.innerHTML = post.author;;

                let image = document.createElement('img');
                image.className = 'image';
                image.src = post.photoLink;

                let toolbar = document.createElement('div');
                toolbar.className = 'toolbar';

                document.getElementById(post.id).appendChild(name);
                document.getElementById(post.id).appendChild(image);
                document.getElementById(post.id).appendChild(toolbar);

                let favotite = document.createElement('button');
                favotite.className = 'tool_button';
                if (typeof moduledom.user === 'string' && moduledom.user !== null) {
                    favotite.innerHTML = ' <i class="material-icons md-36 yellow1">favorite_border</i>';
                }
                photopost.childNodes[2].appendChild(favotite);

                let ph_info = document.createElement('div');
                ph_info.className = 'ph_info';
                photopost.childNodes[2].appendChild(ph_info);

                let edit = document.createElement('div');
                edit.className = 'edit';
                photopost.childNodes[2].appendChild(edit);

                let description = document.createElement('div');
                description.className = 'description';
                description.innerHTML = post.description;
                toolbar.childNodes[1].appendChild(description);

                let hashtags = document.createElement('div');
                hashtags.className = 'hashtags';
                hashtags.innerHTML = post.hashTags;
                toolbar.childNodes[1].appendChild(hashtags);

                let ph_date = document.createElement('div');
                ph_date.className = 'ph_date';
                ph_date.innerHTML = post.createdAt.getHours() + ':' + post.createdAt.getMinutes() + ' '
                    + post.createdAt.getDate() + '/' + (1+post.createdAt.getMonth()) + '/' + post.createdAt.getFullYear();
                toolbar.childNodes[1].appendChild(ph_date);

                let editButton = document.createElement('button');
                editButton.className = 'tool_button';
                if (typeof moduledom.user === 'string' && moduledom.user !== null){
                    editButton.innerHTML = '<i class="material-icons md-36 yellow1">edit</i>';
                }
                toolbar.childNodes[2].appendChild(editButton);

                let deleteButton = document.createElement('button');
                deleteButton.className = 'tool_button';
                if (typeof moduledom.user === 'string' && moduledom.user !== null) {
                    deleteButton.innerHTML = '<i class="material-icons md-36 yellow1">delete</i>';
                }
                toolbar.childNodes[2].appendChild(deleteButton);
                module.currentPostAmount = module.currentPostAmount + 1;
            }
            else {
                console.log('Invalid arguments.');
            }
        },

        deletePhotopost: function (someid) {
            if (typeof someid === 'string') {
                let el = document.getElementById(someid);
                if (el) {
                    el.remove();
                }
            }
            else {
                console.log('Invalid arguments.');
            }
        },
        dependOnUser: function (user) {
            if (typeof user === 'string' && user !== null) {
                let addButton = document.createElement('button');
                addButton.className = 'add_button';
                addButton.innerHTML ='&#10010 add photo post';
                document.getElementsByTagName('main')[0].insertBefore(addButton, document.getElementById('show'));

                let username = document.createElement('p');
                username.className = 'username';
                username.innerHTML = moduledom.user;
                document.getElementsByClassName('logout_block')[0].appendChild(username);

                let logoutButton = document.createElement('button');
                logoutButton.className = 'logout_button';
                logoutButton.innerHTML = '<i id="logout_icon" class="material-icons  md-36 red1">person_outline</i>';
                document.getElementsByClassName('logout_block')[0].appendChild(logoutButton);
            }
            else {
                let sign = document.createElement('div');
                sign.className = 'sign';
                sign.innerHTML = '<button class="signup_button">sign up</button>';
                document.getElementsByClassName('logout_block')[0].appendChild(sign);
            }
        }
    }
})();
moduledom.dependOnUser(moduledom.user);
module.getPhotoPosts(0, 10);