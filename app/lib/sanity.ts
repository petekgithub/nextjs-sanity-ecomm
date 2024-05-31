import createImageUrlBuilder from "@sanity/image-url";

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7jfyc5zs",
  dataset: "production",
  apiVersion: "2022-02-25",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
