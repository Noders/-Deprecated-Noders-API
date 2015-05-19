module.exports = function(app) {
    var _ = require('lodash');
    /*
     * The `app` object provides access to a variety of LoopBack resources such as
     * models (e.g. `app.models.YourModelName`) or data sources (e.g.
     * `app.datasources.YourDataSource`). See
     * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
     * for more info.
     */
    var Noder = app.models.Noder;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    function createUsers() {
        Noder.upsert([{
            "Nombre": "Felipe",
            "Apellido": "Torres",
            "Pais": "Chile",
            "img": "fforres.jpg",
            "url": "http://www.twitter.com/fforres",
            "username_twitter": "fforres",
            "username_github": "fforres",
            "username": "fforres",
            "email": "felipe.torressepulveda@gmail.com",
            "password": "founder",
            "hostId": "5557bec9fa0f567413db2dfc"
        }, {
            "pais": "Chile",
            "img": "josevildosola.jpg",
            "username": "josevildosola55",
            "hostId": "5557bec9fa0f567413db2dfc",
            "email": "josevildosola55@test.com",
            "password": "test",
            "url": "http://www.twitter.com/josevildosola55"
        }, {
            "pais": "Chile",
            "img": "maetschl.jpeg",
            "username": "maetschl",
            "hostId": "5557bec9fa0f567413db2dfc",
            "email": "maetschl@test.com",
            "password": "test",
            "url": "http://www.twitter.com/maetschl"
        }, {
            "pais": "Ecuador",
            "img": "rchancay.jpeg",
            "username": "r_chancay",
            "hostId": "5557bedafa0f567413db2dfd",
            "email": "r_chancay@test.com",
            "password": "test",
            "url": "http://www.twitter.com/r_chancay"
        }, {
            "pais": "El Salvador",
            "img": "AdrianoChiliseo.jpeg",
            "username": "AdrianoChiliseo",
            "hostId": "5557bedffa0f567413db2dfe",
            "email": "AdrianoChiliseo@test.com",
            "password": "test",
            "url": "http://www.twitter.com/AdrianoChiliseo"
        }, {
            "pais": "El Salvador",
            "img": "WillBonilla11.jpg",
            "username": "WillBonilla11",
            "hostId": "5557bedffa0f567413db2dfe",
            "email": "WillBonilla11@test.com",
            "password": "test",
            "url": "http://www.twitter.com/WillBonilla11"
        }, {
            "pais": "El Salvador",
            "img": "enriquegraficos.png",
            "username": "enriquegraficos",
            "hostId": "5557bedffa0f567413db2dfe",
            "email": "enriquegraficos@test.com",
            "password": "test",
            "url": "http://www.twitter.com/enriquegraficos"
        }, {
            "pais": "El Salvador",
            "img": "melvingilbertos.jpg",
            "username": "melvingilbertos",
            "hostId": "5557bedffa0f567413db2dfe",
            "email": "melvingilbertos@test.com",
            "password": "test",
            "url": "http://www.twitter.com/melvingilbertos"
        }, {
            "pais": "El Salvador",
            "img": "norr1994.jpg",
            "username": "norr1994",
            "hostId": "5557bedffa0f567413db2dfe",
            "email": "norr1994@test.com",
            "password": "test",
            "url": "http://www.twitter.com/norr1994"
        }, {
            "pais": "Argentina",
            "img": "beacon_tech.png",
            "username": "beacon_tech",
            "hostId": "5557bee3fa0f567413db2dff",
            "email": "beacon_tech@test.com",
            "password": "test",
            "url": "http://www.twitter.com/beacon_tech"
        }, {
            "pais": "Colombia",
            "img": "icristiam.jpeg",
            "username": "icristiam",
            "hostId": "5557bee7fa0f567413db2e00",
            "email": "icristiam@test.com",
            "password": "test",
            "url": "http://www.twitter.com/icristiam"
        }, {
            "pais": "Colombia",
            "img": "Juanqtx.jpg",
            "username": "Juanqtx",
            "hostId": "5557bee7fa0f567413db2e00",
            "email": "Juanqtx@test.com",
            "password": "test",
            "url": "http://www.twitter.com/Juanqtx"
        }], function(err, users) {
            if (err) return console.log(err);

            Role.create({
                name: 'FOUNDER'
            }, function(err, role) {
                role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: users[0].id
                }, function(err, principal) {
                    if (err) return console.log(err);
                });

            });

        });
    }
    //createUsers();
};
