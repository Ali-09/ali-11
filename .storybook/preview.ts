import type { Preview } from "@storybook/react";
import { aetheriaTheme } from "./aetheriaTheme";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: aetheriaTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#040711" },
        { name: "light", value: "#f8fafc" },
      ],
    },
  },
};

export default preview;
