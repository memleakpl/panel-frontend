// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { requireAuth } from 'utils/auth';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'loginForm',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginForm/reducer'),
          System.import('containers/LoginForm/sagas'),
          System.import('containers/LoginForm'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('loginForm', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/',
      name: 'layout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Layout/sagas'),
          System.import('containers/Layout'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([sagas, component]) => {
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/users',
          name: 'usersList',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UsersList/reducer'),
              System.import('containers/UsersList/sagas'),
              System.import('containers/UsersList'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('usersList', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          onEnter: () => requireAuth(store),
        },
        {
          path: '/user/create',
          name: 'createUser',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UserForm/reducer'),
              System.import('containers/CreateUser/reducer'),
              System.import('containers/CreateUser/sagas'),
              System.import('containers/CreateUser'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([userFormReducer, reducer, sagas, component]) => {
              injectReducer('createUser', reducer.default);
              injectReducer('userForm', userFormReducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        }, {
          path: '/password/change',
          name: 'changePasswordForm',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/ChangePasswordForm/reducer'),
              System.import('containers/ChangePasswordForm/sagas'),
              System.import('containers/ChangePasswordForm'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, sagas, component]) => {
              injectReducer('changePasswordForm', reducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
          onEnter: () => requireAuth(store),
        },
        {
          path: '/user/:username',
          name: 'editUser',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UserForm/reducer'),
              System.import('containers/EditUser/reducer'),
              System.import('containers/EditUser/sagas'),
              System.import('containers/EditUser'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([userFormReducer, reducer, sagas, component]) => {
              injectReducer('editUser', reducer.default);
              injectReducer('userForm', userFormReducer.default);
              injectSagas(sagas.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
