type Payment = {
  name: string;
  createdAt: Date;
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const customers: Customer[] = [
  {
    name: "product1",
    createdAt: 12 - 11 - 2023,
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    name: "product2",
    createdAt: 12 - 11 - 2023,
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    name: "product13412",
    createdAt: 12 - 11 - 2023,
    id: "489e135yh",
    amount: 7545,
    status: "failed",
    email: "example@gmail.com",
  },
  {
    name: "product1875",
    createdAt: 12 - 11 - 2023,
    id: "48j133442",
    amount: 985,
    status: "success",
    email: "ple@gmail.com",
  },
  {
    name: "product1184",
    createdAt: 12 - 11 - 2023,
    id: "48j5osl42",
    amount: 1765,
    status: "processing",
    email: "exa@gmail.com",
  },
  {
    name: "product15673",
    createdAt: 12 - 11 - 2023,
    id: "489e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    name: "product6549",
    createdAt: 12 - 11 - 2023,
    id: "489l3wp4c2",
    amount: 1205,
    status: "success",
    email: "dgmle@gmail.com",
  },
  {
    name: "product6411",
    createdAt: 12 - 11 - 2023,
    id: "489e1d42",
    amount: 125,
    status: "failed",
    email: "exe@gmail.com",
  },
  {
    name: "product64",
    createdAt: 12 - 11 - 2023,
    id: "489edg42",
    amount: 1255,
    status: "failed",
    email: "exale@gmail.com",
  },
  {
    name: "product2112",
    createdAt: 12 - 11 - 2023,
    id: "489e1dyb2",
    amount: 1343,
    status: "processing",
    email: "exame@gmail.com",
  },
  {
    name: "product42",
    createdAt: 12 - 11 - 2023,
    id: "48931d42",
    amount: 25,
    status: "success",
    email: "xample@gmail.com",
  },
];
