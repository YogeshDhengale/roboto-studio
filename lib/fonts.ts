import localFont from "next/font/local";
export const copernicus = localFont({
  src: [
    {
      path: "./fonts/copernicus/copernicus-regular.ttf", 
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/copernicus/copernicus-regular-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/copernicus/copernicus-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/copernicus/copernicus-medium-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/copernicus/copernicus-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/copernicus/copernicus-semibold-italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/copernicus/copernicus-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/copernicus/copernicus-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
    // {
    //   path: "./fonts/copernicus/copernicus-extrabold.ttf",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/copernicus/copernicus-extrabold-italic.ttf",
    //   weight: "800",
    //   style: "italic",
    // },
    // {
    //   path: "./fonts/copernicus/copernicus-heavy.ttf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "./fonts/copernicus/copernicus-heavy-italic.ttf",
    //   weight: "900",
    //   style: "italic",
    // }
  ],
  variable: "--font-copernicus",
  display: "swap",
});