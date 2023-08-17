import UnderConstruction from "@/public/assets/images/underconstruction.png";
export default function Documents() {
  const NodeTreeTasks = [
    {
      id: 1,
      date: " 2023/08/15",
      done: true,
      task: "Create project by Nextjs 13",
      hasSub: false,
      subs: [],
    },
    {
      id: 2,
      date: " 2023/08/15",
      done: true,
      task: "Connect it to git",
      hasSub: false,
      subs: [],
    },
    {
      id: 3,
      date: " 2023/08/15",
      done: true,
      task: "Design overal view (Home,Header,Footer,SidePanel)",
      hasSub: false,
      subs: [],
    },
    {
      id: 4,
      date: " 2023/08/16",
      done: false,
      task: "Determine require components",
      hasSub: false,
      subs: [],
    },
    {
      id: 5,
      date: " 2023/08/16",
      done: false,
      task: "Put component's abstract in place",
      hasSub: false,
      subs: [],
    },
    {
      id: 6,
      date: " 2023/08/16",
      done: false,
      task: "Design database and instal JSON Server",
      hasSub: false,
      subs: [],
    },
    {
      id: 7,
      date: " 2023/08/16",
      done: false,
      task: "Implement DB lib",
      hasSub: false,
      subs: [],
    },
    {
      id: 8,
      date: " 2023/08/16",
      done: false,
      task: "Finalize Pages and menu layout and items",
      hasSub: false,
      subs: [],
    },
    {
      id: 9,
      date: " 2023/08/16",
      done: false,
      task: "Implement all the components",
      hasSub: true,
      subs: [
        {
          id: 91,
          date: " 2023/08/16",
          done: false,
          task: "Header",
          hasSub: true,
          subs: [
            {
              id: 911,
              date: " 2023/08/16",
              done: false,
              task: "DateTimeMonitor",
              hasSub: false,
              subs: [],
            },
            {
              id: 912,
              date: " 2023/08/16",
              done: false,
              task: "SearchBar",
              hasSub: false,
              subs: [],
            },
            {
              id: 913,
              date: " 2023/08/16",
              done: false,
              task: "NotificationIcon",
              hasSub: false,
              subs: [],
            },
            {
              id: 914,
              date: " 2023/08/16",
              done: false,
              task: "UserInfoIcon",
              hasSub: false,
              subs: [],
            },
          ],
        },
        {
          id: 92,
          date: " 2023/08/16",
          done: false,
          task: "SidePanel",
          hasSub: false,
          subs: [],
        },
        {
          id: 93,
          date: " 2023/08/16",
          done: false,
          task: "Footer",
          hasSub: false,
          subs: [],
        },
      ],
    },
  ];

  return (
    <main
      className="w-full h-screen flex flex-col justify-between items-center text-3xl text-gray-300 bg-gray-500 p-2"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPositionX: 800,
        backgroundPositionY: 270,
        backgroundSize: "40%",
        objectFit: "cover",
        backgroundImage: `url(${UnderConstruction.src})`,
      }}
    >
      <h3>Documents page</h3>
      <div className="w-full h-full p-2 m-4 border-2 rounded-lg">
        <ul className="text-base">
          {NodeTreeTasks.map((item) => {
            return (
              <li className="flex flex-col" key={item.id}>
                <div className="flex">
                  {item.date}{" "}
                  <input type="checkbox" className="mx-2" checked={item.done} />
                  <p>{item.task}</p>
                </div>
                {item.hasSub && (
                  <div className="flex ml-28">
                    <div className="w-2 border-l-2 border-y-2"></div>
                    <ul>
                      {item.subs.map((subitem) => {
                        return (
                          <li key={subitem.id} className="flex flex-col">
                            <div className="flex ">
                              {subitem.date}{" "}
                              <input
                                type="checkbox"
                                className="mx-2"
                                checked={subitem.done}
                              />
                              <p>{subitem.task}</p>
                            </div>
                            {subitem.hasSub && (
                              <div className="flex ml-28">
                                <div className="w-2 border-l-2 border-y-2"></div>
                                <ul>
                                  {subitem.subs.map((subitem2) => {
                                    return (
                                      <li
                                        key={subitem2.id}
                                        className="flex flex-col"
                                      >
                                        <div className="flex ">
                                          {subitem2.date}{" "}
                                          <input
                                            type="checkbox"
                                            className="mx-2"
                                            checked={subitem2.done}
                                          />
                                          <p>{subitem2.task}</p>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
