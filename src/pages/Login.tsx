import LoginForm from '../components/features/forms/LoginForm';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="grid grid-cols-12 grid-flow-row gap-4">
        <div className="col-span-12 lg:col-span-6">
          <Tabs
            orientation="horizontal"
            defaultValue="account"
            className="w-[400px]"
          >
            <TabsList>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
