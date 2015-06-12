var app = require('../../server/server');
var _ = require('lodash');
module.exports = function(Noder) {


    // un 'remote method' no estatico
    Noder.prototype.volverAdmin = function(cb) {
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


    Noder.prototype.roles = function(cb) {
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        var userID = this.id;
        RoleMapping.find({
            where: {
                principalId: userID.toString()
            },
            include: "role"
        }, function(err, userRoles) {
            var roles = _.map(userRoles,function(rol,i){
                return rol.role().name;
            })
            cb(null, roles)
        })

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

    Noder.remoteMethod('roles', {
        isStatic: false,
        accepts: [],
        returns: {
            arg: 'roles',
            type: 'array'
        },
        http: {
            verb: 'get',
            path: '/roles'
        }
    });



};
