import { useState } from 'react';
import LoginForm from '../components/features/forms/LoginForm';
import LoginFormWithPhone from '../components/features/forms/LoginFormWithPhone';

const defaultTabs = [
  { title: 'Login with email', comp: <LoginForm /> },
  { title: 'Login with phone', comp: <LoginFormWithPhone /> },
];

export default function Login() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start mx-auto">
          <div className="flex-1">
            <div className="flex flex-row items-center flex-wrap gap-2 lg:flex-col max-w-[300px] ml-auto">
              {defaultTabs?.map((tb, index) => (
                <h3
                  onClick={() => setActiveIndex(index)}
                  key={index}
                  className={`p-2 w-full rounded-sm ${
                    index === activeIndex
                      ? 'bg-white text-indigo-800'
                      : 'text-white'
                  }`}
                >
                  {tb.title}
                </h3>
              ))}
            </div>
          </div>
          <div className="flex-1">
            {defaultTabs?.map((tb, i) => (
              <div
                key={i}
                className={`${i === activeIndex ? 'block' : 'hidden'}`}
              >
                {tb.comp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
