import localFont from "next/font/local";

const next_text = localFont({
  src: [
    {
      path: "./fonts/NexaText-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NexaText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NexaText-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NexaText-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NexaText-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/NexaText-Heavy.otf",
      weight: "950",
      style: "normal",
    },
  ],
});

export default next_text;
