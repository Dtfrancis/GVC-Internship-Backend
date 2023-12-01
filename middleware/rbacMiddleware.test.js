// checkPermission.test.js
const { checkPermission } = require('../middleware/rbacMiddleware');
const  Permissions  = require('../models/permissions');

jest.mock('../models/permissions');

describe('checkPermission middleware', () => {
  test('should grant access for valid permissions', () => {
    Permissions.prototype.getPermissionsByRoleName.mockReturnValue(['read_task', 'update_task']);
    const middleware = checkPermission(['read_task', 'update_task']);
    const next = jest.fn();
    middleware({ user: { role: 'user' } }, {}, next);
    expect(next).toHaveBeenCalled();
  });

  test('should deny access for invalid permissions', () => {
    Permissions.prototype.getPermissionsByRoleName.mockReturnValue(['read_task']);
    const middleware = checkPermission(['update_task']);
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    middleware({ user: { role: 'user' } }, res, {});
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Access denied' });
  });

  test('should grant access for anonymous role', () => {
    Permissions.prototype.getPermissionsByRoleName.mockReturnValue(['read_task']);
    const middleware = checkPermission(['read_task']);
    const next = jest.fn();
    middleware({}, {}, next);
    expect(next).toHaveBeenCalled();
  });
});
