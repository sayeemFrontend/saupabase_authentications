import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const TabContext = createContext<any>('');

function Tab({ children }: { children: ReactElement }) {
  const [activeIndex, setActiveIndex] = useState('name');

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabContext.Provider>
  );
}

function TabList({
  children,
  className = '',
}: {
  children: ReactElement | ReactElement[];
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

function TabItem({
  children,
  name,
  className = '',
  defaultName = false,
  activeClass = 'bg-white text-indigo-800',
}: {
  children: string | ReactElement;
  name: string;
  activeClass?: string;
  className?: string;
  defaultName?: boolean;
}) {
  const { activeIndex, setActiveIndex } = useContext(TabContext);
  const childRef = useRef<HTMLDivElement | null>(null);
  const clsActive = activeClass
    .split(' ')
    .map((it) => it.trim())
    .map((it) => (it.includes(':') ? it.replace(':', ':!') : '!' + it))
    .join(' ');

  useEffect(() => {
    if (defaultName) {
      setActiveIndex(name);
    }
    //   const children = childRef.current?.children[0];

    //   const target = children
    //     ? childRef.current?.querySelector(`[class*='${activeClass}']`)
    //     : childRef.current;
    //   if (!target) return;
    //   const clsName = target?.className;
    //   if (activeIndex === name) {
    //     const newCls = clsName?.replace(`${activeClass}:`, '!');
    //     target.className = newCls;
    //   }
  }, [name]);

  return (
    <div
      ref={childRef}
      className={`${className} ${activeIndex === name && clsActive}`}
      onClick={() => setActiveIndex(name)}
    >
      {children}
    </div>
  );
}

{
  /* <Tab>
                <TabList>
                  <TabItem
                    name="name"
                    activeClass="bg-white text-indigo-800"
                    className="p-2 text-white w-full rounded-sm"
                    defaultName
                  >
                    Signup with email
                  </TabItem>
                  <TabItem
                    activeClass="bg-white text-indigo-800"
                    className="p-2 text-white w-full rounded-sm"
                    name="phone"
                  >
                    Signup with phone
                  </TabItem>
                </TabList>
              </Tab> */
}
