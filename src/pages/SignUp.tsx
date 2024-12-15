import { useState } from 'react';
import SignUpForm from '../components/features/forms/SignUpForm';
import SignUpFormPhone from '../components/features/forms/SignUpFormPhone';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';

export default function SignUp() {
  const options = [
    { id: 1, title: 'Signup with email', comp: <SignUpForm /> },
    { id: 2, title: 'Signup with password', comp: <SignUpFormPhone /> },
  ];
  const [current, setCurrent] = useState(options[0]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14 lg:flex-row items-start w-max mx-auto">
          <div className="flex flex-row items-center flex-wrap gap-2 lg:flex-col w-[300px] mx-auto">
            {options?.map((op, i) => (
              <h3
                onClick={() => setCurrent(op)}
                key={i}
                className={`p-2 w-full rounded-sm ${
                  current.id === op.id
                    ? 'bg-white text-indigo-800'
                    : 'bg-inherit text-white'
                }`}
              >
                {op.title}
              </h3>
            ))}
          </div>

          <div>{current.comp}</div>
        </div>
      </div>
    </div>
  );
}
