import { useState } from 'react';
import SignUpForm from '../components/features/forms/SignUpForm';
import SignUpFormPhone from '../components/features/forms/SignUpFormPhone';

const defaultTabs = [
  { title: 'Signup with email', comp: <SignUpForm /> },
  { title: 'Signup with phone', comp: <SignUpFormPhone /> },
];

export default function SignUp() {
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
