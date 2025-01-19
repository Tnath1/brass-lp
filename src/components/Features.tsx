




import { useState } from "react";

const Features = () => {
  // State to track the currently selected tab (default: first tab)
  const [selectedTab, setSelectedTab] = useState(0);

  // Data for tabs and videos
  const features = [
    {
      title: "Payments",
      description: "Create instant, scheduled and recurring payments easily",
      videoSrc: "/video/Payments-8fb7dc6bc3585e4167c7fde6ed0c3db7.mp4",
    },
    {
      title: "Invoices",
      description: "Send, receive, and reconcile invoices all on one platform",
      videoSrc: "/video/Invoices-66e6036951ae3a8692bf1f3db9804636.mp4",
    },
    {
      title: "Cashflow Support",
      description:
        "Move your business forward with insight and financial resources",
      videoSrc: "/video/CashflowSupport-4801743996342110f5b8e21ad71070da.mp4",
    },
    {
      title: "Cross-platform availability",
      description: "Bank everywhere. Available on iOS, Android and Slack",
      videoSrc: "/video/Integrations-b152a49a7fb05b4240154dbd56bdfd80.mp4",
    },
    {
      title: "Team banking",
      description: "Work with your team to run your entire financial operations",
      videoSrc: "/video/TeamBanking-6d02c773514e97cf47d69fcc086fa3ed.mp4",
    },
  ];

  return (
    <section className="mt-[154px]">
      <div className="px-[120px]">
        <header className="mb-8 mr-auto max-w-[585px] w-full">
          <h2 className="text-[45px] font-semibold tracking-[-1.21px] leading-[58px] text-left">
            Everything you need, less of what you don't.
          </h2>
        </header>

        {/* Grid layout: Text on left, Video on right */}
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Text list on the left */}
          <ul className="space-y-4" role="tablist">
            {features.map((feature, index) => (
              <li
                key={index}
                role="tab"
                id={`react-tabs-${index}`}
                aria-selected={selectedTab === index}
                aria-controls={`react-tabs-panel-${index}`}
                data-rttab="true"
                onClick={() => setSelectedTab(index)} // Update selected tab on click
                className={`cursor-pointer p-[1.5rem] px-[1.25rem] min-h-[116px]  border-l-4 ${
                  selectedTab === index
                    ? "text-black border-green-500"
                    : "text-gray-500 border-transparent"
                }`}
              >
                <h3 className="text-[20px] font-[500]">
                  {feature.title}
                </h3>
                <p className="text-left text-[18px] font-[400]">{feature.description}</p>
              </li>
            ))}
          </ul>

          {/* Video on the right */}
          <div role="tabpanel" className="w-full h-full rounded-lg flex items-center justify-center">
            <video 
              key={selectedTab} // Ensure video reloads when tab changes
              autoPlay
              loop
              controls
              src={features[selectedTab].videoSrc}
              className="w-full  h-full rounded-lg "
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
