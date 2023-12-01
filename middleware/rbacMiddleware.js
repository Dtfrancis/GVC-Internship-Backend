// middleware/rbacMiddleware.js

const Role = require('../models/roles');
const Permissions = require('../models/permissions');

// Check if the user has the required permission for a route
exports.checkPermission = (permissions = []) => {
  return (req, res, next) => {
    const userRole = req.user ? req.user.role : 'anonymous';
    const userPermissions = new Permissions().getPermissionsByRoleName(userRole);
    let authorize = false;
    // and [ true, false, true]
    // request permissions[read_task, delete_task, update_task]
    // user permissions [read_task, update_task]
   for(n=0; n<permissions.length; n++){     
    if(userPermissions.includes(permissions[n])){
        authorize = true; 

    }else {
        authorize = false;
        break;
    }

   }
    if (authorize) {
      return next();
    } else {
      return res.status(401).json({ error: 'Access denied' });
    }
  };
};


