import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <div>
    <h1>AccountPage</h1>
    <h4>Reset Password</h4>
    <PasswordForgetForm />
    <h4>Change Password</h4>
    <PasswordChangeForm />
  </div>
);

export default AccountPage;