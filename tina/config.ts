import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/pages/${document._sys.filename}`,
        },
      },
      {
        name: "reviews",
        label: "Reviews",
        path: "content/reviews",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating",
            required: true,
            ui: {
              validate: (value) => {
                if (value < 1 || value > 5) {
                  return "Rating must be between 1 and 5";
                }
              },
            },
          },
          {
            type: "string",
            name: "ratingdesc",
            label: "Rating Description",
          },
          {
            type: "string",
            name: "links",
            label: "Links",
            list: true,
            ui: {
              min: 1,
              max: 5,
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            options: [
              "Horror",
              "Fantasy",
              "Mystery",
              "Romance",
              "Sci-Fi",
              "Thriller",
              "Historical",
              "Non-Fiction",
            ],
          },
        ],
      },
    ],
  },
});
