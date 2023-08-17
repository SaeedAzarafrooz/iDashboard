import UnderConstruction from "@/public/assets/images/underconstruction.png";
export default function Documents() {
  const NodeTreeTasks = [
    {
      id: 1,
      date: " 2023/08/15",
      done: true,
      task: "Create project by Nextjs 13 (done:2023/08/15)",
      hasSub: false,
      subs: [],
    },
    {
      id: 2,
      date: " 2023/08/15",
      done: true,
      task: "Connect it to git (done:2023/08/15)",
      hasSub: false,
      subs: [],
    },
    {
      id: 3,
      date: " 2023/08/15",
      done: true,
      task: "Design overal view (Home,Header,Footer,SidePanel) (done:2023/08/15)",
      hasSub: false,
      subs: [],
    },
    {
      id: 4,
      date: " 2023/08/16",
      done: true,
      task: "Determine generic require components (done:2023/08/17)",
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
      id: 8,
      date: " 2023/08/17",
      done: false,
      task: "Implement responsive in all pages",
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
          date: " 2023/08/17",
          done: false,
          task: "Goals Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 92,
          date: " 2023/08/16",
          done: false,
          task: "Header",
          hasSub: true,
          subs: [
            {
              id: 921,
              date: " 2023/08/16",
              done: false,
              task: "DateTimeMonitor",
              hasSub: false,
              subs: [],
            },
            {
              id: 922,
              date: " 2023/08/16",
              done: false,
              task: "SearchBar",
              hasSub: false,
              subs: [],
            },
            {
              id: 923,
              date: " 2023/08/16",
              done: false,
              task: "NotificationIcon",
              hasSub: false,
              subs: [],
            },
            {
              id: 924,
              date: " 2023/08/16",
              done: false,
              task: "UserInfoIcon",
              hasSub: false,
              subs: [],
            },
            {
              id: 925,
              date: " 2023/08/17",
              done: false,
              task: "DateTimeMonitor dropdown modal",
              hasSub: false,
              subs: [],
            },
            {
              id: 926,
              date: " 2023/08/17",
              done: false,
              task: "NotificationIcon dropdown modal",
              hasSub: false,
              subs: [],
            },
            {
              id: 927,
              date: " 2023/08/17",
              done: false,
              task: "SearchBar dropdown modal",
              hasSub: false,
              subs: [],
            },
            {
              id: 928,
              date: " 2023/08/17",
              done: false,
              task: "UserInfoIcon dropdown modal",
              hasSub: false,
              subs: [],
            },
          ],
        },
        {
          id: 93,
          date: " 2023/08/16",
          done: false,
          task: "SidePanel",
          hasSub: true,
          subs: [
            {
              id: 921,
              date: " 2023/08/17",
              done: true,
              task: "SidePanel primitive Items (primitive hover)",
              hasSub: false,
              subs: [],
            },
            {
              id: 922,
              date: " 2023/08/17",
              done: true,
              task: "primitive routing (navigate to pages)",
              hasSub: false,
              subs: [],
            },
            {
              id: 923,
              date: " 2023/08/17",
              done: false,
              task: "SidePanel finalize Items (colorized and final hover)",
              hasSub: false,
              subs: [],
            },
          ],
        },
        {
          id: 94,
          date: " 2023/08/16",
          done: false,
          task: "Footer",
          hasSub: true,
          subs: [
            {
              id: 931,
              date: " 2023/08/17",
              done: true,
              task: "Choose a template for footer",
              hasSub: false,
              subs: [],
            },
            {
              id: 932,
              date: " 2023/08/17",
              done: true,
              task: "Implement primitive template",
              hasSub: false,
              subs: [],
            },
            {
              id: 933,
              date: " 2023/08/17",
              done: false,
              task: "Finalize the footer sections and behaviour",
              hasSub: false,
              subs: [],
            },
          ],
        },
        {
          id: 95,
          date: " 2023/08/17",
          done: false,
          task: "Tasks Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 96,
          date: " 2023/08/17",
          done: false,
          task: "Apps Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 97,
          date: " 2023/08/17",
          done: false,
          task: "Statistics Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 98,
          date: " 2023/08/17",
          done: false,
          task: "TimeBoxing Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 99,
          date: " 2023/08/17",
          done: false,
          task: "Statistics Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 910,
          date: " 2023/08/17",
          done: false,
          task: "Documents Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 911,
          date: " 2023/08/17",
          done: false,
          task: "Settings Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 912,
          date: " 2023/08/17",
          done: false,
          task: "UserProfile Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 913,
          date: " 2023/08/17",
          done: false,
          task: "SearchResult Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 914,
          date: " 2023/08/17",
          done: false,
          task: "Calendar Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 915,
          date: " 2023/08/17",
          done: false,
          task: "Login Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 916,
          date: " 2023/08/17",
          done: false,
          task: "Signup Page",
          hasSub: true,
          subs: [],
        },
        {
          id: 917,
          date: " 2023/08/17",
          done: false,
          task: "Trophies Page",
          hasSub: true,
          subs: [],
        },
      ],
    },
  ];

  return (
    <main
      className="w-full h-fit flex flex-col justify-between items-center text-3xl text-gray-300 bg-gray-500 p-2"
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
