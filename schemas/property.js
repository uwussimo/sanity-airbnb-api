export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "pricePerNight",
      title: "Price per night",
      type: "number",
    },
    {
      name: "beds",
      title: "Beds",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Bedsrooms",
      type: "number",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "propertyType",
      title: "PropertyType",
      type: "string",
      options: {
        list: [
          { title: "House", value: "house" },
          { title: "Flat", value: "falt" },
          { title: "Room", value: "room" },
          { title: "Butique Hotel", value: "butique-hotel" },
          { title: "Bed and Breakfast", value: "bed-and-breakfast" },
        ],
        layout: "radio",
      },
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      title: "Host",
      name: "host",
      type: "host",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      description: "description",
    },
  },
};
