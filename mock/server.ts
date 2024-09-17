import { Server, Model, Response } from 'miragejs';
import users from './fixtures/users';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function makeServer() {
  return new Server({
    models: {
      user: Model.extend(),
    },

    fixtures: {
      users,
    },
    seeds(server) {
      server.loadFixtures();
    },
    routes() {
      this.namespace = 'api';

      // # Login
      this.post('/auth/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const user = schema.users.findBy({
          email: attrs.email,
          password: attrs.password,
        });
        if (user) {
          return {
            message: 'Login successfully!',
            token: `${Date.now() + 10 * 60 * 1000}-${user.user_id}`,
          };
        }
        return new Response(401, {}, 'Unauthorized');
      });

      // # Register
      this.post('/auth/register', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const findUser = schema.users.findBy({
          email: attrs.email,
        })?.attrs;
        if (findUser) {
          return new Response(400, {}, 'User already exists!');
        } else {
          schema.users.create(attrs);
          return {
            message: 'Register successfully!',
          };
        }
      });
    },
  });
}
