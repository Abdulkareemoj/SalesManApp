type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e135yh",
    amount: 7545,
    status: "failed",
    email: "example@gmail.com",
  },
  {
    id: "48j133442",
    amount: 985,
    status: "success",
    email: "ple@gmail.com",
  },
  {
    id: "48j5osl42",
    amount: 1765,
    status: "processing",
    email: "exa@gmail.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "success",
    email: "example@gmail.com",
  },
  {
    id: "489l3wp4c2",
    amount: 1205,
    status: "success",
    email: "dgmle@gmail.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "failed",
    email: "exe@gmail.com",
  },
  {
    id: "489edg42",
    amount: 1255,
    status: "failed",
    email: "exale@gmail.com",
  },
  {
    id: "489e1dyb2",
    amount: 1343,
    status: "processing",
    email: "exame@gmail.com",
  },
  {
    id: "48931d42",
    amount: 25,
    status: "success",
    email: "xample@gmail.com",
  },
];
