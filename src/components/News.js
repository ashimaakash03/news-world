import React, { Component } from "react";
import NewsUpdates from "../NewsUpdates";

export class News extends Component {
  articles = [
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title:
        "Dexory’s massive shelf-scanning robot comes to North America | TechCrunch",
      description:
        "I’ve spent a good bit of time talking about inventory on these pages. I’m always happy to spend a couple of paragraphs discussing far and away my least",
      url: "https://techcrunch.com/2024/02/05/dexorys-massive-shelf-scanning-robot-comes-to-north-america/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/06/Robot-scanning-racks-2.jpg?resize=1200,675",
      publishedAt: "2024-02-05T16:54:03Z",
      content:
        "Ive spent a good bit of time talking about inventory on these pages. Im always happy to spend a couple of paragraphs discussing far and away my least favorite part of working retail. The job is, in e… [+2374 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Lauren Forristal",
      title:
        "Tinder's new warnings inform users when they’re potentially being inappropriate | TechCrunch",
      description:
        "Tinder is introducing new user warnings to tell young singles when they’re not being respectful and need to improve their behavior. The updates are Tinder is introducing new user warnings to tell singles when they’re not being respectful.",
      url: "https://techcrunch.com/2024/02/05/tinders-new-user-warnings-inform-members-when-theyre-potentially-being-inappropriate/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/05/tinder-icon-ios.jpg?resize=1200,674",
      publishedAt: "2024-02-05T16:43:57Z",
      content:
        "Tinder is introducing new user warnings to tell young singles when theyre not being respectful and need to improve their behavior. The updates are rolling out globally in the coming weeks and target … [+1837 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Aisha Malik",
      title:
        "Bumble's new AI tool identifies and blocks scam accounts, fake profiles | TechCrunch",
      description:
        "Bumble announced today that it's launching a new AI-powered feature that is designed to help identify spam, scams and fake profiles.",
      url: "https://techcrunch.com/2024/02/05/bumbles-new-ai-tool-identifies-and-blocks-scam-accounts-and-fake-profiles/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2020/11/bumble-app-screen-ios.jpg?resize=1200,675",
      publishedAt: "2024-02-05T16:22:11Z",
      content:
        "Bumble announced today that it’s launching a new AI-powered feature that is designed to help identify spam, scam and fake profiles. The new tool, called Deception Detector, aims to take action on mal… [+2330 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Haje Jan Kamps",
      title:
        "B2B vs. B2C is not about who’s buying, but how you’re selling | TechCrunch",
      description:
        "B2B and B2C, while believed to be stark opposites in many ways, are not purely categories of audiences.",
      url: "https://techcrunch.com/2024/02/05/b2b-vs-b2c-is-about-how-youre-selling/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1281051810.jpg?resize=1200,675",
      publishedAt: "2024-02-05T16:19:07Z",
      content:
        "I had a really interesting conversation with a founder this morning, who said that around 70% of their sales were to consumers, and that the remaining was to businesses. In the context of a pitch, th… [+1118 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Carly Page",
      title:
        "HopSkipDrive says personal data of 155,000 drivers stolen in data breach | TechCrunch",
      description:
        "The student rideshare startup says it experienced security incident in June that resulted in the exposure of drivers' personal information",
      url: "https://techcrunch.com/2024/02/05/hopskipdrive-says-personal-data-of-155000-drivers-stolen-in-data-breach/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1365148935.jpg?resize=1200,800",
      publishedAt: "2024-02-05T16:08:24Z",
      content:
        "Student rideshare startup HopSkipDrive has confirmed a data breach involving the personal data of more than 155,000 drivers.\r\nLos Angeles-based HopSkipDrive offers an Uber-style rideshare service for… [+2325 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Sarah Perez",
      title:
        "Snapchat's parent lays off 10% of workforce in order to 'reduce hierarchy,' says company | TechCrunch",
      description:
        "Snapchat maker Snap is the latest tech company to conduct layoffs with its newly announced plans for a 10% workforce reduction, the company said on",
      url: "https://techcrunch.com/2024/02/05/snapchats-parent-lays-off-10-of-workforce-in-order-to-reduce-hierarchy-says-company/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1172921170.jpg?w=1024",
      publishedAt: "2024-02-05T14:48:56Z",
      content:
        "Snapchat maker Snap is the latest tech company to conduct layoffs with its newly announced plans for a 10% workforce reduction, the company said on Monday. The layoffs would impact roughly 500-plus e… [+2557 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Sean O'Kane",
      title:
        "Rivian will reveal its smaller, cheaper R2 SUV on March 7 | TechCrunch",
      description:
        "Rivian's third consumer vehicle will be revealed on March 7. It's expected to be a smaller SUV that starts in the $40,000-$60,000 range.",
      url: "https://techcrunch.com/2024/02/05/rivian-r2-launch-march-7/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/10/rivian-yellow-truck.jpg?resize=1200,900",
      publishedAt: "2024-02-05T14:41:16Z",
      content:
        "Rivian will reveal its next-generation vehicle — a smaller, cheaper electric SUV known as R2 — on March 7, the company announced Monday morning.\r\nThere’s little other detail about the event, though i… [+1065 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ingrid Lunden",
      title:
        "Jua raises $16M to build a foundational AI model for the natural world, starting with the weather | TechCrunch",
      description:
        "Large AI models -- the big troves of language, vision and audio data that power generative artificial intelligence services -- are shaping up to be as",
      url: "https://techcrunch.com/2024/02/05/jua-raises-16m-to-build-a-foundational-ai-model-for-the-natural-world-starting-with-the-weather/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/01/GettyImages-872885192.jpg?resize=1200,800",
      publishedAt: "2024-02-05T14:29:52Z",
      content:
        "Large AI models — the big troves of language, vision and audio data that power generative artificial intelligence services — are shaping up to be as significant in the development of AI as operating … [+7189 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Ivan Mehta",
      title:
        "Dexa aims to get more out of podcasts with AI-powered search | TechCrunch",
      description:
        'If you listen to a lot of podcasts, there is a chance you might remember funny tidbits and are wondering… "Wait, who talked about eating fries with',
      url: "https://techcrunch.com/2024/02/05/dexa-aims-to-get-more-out-of-podcasts-with-ai-powered-search/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/02/dexa-launch-4.jpeg?resize=1200,645",
      publishedAt: "2024-02-05T13:14:16Z",
      content:
        "If you listen to a lot of podcasts, there is a chance you might remember funny tidbits and are wondering “Wait, who talked about eating fries with sriracha again?” or more serious questions. To look … [+5333 chars]",
    },
    {
      source: {
        id: "techcrunch",
        name: "TechCrunch",
      },
      author: "Brian Heater",
      title: "Apple Vision Pro review: the infinite desktop | TechCrunch",
      description:
        'In 2000, Paradox Press published "Reinventing Comics: How Imagination and Technology Are Revolutionizing an Art Form." The book was Scott McCloud’s',
      url: "https://techcrunch.com/2024/02/03/apple-vision-pro-review-the-infinite-desktop/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/02/DSC00065.jpeg?resize=1200,675",
      publishedAt: "2024-02-03T12:51:46Z",
      content:
        "In 2000, Paradox Press published “Reinventing Comics: How Imagination and Technology Are Revolutionizing an Art Form.” The book was Scott McClouds follow-up to his seminal 1993 work, “Understanding C… [+35682 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center mt-3 mb-3 text-primary">TOP NEWS</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-lg-4 mt-lg-3 mb-lg-3" key={element.url}>
                  <NewsUpdates
                    title={element.title}
                    newsUrl={element.url}
                    description={element.description.slice(0, 100)}
                    imageUrl={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
