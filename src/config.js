import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./Components/LearningOptions/LearningOptions";
import LinkLists from "./Components/LinkLists/LinkLists.jsx";
const config = {
botName:"InternO",
initialMessages: [
    createChatBotMessage("Hey I'm Inerno, here to help you with leadsquared?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkLists {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      }
    },
    {
      widgetName: "lappLinks",
      widgetFunc: (props) => <LinkLists {...props} />,
      props: {
        options: [
          {
            text: "Lapp Theories",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Lapp Deployment",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "How to call a lapp",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      }
    },
    {
      widgetName: "Custom APP Links",
      widgetFunc: (props) => <LinkLists {...props} />,
      props: {
        options: [
          {
            text: "Lapp Theories",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Lapp Deployment",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "How to call a lapp",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      }
    },
  ],
}
export default config;