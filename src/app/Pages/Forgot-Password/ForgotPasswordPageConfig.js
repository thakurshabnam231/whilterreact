import { lazy } from 'react';

const ForgotPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/pages/auth/forgot-password-2',
      component: lazy(() => import('./ForgotPassword')),
    },
  ],
};

export default ForgotPasswordPageConfig;
