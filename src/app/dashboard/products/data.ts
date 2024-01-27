type Product = {
  id: string;
  productName: string;
  description: string;
  createdAt: Date;
  stock: number;
  price: number;
  status: "pending" | "processing" | "success" | "failed";
  supplier: string;
};

export const products: Product[] = [
  {
    id: "6d279762-9f6c-4734-b611-595181c5ff19",
    productName: "Tasty Granite Chips",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-23T20:42:18.729Z"),
    stock: 1847,
    price: 718.34,
    status: "pending",
    supplier: "Nader, Bauch and Block",
  },
  {
    id: "d32783ca-23da-4eac-b41c-f0d805d22571",
    productName: "Intelligent Plastic Salad",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    createdAt: new Date("2024-01-23T08:38:02.706Z"),
    stock: 1946,
    price: 592.49,
    status: "processing",
    supplier: "Thiel - Schneider",
  },
  {
    id: "35870459-4687-47fb-ba4f-3d25af535bce",
    productName: "Small Cotton Keyboard",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-24T06:24:03.928Z"),
    stock: 4826,
    price: 299.02,
    status: "failed",
    supplier: "Haag, Hintz and Rau",
  },
  {
    id: "c022a10c-26e7-425a-8996-187958e9025d",
    productName: "Sleek Granite Chicken",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-24T06:41:35.793Z"),
    stock: 150,
    price: 204.38,
    status: "success",
    supplier: "Macejkovic, Schimmel and Braun",
  },
  {
    id: "3cc6ad75-c24d-4344-a3de-1fa04d473821",
    productName: "Fantastic Granite Chair",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T18:43:38.467Z"),
    stock: 947,
    price: 421.75,
    status: "failed",
    supplier: "Klocko Inc",
  },
  {
    id: "b558e937-191e-4894-967b-eeb941938f19",
    productName: "Bespoke Soft Soap",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T07:31:35.715Z"),
    stock: 8261,
    price: 265.18,
    status: "failed",
    supplier: "Osinski - Homenick",
  },
  {
    id: "5147fe57-2da4-4e80-b6d2-e59845c14f75",
    productName: "Generic Soft Shirt",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T03:58:21.764Z"),
    stock: 9814,
    price: 772.91,
    status: "processing",
    supplier: "Murray, Spinka and Corkery",
  },
  {
    id: "e4309dd5-bd12-404e-b1ef-e893ebe43700",
    productName: "Fantastic Fresh Shirt",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T17:10:00.788Z"),
    stock: 2710,
    price: 605.95,
    status: "failed",
    supplier: "Daugherty, Kutch and Hamill",
  },
  {
    id: "6f98893b-f3b4-4168-aa32-e7efadbd0202",
    productName: "Awesome Cotton Shoes",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    createdAt: new Date("2024-01-23T09:03:14.067Z"),
    stock: 6258,
    price: 989.53,
    status: "pending",
    supplier: "Funk Group",
  },
  {
    id: "3d74977a-5858-47a3-8adc-c659c47cc1bd",
    productName: "Intelligent Frozen Tuna",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T19:35:14.346Z"),
    stock: 5303,
    price: 125.52,
    status: "processing",
    supplier: "Witting - Abbott",
  },
  {
    id: "3a434052-d997-4e8b-86e6-15dbbdf87e45",
    productName: "Handmade Bronze Tuna",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-24T07:33:52.883Z"),
    stock: 6399,
    price: 728.47,
    status: "success",
    supplier: "Considine, Koepp and Roob",
  },
  {
    id: "186feeb9-1991-4549-93b1-03dd2062496f",
    productName: "Awesome Rubber Tuna",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T16:50:11.768Z"),
    stock: 3029,
    price: 932.27,
    status: "success",
    supplier: "Mohr, Gerlach and Haley",
  },
  {
    id: "334e242f-3fc0-445a-92eb-778d6e504141",
    productName: "Licensed Wooden Mouse",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-24T01:46:06.225Z"),
    stock: 6422,
    price: 270.36,
    status: "success",
    supplier: "Kub - Schneider",
  },
  {
    id: "996921f0-772e-46c8-93c7-017ac412e66a",
    productName: "Oriental Frozen Tuna",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T02:53:21.061Z"),
    stock: 4374,
    price: 316.0,
    status: "failed",
    supplier: "Kuvalis LLC",
  },
  {
    id: "b9c47669-7524-4e38-a4bf-13bf1e2f0cce",
    productName: "Tasty Frozen Chips",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-23T08:23:01.210Z"),
    stock: 7470,
    price: 325.05,
    status: "success",
    supplier: "Dach - Tillman",
  },
  {
    id: "5fdea54d-25e4-41f9-86bf-827456fdf3cb",
    productName: "Luxurious Frozen Tuna",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T22:04:14.759Z"),
    stock: 4296,
    price: 885.35,
    status: "processing",
    supplier: "Schaefer, Stiedemann and Dicki",
  },
  {
    id: "5f3feb93-8ce1-4704-a41f-b31c0904d6d8",
    productName: "Luxurious Plastic Shirt",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    createdAt: new Date("2024-01-24T03:18:42.017Z"),
    stock: 8590,
    price: 125.75,
    status: "processing",
    supplier: "Rosenbaum - Brakus",
  },
  {
    id: "73b50eb2-3938-4847-8921-cba12aec28f4",
    productName: "Electronic Bronze Shoes",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-24T04:49:00.986Z"),
    stock: 1918,
    price: 280.83,
    status: "failed",
    supplier: "Gottlieb, Sanford and Bartoletti",
  },
  {
    id: "2145949a-50fd-48aa-840d-ebf778219c3f",
    productName: "Refined Wooden Pizza",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T22:20:43.979Z"),
    stock: 5677,
    price: 456.82,
    status: "failed",
    supplier: "Weimann - Johnson",
  },
  {
    id: "9e680e62-1618-4834-b697-6399175e4b5c",
    productName: "Intelligent Bronze Keyboard",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-23T23:01:20.930Z"),
    stock: 3744,
    price: 972.47,
    status: "success",
    supplier: "Donnelly - Wyman",
  },
  {
    id: "a6250a2d-ecf4-48e9-b18d-9bf95c26d78a",
    productName: "Incredible Fresh Shirt",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T04:17:43.790Z"),
    stock: 979,
    price: 754.82,
    status: "processing",
    supplier: "Hoeger, McCullough and Leannon",
  },
  {
    id: "76acb666-cf6e-4912-a658-d7e27c1b2f87",
    productName: "Modern Granite Ball",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T18:03:19.925Z"),
    stock: 7291,
    price: 481.3,
    status: "failed",
    supplier: "O'Kon - Upton",
  },
  {
    id: "dd3e2799-a8e2-4f11-a3b5-a35816f11c78",
    productName: "Luxurious Soft Cheese",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-23T08:40:25.353Z"),
    stock: 2352,
    price: 390.26,
    status: "pending",
    supplier: "Graham - Windler",
  },
  {
    id: "a78c8415-9bfc-4c93-98b8-09d5922699f0",
    productName: "Oriental Plastic Car",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-24T03:38:44.075Z"),
    stock: 3660,
    price: 967.47,
    status: "failed",
    supplier: "Wehner, Terry and Renner",
  },
  {
    id: "563e0aab-9f30-422e-8718-3732547eac55",
    productName: "Electronic Bronze Fish",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-23T15:43:01.193Z"),
    stock: 874,
    price: 566.6,
    status: "pending",
    supplier: "White, Paucek and Reilly",
  },
  {
    id: "b6ea5dbc-49c5-4594-b8b3-9f06b4780af4",
    productName: "Modern Fresh Pants",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T21:29:02.254Z"),
    stock: 5066,
    price: 445.22,
    status: "processing",
    supplier: "Mante and Sons",
  },
  {
    id: "91030c61-5376-45ea-bfbd-bd5ef7e99c37",
    productName: "Handmade Fresh Bacon",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-23T16:40:48.535Z"),
    stock: 142,
    price: 561.23,
    status: "success",
    supplier: "Cronin - Kunze",
  },
  {
    id: "0eb0e52c-1445-4586-8fc0-420b6f5bc65a",
    productName: "Handmade Fresh Hat",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-24T06:21:59.120Z"),
    stock: 9839,
    price: 319.11,
    status: "processing",
    supplier: "King - Gibson",
  },
  {
    id: "74fbe92b-5b12-4c0a-82cb-12dae1908b50",
    productName: "Incredible Cotton Bike",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    createdAt: new Date("2024-01-23T21:11:00.895Z"),
    stock: 1892,
    price: 152.95,
    status: "success",
    supplier: "Reilly - Rodriguez",
  },
  {
    id: "c9eb68a6-c8b2-45ba-b6e2-f4c098b10a80",
    productName: "Modern Frozen Shoes",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T16:56:50.679Z"),
    stock: 1074,
    price: 765.07,
    status: "processing",
    supplier: "Bartoletti, Schowalter and Adams",
  },
  {
    id: "c3935953-d758-4cff-ba5f-fab3be32f839",
    productName: "Refined Frozen Chicken",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-24T03:53:52.216Z"),
    stock: 3242,
    price: 264.15,
    status: "processing",
    supplier: "Osinski Inc",
  },
  {
    id: "04bb2cfc-d069-41da-93c1-ce1e3c956ec8",
    productName: "Oriental Frozen Gloves",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-24T00:52:48.739Z"),
    stock: 2043,
    price: 3.78,
    status: "processing",
    supplier: "Reynolds - Ondricka",
  },
  {
    id: "09c6bb63-a566-407f-953b-8118159b6528",
    productName: "Awesome Cotton Hat",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T18:49:57.819Z"),
    stock: 4535,
    price: 567.26,
    status: "pending",
    supplier: "Jacobi - Koelpin",
  },
  {
    id: "e74f16cc-b38f-4df4-99d3-a55baf89bbc4",
    productName: "Handmade Fresh Cheese",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-23T11:26:51.632Z"),
    stock: 1062,
    price: 864.3,
    status: "failed",
    supplier: "Strosin - Smith",
  },
  {
    id: "f8d9a16c-3d6a-42a5-9071-8b3fb2593c8a",
    productName: "Small Frozen Cheese",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-24T04:11:34.903Z"),
    stock: 5690,
    price: 338.87,
    status: "processing",
    supplier: "Corkery - Lueilwitz",
  },
  {
    id: "e16d8c7b-71e4-4180-86d5-6f5d72f45b85",
    productName: "Handmade Bronze Computer",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-24T02:20:45.959Z"),
    stock: 6276,
    price: 941.67,
    status: "failed",
    supplier: "Jaskolski - Schuster",
  },
  {
    id: "aeb1910f-401f-4902-90b0-c5c658e2d5a8",
    productName: "Refined Granite Keyboard",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-23T10:36:45.088Z"),
    stock: 1963,
    price: 761.67,
    status: "processing",
    supplier: "Gerhold, Trantow and Larkin",
  },
  {
    id: "a25715fa-0d3f-47ee-a96d-aac315085686",
    productName: "Gorgeous Rubber Soap",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-24T06:05:38.945Z"),
    stock: 3130,
    price: 708.66,
    status: "success",
    supplier: "Zulauf - Pfannerstill",
  },
  {
    id: "b2f3a780-4763-4569-bf2a-949112724531",
    productName: "Fantastic Fresh Pants",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T07:01:54.791Z"),
    stock: 9861,
    price: 27.7,
    status: "processing",
    supplier: "Runte - Mante",
  },
  {
    id: "89569587-081c-4dd2-884f-96dc1d9e3158",
    productName: "Electronic Plastic Chips",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    createdAt: new Date("2024-01-23T11:32:57.709Z"),
    stock: 8194,
    price: 650.24,
    status: "success",
    supplier: "Boyer - Feest",
  },
  {
    id: "7bce460b-2508-4143-ab3b-bcdf19aa4b41",
    productName: "Ergonomic Soft Computer",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T01:44:38.325Z"),
    stock: 7562,
    price: 274.24,
    status: "processing",
    supplier: "Fahey Inc",
  },
  {
    id: "20506c6e-380b-4f60-9002-1556cadde3de",
    productName: "Fantastic Plastic Pizza",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-23T22:01:44.313Z"),
    stock: 316,
    price: 934.3,
    status: "success",
    supplier: "Beatty LLC",
  },
  {
    id: "65efe339-ebfd-4d74-95e7-ac147c4a2377",
    productName: "Generic Soft Towels",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T12:08:21.039Z"),
    stock: 6892,
    price: 517.34,
    status: "processing",
    supplier: "Volkman and Sons",
  },
  {
    id: "dd5a648a-0d1b-497a-b22c-b36a90dc6b5c",
    productName: "Fantastic Cotton Soap",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-23T23:20:18.911Z"),
    stock: 1154,
    price: 215.29,
    status: "failed",
    supplier: "Mertz - Williamson",
  },
  {
    id: "6b362a83-f34c-4486-9a13-83f1fb8c8507",
    productName: "Licensed Plastic Towels",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-23T21:05:46.827Z"),
    stock: 239,
    price: 383.44,
    status: "pending",
    supplier: "Hand, Jakubowski and Bailey",
  },
  {
    id: "cc024a68-1712-4b1b-93ac-cf5507917491",
    productName: "Handmade Granite Fish",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T17:57:10.127Z"),
    stock: 872,
    price: 853.38,
    status: "success",
    supplier: "Abshire - Schuster",
  },
  {
    id: "fefb6190-f7b7-45d0-bacd-2ec037cdb629",
    productName: "Ergonomic Bronze Table",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-23T16:00:58.959Z"),
    stock: 2703,
    price: 624.48,
    status: "processing",
    supplier: "Mann Group",
  },
  {
    id: "5da495dc-d360-4935-a4e6-29377e69d848",
    productName: "Oriental Rubber Gloves",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T17:05:58.933Z"),
    stock: 281,
    price: 128.38,
    status: "success",
    supplier: "Baumbach and Sons",
  },
  {
    id: "2bbb4a02-a3b4-4c70-8abc-c7fabdbb906a",
    productName: "Handmade Wooden Computer",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-24T00:02:43.821Z"),
    stock: 6593,
    price: 360.78,
    status: "processing",
    supplier: "Waters Inc",
  },
  {
    id: "e432576b-58f4-4bc4-b1b7-a675bcf7cef7",
    productName: "Ergonomic Cotton Chicken",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-24T06:13:06.338Z"),
    stock: 6667,
    price: 49.19,
    status: "pending",
    supplier: "Koelpin - Goodwin",
  },
  {
    id: "0fbea6e1-1c77-4816-9a67-a0dfbccd97ff",
    productName: "Modern Cotton Tuna",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-23T23:48:09.888Z"),
    stock: 8789,
    price: 169.81,
    status: "failed",
    supplier: "Murazik, Schumm and Terry",
  },
  {
    id: "3137cca1-67aa-4444-b167-d0e0c5e2d997",
    productName: "Small Steel Chips",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T09:16:27.896Z"),
    stock: 333,
    price: 92.11,
    status: "success",
    supplier: "Botsford - Pfannerstill",
  },
  {
    id: "736bf6be-fe98-4912-88c3-7ec7ff16b093",
    productName: "Rustic Granite Ball",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T12:48:44.262Z"),
    stock: 4251,
    price: 846.11,
    status: "failed",
    supplier: "Marks, Walsh and Luettgen",
  },
  {
    id: "a3513d59-f2aa-4c76-a67a-06b842a5cdca",
    productName: "Practical Soft Chair",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-23T21:49:29.899Z"),
    stock: 4186,
    price: 351.93,
    status: "failed",
    supplier: "Nitzsche - Donnelly",
  },
  {
    id: "39f5288f-3268-4d67-9309-8d059f8ff9d4",
    productName: "Oriental Metal Pants",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-24T05:55:55.407Z"),
    stock: 7022,
    price: 94.51,
    status: "success",
    supplier: "Doyle, Grant and Brekke",
  },
  {
    id: "a81713ec-96b2-4da8-a505-9333fecef012",
    productName: "Refined Bronze Mouse",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    createdAt: new Date("2024-01-23T16:52:26.528Z"),
    stock: 9614,
    price: 270.48,
    status: "processing",
    supplier: "Mann, Lubowitz and Terry",
  },
  {
    id: "15a223ba-fcf5-46f9-8284-5e95c4aa305b",
    productName: "Modern Wooden Keyboard",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-24T06:52:42.071Z"),
    stock: 1628,
    price: 459.47,
    status: "success",
    supplier: "Schroeder - Hagenes",
  },
  {
    id: "b1acf9a8-d661-4f38-91fa-6e3b8ff52807",
    productName: "Awesome Granite Chips",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-24T00:34:48.468Z"),
    stock: 1235,
    price: 180.67,
    status: "processing",
    supplier: "Walter - Conn",
  },
  {
    id: "6b9ab9c0-e95b-4e4b-a4cb-88ced95043f4",
    productName: "Incredible Soft Pants",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T19:14:16.197Z"),
    stock: 5232,
    price: 990.35,
    status: "success",
    supplier: "Fahey, Hackett and Carroll",
  },
  {
    id: "09eaaebe-6dfa-40fc-aedc-37e6c1b4c7d6",
    productName: "Rustic Rubber Hat",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-23T19:33:14.410Z"),
    stock: 4345,
    price: 177.5,
    status: "failed",
    supplier: "Bergstrom, Adams and Rice",
  },
  {
    id: "ce5cee3a-1b40-4639-afb3-e9f0f8e7910e",
    productName: "Practical Plastic Bacon",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T13:18:00.259Z"),
    stock: 8122,
    price: 113.56,
    status: "success",
    supplier: "Renner Group",
  },
  {
    id: "30a4999d-edbb-4837-805c-fa7bd60d267b",
    productName: "Modern Granite Keyboard",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-24T04:32:50.026Z"),
    stock: 8920,
    price: 853.45,
    status: "success",
    supplier: "Gerhold and Sons",
  },
  {
    id: "6fb77ede-f2a7-4fea-ad92-4da9db790865",
    productName: "Ergonomic Wooden Chicken",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-23T13:43:41.264Z"),
    stock: 5630,
    price: 374.95,
    status: "failed",
    supplier: "Bruen, Adams and Mann",
  },
  {
    id: "bfe6749b-8a84-4bae-bffb-9de0d2f49915",
    productName: "Modern Steel Keyboard",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T18:19:06.920Z"),
    stock: 5013,
    price: 772.94,
    status: "pending",
    supplier: "Beatty - Gerhold",
  },
  {
    id: "39d88340-187c-4aba-8766-95593f88dc04",
    productName: "Luxurious Wooden Car",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T21:37:40.084Z"),
    stock: 1108,
    price: 107.85,
    status: "processing",
    supplier: "Armstrong, Pollich and Ziemann",
  },
  {
    id: "3b2e802b-180e-4c48-b209-aa4c5a27954f",
    productName: "Sleek Metal Hat",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T08:31:42.735Z"),
    stock: 9979,
    price: 951.17,
    status: "processing",
    supplier: "Roberts Inc",
  },
  {
    id: "fbda0242-9936-4998-9bae-013d8b51f43b",
    productName: "Unbranded Steel Pants",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-24T04:01:33.229Z"),
    stock: 9332,
    price: 44.87,
    status: "failed",
    supplier: "Olson, Hirthe and Smith",
  },
  {
    id: "784630ed-6b96-4c69-a2dd-185d5950c201",
    productName: "Licensed Steel Soap",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-24T03:18:19.839Z"),
    stock: 5923,
    price: 670.03,
    status: "failed",
    supplier: "Donnelly LLC",
  },
  {
    id: "423120fb-c5d8-4cbe-9023-c8f4b9b01ffd",
    productName: "Practical Fresh Mouse",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T06:11:44.719Z"),
    stock: 8332,
    price: 853.38,
    status: "failed",
    supplier: "Gibson - Pfeffer",
  },
  {
    id: "0a1444f2-e461-403c-869b-e08afca5667a",
    productName: "Refined Wooden Car",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-24T07:26:21.907Z"),
    stock: 611,
    price: 671.23,
    status: "success",
    supplier: "Douglas, Botsford and Kozey",
  },
  {
    id: "acf2ce5e-efd8-4822-b84e-2fd99d925042",
    productName: "Fantastic Steel Shirt",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    createdAt: new Date("2024-01-23T15:12:30.507Z"),
    stock: 6176,
    price: 427.57,
    status: "failed",
    supplier: "Baumbach, Carter and Hamill",
  },
  {
    id: "7d908ea0-82fd-44f0-b252-6bad7e048574",
    productName: "Licensed Frozen Hat",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-23T12:21:13.902Z"),
    stock: 9026,
    price: 389.52,
    status: "success",
    supplier: "Moen, Collins and Towne",
  },
  {
    id: "4861b0a0-5ae2-429f-b496-39792a48a065",
    productName: "Rustic Plastic Pants",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-24T05:46:00.744Z"),
    stock: 5443,
    price: 405.03,
    status: "pending",
    supplier: "Langworth, Gutkowski and Hoppe",
  },
  {
    id: "c4040be6-3355-42f7-b6b7-78eee4c775cf",
    productName: "Ergonomic Frozen Ball",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-23T19:45:53.753Z"),
    stock: 8874,
    price: 3.31,
    status: "processing",
    supplier: "Wilderman - Wuckert",
  },
  {
    id: "3ca3f120-1dcf-4534-9623-4e15d0b282d9",
    productName: "Recycled Concrete Fish",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-23T19:16:31.141Z"),
    stock: 4807,
    price: 340.31,
    status: "pending",
    supplier: "Tillman LLC",
  },
  {
    id: "eca8bda5-02cc-48dd-b82c-03554cba87d4",
    productName: "Ergonomic Soft Chips",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-23T11:39:28.768Z"),
    stock: 2794,
    price: 350.3,
    status: "success",
    supplier: "Feil - Lehner",
  },
  {
    id: "538481dc-0326-4748-be9c-0c5285d439e4",
    productName: "Unbranded Soft Table",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-24T07:07:08.049Z"),
    stock: 9237,
    price: 812.99,
    status: "processing",
    supplier: "Mitchell Inc",
  },
  {
    id: "dc7819d8-c1e1-4d62-b569-04c53faff453",
    productName: "Recycled Bronze Fish",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-24T02:49:58.376Z"),
    stock: 7461,
    price: 681.2,
    status: "processing",
    supplier: "Davis LLC",
  },
  {
    id: "0503f481-23af-4285-8a3a-cb874a27b5ed",
    productName: "Practical Concrete Fish",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-23T16:24:32.078Z"),
    stock: 4814,
    price: 629.3,
    status: "failed",
    supplier: "Kohler, Schuppe and Becker",
  },
  {
    id: "6d8c7afa-3b4f-48c6-b3f1-ddafec9b456e",
    productName: "Licensed Rubber Salad",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-23T23:39:49.705Z"),
    stock: 4722,
    price: 862.45,
    status: "failed",
    supplier: "Breitenberg - Boyer",
  },
  {
    id: "5059eb1e-b4a5-4c44-8d61-e30517e0f057",
    productName: "Ergonomic Frozen Hat",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-23T13:48:16.003Z"),
    stock: 909,
    price: 820.44,
    status: "failed",
    supplier: "Witting, White and Brekke",
  },
  {
    id: "8d64b859-5df4-4d67-a296-551b49bf8ea0",
    productName: "Electronic Frozen Gloves",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    createdAt: new Date("2024-01-23T09:49:10.501Z"),
    stock: 2923,
    price: 149.69,
    status: "success",
    supplier: "Ryan Group",
  },
  {
    id: "4af1a41d-a86c-4230-b760-581bf90eb274",
    productName: "Fantastic Granite Computer",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    createdAt: new Date("2024-01-23T13:49:13.987Z"),
    stock: 2536,
    price: 423.46,
    status: "failed",
    supplier: "Bosco Group",
  },
  {
    id: "7229fd74-78af-4149-a381-54c46edc5333",
    productName: "Oriental Cotton Car",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    createdAt: new Date("2024-01-23T08:59:02.596Z"),
    stock: 4476,
    price: 8.12,
    status: "success",
    supplier: "Rosenbaum, Goodwin and Lubowitz",
  },
  {
    id: "eb4a2d68-b62e-48d9-9849-80e0cec6611f",
    productName: "Bespoke Granite Keyboard",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    createdAt: new Date("2024-01-23T09:10:38.861Z"),
    stock: 6302,
    price: 583.98,
    status: "success",
    supplier: "Gleason, Schinner and Kertzmann",
  },
  {
    id: "17cbf2ce-8faa-4b8c-8b41-a5003561d251",
    productName: "Handmade Fresh Shirt",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    createdAt: new Date("2024-01-23T09:39:15.834Z"),
    stock: 9721,
    price: 726.97,
    status: "pending",
    supplier: "Gerlach - Jacobson",
  },
  {
    id: "f868146e-d730-40f6-8520-c2cd6daf759c",
    productName: "Ergonomic Rubber Tuna",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T22:14:03.250Z"),
    stock: 9370,
    price: 154.69,
    status: "pending",
    supplier: "Collier, Turner and Smitham",
  },
  {
    id: "c5611833-62b2-42ad-ae18-4321ddb87a19",
    productName: "Rustic Plastic Computer",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    createdAt: new Date("2024-01-23T15:27:00.843Z"),
    stock: 8413,
    price: 944.09,
    status: "failed",
    supplier: "Marvin, Lubowitz and Rodriguez",
  },
  {
    id: "372c2fd0-07a8-4230-bfcb-c07898e8457c",
    productName: "Sleek Cotton Chair",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-24T05:53:25.593Z"),
    stock: 4564,
    price: 888.21,
    status: "pending",
    supplier: "Shields - Volkman",
  },
  {
    id: "352a3484-d5b5-4c9a-ada8-f00b762ad020",
    productName: "Handmade Bronze Towels",
    description: "The Football Is Good For Training And Recreational Purposes",
    createdAt: new Date("2024-01-23T10:40:37.485Z"),
    stock: 5059,
    price: 189.97,
    status: "success",
    supplier: "Padberg - Torphy",
  },
  {
    id: "b21d0302-7a1d-4d6c-958f-384c9596a890",
    productName: "Incredible Bronze Hat",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T18:26:06.856Z"),
    stock: 9270,
    price: 271.36,
    status: "processing",
    supplier: "Mertz, McCullough and Howell",
  },
  {
    id: "1d331cc2-fcad-40a4-98e2-d8b02606f886",
    productName: "Unbranded Granite Bacon",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    createdAt: new Date("2024-01-23T19:30:40.195Z"),
    stock: 5812,
    price: 210.98,
    status: "failed",
    supplier: "Beier, Torp and Jacobson",
  },
  {
    id: "ca6b2ad7-5ed6-4274-8db6-bcd5df3532ea",
    productName: "Rustic Wooden Salad",
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    createdAt: new Date("2024-01-23T09:20:53.015Z"),
    stock: 6133,
    price: 481.39,
    status: "pending",
    supplier: "Spencer Inc",
  },
  {
    id: "919d93d6-226e-4a56-90f1-815d6191a9f9",
    productName: "Bespoke Concrete Ball",
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    createdAt: new Date("2024-01-23T13:58:44.443Z"),
    stock: 6608,
    price: 541.58,
    status: "pending",
    supplier: "Will - Crona",
  },
  {
    id: "1f0245c1-59e0-4ed7-b68c-ba2f2a61cd1d",
    productName: "Tasty Bronze Towels",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-23T16:09:34.944Z"),
    stock: 2426,
    price: 616.38,
    status: "processing",
    supplier: "Quitzon LLC",
  },
  {
    id: "d95fae72-337f-4e06-84af-0d5aa004b28e",
    productName: "Sleek Rubber Pants",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T09:55:04.294Z"),
    stock: 766,
    price: 252.65,
    status: "processing",
    supplier: "Bauch, Towne and Schmidt",
  },
  {
    id: "7b445bc0-108c-4134-8a47-7682c454ac11",
    productName: "Handmade Granite Pizza",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    createdAt: new Date("2024-01-24T04:16:37.536Z"),
    stock: 455,
    price: 865.31,
    status: "failed",
    supplier: "Parker and Sons",
  },
  {
    id: "c38894c1-55d0-4f48-a7a2-1acf830abfeb",
    productName: "Handmade Granite Chair",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T11:30:26.942Z"),
    stock: 2025,
    price: 719.44,
    status: "processing",
    supplier: "Boyle Group",
  },
  {
    id: "92912c80-3a24-4e4a-a316-8d07f4549d1b",
    productName: "Intelligent Steel Bacon",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    createdAt: new Date("2024-01-24T05:33:55.289Z"),
    stock: 927,
    price: 874.72,
    status: "failed",
    supplier: "Lubowitz, Langosh and Rath",
  },
  {
    id: "7aca9b2c-9897-4396-9df7-c9be3f5e7a7c",
    productName: "Intelligent Plastic Mouse",
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    createdAt: new Date("2024-01-23T12:56:15.791Z"),
    stock: 9612,
    price: 483.13,
    status: "pending",
    supplier: "Ryan, Shanahan and Legros",
  },
];