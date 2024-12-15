import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLoaderData,
} from 'react-router-dom';

import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Home from '@/pages/Home';
import NotFound from './NotFound';
import Protected from './Protected';
import NotPermitted from './NotPermitted';
import Layout from '@/layout/Layout';
import Editor from '@/pages/Editor';
import Admin from '@/pages/Admin';
import { ROLES } from '@/apis/constant';

export default function RootElement() {
  return (
    <Routes>
      {/* private routes */}
      {/* permissionId is Used for uniquely Identify groups of routes */}

      <Route element={<Layout />}>
        <Route element={<Protected permissionId={ROLES.Admin} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<Protected permissionId={ROLES.Editor} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        {/* public routes */}

        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

        <Route path="not-permitted" element={<NotPermitted />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
