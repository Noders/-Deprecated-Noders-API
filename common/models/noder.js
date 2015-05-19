var app = require('../../server/server')
module.exports = function(Noder) {


    // un 'remote method' no estatico
    Noder.prototype.volverAdmin = function( cb) {
        var Role = app.models.Role;
     var RoleMapping = app.models.RoleMapping;
        var userID = this.id;
        Role.find({
                where: {
                    name: "ADMIN"
                }
            },
            function(err, roleEncontrado) {
                roleEncontrado[0].principals.create({
                    principalType: RoleMapping.USER,
                    principalId: userID
                }, function(err, principal) {
                    console.log(principal)
                    if (err) {
                        cb(null, null);
                    } else {
                        cb(null, "done");
                    }
                });

            })
        cb(null, data);
    };
    Noder.remoteMethod('volverAdmin', {
        isStatic: false,
        accepts: [],
        returns: {
            arg: 'solution',
            type: 'string'
        },
        http: {
            verb: 'post',
            path: '/volverAdmin'
        }
    });



};
