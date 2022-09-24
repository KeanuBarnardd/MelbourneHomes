/*
Types of DATA fields we will need to have 
-----------------------------------------
address = Name of house 
area = Name of the area the house is in
Price = Price of property
description = Description of the property
sellType = Is it being rented or sold ?
listedTime = How many days since it was listed

beds = How many bedrooms 
baths = How many bathrooms 
garage = How many car spots (garage's)
living = How many living areas

squarefeet = How many square feet 
Type = Type of property that the house is eg. (Apartment, House etc.)

filters = What types of features you have true or false. 
images = Images of the houses.
*/

import { images } from "./index";

const agentData = [];

export const houseData = [
  {
    // ==================== HOUSE 1 ===================
    address: "13 Averson Road",
    area: "Hoppers Crossing",
    price: 300000,
    sellType: "purchase",
    description:
      "A beautiful modern style home in the heart of Hoppers Crossing a quiet area, with plenty of access to shopping centers, public transport and schooling. For any time of family or single living.",
    listedTime: 30,
    beds: 3,
    baths: 2,
    garage: 2,
    living: 1,
    squareFeet: 4000,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: true,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house1_1,
      images.house1_2,
      images.house1_3,
      images.house1_4,
      images.house1_5,
      images.house1_6,
      images.house1_7,
    ],
  },
  {
    // ==================== HOUSE 2 ===================
    address: "52 Blackburn Road",
    area: "Hawthorn",
    price: 542000,
    sellType: "purchase",
    description:
      "Cozy 4 bedroom home fit for a large family located in Hawthorn, close to the best private schools and local restraunts for people that want to go out and about.",
    listedTime: 2,
    beds: 4,
    baths: 2,
    garage: 2,
    living: 1,
    squareFeet: 5300,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: false,
      dw: true,
      wir: false,
      heating: true,
      solar: false,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house2_1,
      images.house2_2,
      images.house2_3,
      images.house2_4,
      images.house2_5,
      images.house2_6,
      images.house2_7,
      images.house2_8,
      images.house2_9,
    ],
  },
  {
    // ==================== HOUSE 3 ===================
    address: "5 Drinkwater Avenue",
    area: "Brighton",
    price: 1525000,
    sellType: "purchase",
    description:
      "Luxurious 5 bedroom mansion hidden away inside the high end streets of Brighton. With 3 car spots you will have space to store your cars and with a large pool you can spend heaps of time with family.",
    listedTime: 10,
    beds: 5,
    baths: 3,
    garage: 3,
    living: 2,
    squareFeet: 9400,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: true,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house4_1,
      images.house4_2,
      images.house4_3,
      images.house4_4,
      images.house4_5,
      images.house4_6,
      images.house4_7,
      images.house4_8,
      images.house4_9,
      images.house4_10,
    ],
  },
  {
    // ==================== HOUSE 4 ===================
    address: "1 Creekside Hill court",
    area: "Baccus Marsh",
    price: 952000,
    sellType: "purchase",
    description:
      "A 6 bedroom large family resort style home outside of the busy Melbourne city. If your family that loves nature and being outdoors then this is the dream home for you.  ",
    listedTime: 23,
    beds: 6,
    baths: 2,
    garage: 3,
    living: 2,
    squareFeet: 12000,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: true,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house5_1,
      images.house5_2,
      images.house5_3,
      images.house5_4,
      images.house5_5,
      images.house5_6,
      images.house5_7,
      images.house5_8,
    ],
  },
  {
    // ==================== HOUSE 6 ===================
    address: "92 StallBarrow court",
    area: "Warren Delly",
    price: 370,
    sellType: "rent",
    description:
      "Cozy small modern house in the outskirts of Melbourne in Warren Delly. If you are searching for a nice warm modern home to share with your family on the country-side this is the place to live. ",
    listedTime: 5,
    beds: 3,
    baths: 1,
    garage: 1,
    living: 1,
    squareFeet: 9254,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: false,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house6_1,
      images.house6_2,
      images.house6_3,
      images.house6_4,
      images.house6_5,
      images.house6_6,
      images.house6_7,
      images.house6_8,
    ],
  },
  {
    // ==================== HOUSE 7 ===================
    address: "72 Marketwall Street",
    area: "Melton",
    price: 400,
    sellType: "rent",
    description:
      "3 Bedroom family's dream in Melton, Melbourne. If your looking for a nice safe and easy going suburb to live in look no further. Next to public schools, local shopping centers and public transport. It is the ideal home for all types of familys. Also is located down the road from a indoor swimming pool which is super popular in the summer.   ",
    listedTime: 9,
    beds: 3,
    baths: 1,
    garage: 1,
    living: 1,
    squareFeet: 4254,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: false,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house7_1,
      images.house7_2,
      images.house7_3,
      images.house7_4,
      images.house7_5,
      images.house7_6,
      images.house7_7,
      images.house7_8,
    ],
  },
  {
    // ==================== HOUSE 8 ===================
    address: "8 HouseTall place",
    area: "Werribee ",
    price: 500,
    sellType: "rent",
    description:
      "Nice double story home with 4 bedrooms and 2 bathrooms. Located next to Werribee shopping center and 5 minute drive from Werribee station. It is ideal for a busy working class family with a short commute of 30 mins from Werribee station. Schools are plentiful and tons of food options to choose from.",
    listedTime: 1,
    beds: 4,
    baths: 2,
    garage: 2,
    living: 2,
    squareFeet: 5254,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: true,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house8_1,
      images.house8_2,
      images.house8_3,
      images.house8_4,
      images.house8_5,
      images.house8_6,
      images.house8_7,
      images.house8_8,
    ],
  },
  {
    // ==================== HOUSE 10 ===================
    address: "5 Averson Road",
    area: "Hoppers Crossing",
    price: 420,
    sellType: "rent",
    description:
      "Hoppers crossing is a nice small area thats only 30 minute drive from the heart of the CBD. This 3 bedroom 2 bathroom house is perfect for somone that is on the go or looking to live in a quiet friendly community. ",
    listedTime: 41,
    beds: 2,
    baths: 1,
    garage: 2,
    living: 1,
    squareFeet: 4054,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: true,
      dw: true,
      wir: true,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house10_1,
      images.house10_2,
      images.house10_3,
      images.house10_4,
      images.house10_5,
      images.house10_6,
      images.house10_7,
      images.house10_8,
    ],
  },
  {
    // ==================== HOUSE 11 ===================
    address: "5 Charriot Circuit",
    area: "Sunbury",
    price: 860000,
    sellType: "purchase",
    description:
      "A large lot of land surrounded by paddocks, with only a 10 minute drive from local ownded shops and public schools. If you want your kids to grow up around the bush and wild life, this is the place to be. Its quiet and the sunsets are beautiful.",
    listedTime: 2,
    beds: 4,
    baths: 2,
    garage: 3,
    living: 2,
    squareFeet: 10000,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: false,
      dw: true,
      wir: true,
      heating: true,
      solar: false,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house11_1,
      images.house11_2,
      images.house11_3,
      images.house11_4,
      images.house11_5,
      images.house11_6,
      images.house11_7,
    ],
  },
  {
    // ==================== HOUSE 12 ===================
    address: "5 Charriot Circuit",
    area: "Sunbury",
    price: 860000,
    sellType: "purchase",
    description:
      "A large lot of land surrounded by paddocks, with only a 10 minute drive from local ownded shops and public schools. If you want your kids to grow up around the bush and wild life, this is the place to be. Its quiet and the sunsets are beautiful.",
    listedTime: 2,
    beds: 4,
    baths: 2,
    garage: 3,
    living: 2,
    squareFeet: 4150,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: false,
      dw: true,
      wir: true,
      heating: true,
      solar: false,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house12_1,
      images.house12_2,
      images.house12_3,
      images.house12_4,
      images.house12_5,
      images.house12_6,
      images.house12_7,
      images.house12_8,
      images.house12_9,
    ],
  },
  {
    // ==================== HOUSE 13 ===================
    address: "9 Brownstone Avenue",
    area: "Sunshine",
    price: 720000,
    sellType: "purchase",
    description:
      "A colourful timeless house full of beautiful aged timber joinery and a garden to impress the best of friends. 2 minute walk from the local cafe, 10 min walk from the nearest public school and a 20 minute walk radius to two different train stations. Perfect for a family that loves to walk everywhere.",
    listedTime: 6,
    beds: 3,
    baths: 1,
    garage: 2,
    living: 1,
    squareFeet: 4500,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: false,
      dw: true,
      wir: false,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house13_2,
      images.house13_3,
      images.house13_4,
      images.house13_5,
      images.house13_6,
      images.house13_7,
      images.house13_8,
      images.house13_9,
    ],
  },
  {
    // ==================== HOUSE 14 ===================
    address: "827 Hosnier Street",
    area: "Springvale",
    price: 900000,
    sellType: "purchase",
    description:
      "Nice modern meets classic design that was renovated early this year. In a prime location of springvale. A 20 minute drive from the famouse Chadstone shopping center, as well as access to some of the most popular eating spots. ",
    listedTime: 3,
    beds: 3,
    baths: 2,
    garage: 2,
    living: 1,
    squareFeet: 5500,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: false,
      dw: true,
      wir: false,
      heating: true,
      solar: true,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house14_1,
      images.house14_2,
      images.house14_3,
      images.house14_4,
      images.house14_5,
      images.house14_6,
      images.house14_7,
      images.house14_8,
      images.house14_9,
    ],
  },
  {
    // ==================== HOUSE 15 ===================
    address: "722 BronzeDale Blvd",
    area: "Springvale",
    price: 410,
    sellType: "rent",
    description:
      "In the beautiufl community of Springvalue 722 BronzeDale Blvd is in a prime location with a 10 minutes walk from your local shops and resteraunts. Only a 30 minute drive from the Melbourne CBD its perfect for people looking for a busy but community centric life style.",
    listedTime: 63,
    beds: 3,
    baths: 2,
    garage: 1,
    living: 1,
    squareFeet: 4000,
    type: "house",

    filters: {
      aircon: true,
      pool: false,
      study: true,
      dw: false,
      wir: true,
      heating: false,
      solar: false,
      outdoor: true,
      balcony: false,
    },
    images: [
      images.house15_1,
      images.house15_2,
      images.house15_3,
      images.house15_4,
      images.house15_5,
      images.house15_6,
      images.house15_7,
      images.house15_8,
      images.house15_9,
    ],
  },
  {
    // ==================== HOUSE 16 ===================
    address: "1 NorthQuontan Street",
    area: "Brighton",
    price: 415,
    sellType: "rent",
    description:
      "High end home in the center of Brighton surrounded by busy bustling cafes and nice family parks. NorthQuontan Street is a highlight location for a busy uptown family looking to be amognst the hip young energitic community of Brighton. 15 minute walk from the beach its perfect for summer. ",
    listedTime: 6,
    beds: 5,
    baths: 3,
    garage: 2,
    living: 2,
    squareFeet: 5500,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: true,
      dw: true,
      wir: true,
      heating: false,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house16_1,
      images.house16_2,
      images.house16_3,
      images.house16_4,
      images.house16_5,
      images.house16_6,
      images.house16_7,
    ],
  },
  {
    // ==================== HOUSE 17 ===================
    address: "17 BuckleBerry Cresent",
    area: "Werribee",
    price: 769000,
    sellType: "purchase",
    description:
      "Located a 5 minute walk from Werribee main street you can consider this the ideal home for locals that want to be near the action. With 20+ cafes you won't be shy of options when it comes to your morning brunch. Schools and public transport are also of the many- making this a perfect home for families.",
    listedTime: 10,
    beds: 3,
    baths: 2,
    garage: 2,
    living: 1,
    squareFeet: 4100,
    type: "house",

    filters: {
      aircon: true,
      pool: true,
      study: true,
      dw: true,
      wir: true,
      heating: false,
      solar: true,
      outdoor: true,
      balcony: true,
    },
    images: [
      images.house17_1,
      images.house17_2,
      images.house17_3,
      images.house17_4,
      images.house17_5,
      images.house17_6,
      images.house17_7,
      images.house17_8,
    ],
  },
];

export const featuredHomes = [houseData[2], houseData[6], houseData[0]];
