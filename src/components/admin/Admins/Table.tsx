"use client";

import DataTable, { Column } from "@/components/DataTable";

type User = {
  id: string;
  username: string;
  password: string;
  role: string;
};

const testUsers: User[] = [
  {
    id: "0",
    username: "oliver.james",
    password: "w7$Gk9rVb!2q",
    role: "ADMIN",
  },
  {
    id: "1",
    username: "emma.wilson",
    password: "Zr!4pLx8Mv#1",
    role: "SUPER_ADMIN",
  },
  { id: "2", username: "liam.miller", password: "Tq3@Hd9nYv6$", role: "ADMIN" },
  { id: "3", username: "ava.brown", password: "P#8cR2sWm6!z", role: "ADMIN" },
  {
    id: "4",
    username: "noah.davis",
    password: "xK9!uB4fR2@t",
    role: "SUPER_ADMIN",
  },
  {
    id: "5",
    username: "sophia.garcia",
    password: "M7$yVz3Lp!1q",
    role: "ADMIN",
  },
  {
    id: "6",
    username: "elijah.martin",
    password: "C2#pW8tGh9!v",
    role: "ADMIN",
  },
  {
    id: "7",
    username: "isabella.lee",
    password: "R5!nQ6sUb#3x",
    role: "SUPER_ADMIN",
  },
  {
    id: "8",
    username: "lucas.walker",
    password: "H8$kV4mTq2!z",
    role: "ADMIN",
  },
  { id: "9", username: "mia.hall", password: "B3@rP9vLw7#s", role: "ADMIN" },
  {
    id: "10",
    username: "mason.allen",
    password: "F6!tZ2kNm#8q",
    role: "SUPER_ADMIN",
  },
  {
    id: "11",
    username: "amelia.young",
    password: "D9$gH3pRq1!v",
    role: "ADMIN",
  },
  { id: "12", username: "ethan.king", password: "J4@bW7sLp6#x", role: "ADMIN" },
  {
    id: "13",
    username: "charlotte.scott",
    password: "V2!nM8rQz5$k",
    role: "SUPER_ADMIN",
  },
  {
    id: "14",
    username: "logan.green",
    password: "N7#pK1tHv9!c",
    role: "ADMIN",
  },
  {
    id: "15",
    username: "harper.adams",
    password: "S5$wL3mQv8!r",
    role: "ADMIN",
  },
  {
    id: "16",
    username: "lucas.baker",
    password: "Y8!fR2pVz6#q",
    role: "SUPER_ADMIN",
  },
  {
    id: "17",
    username: "evelyn.nelson",
    password: "K3@tG9sLw7#v",
    role: "ADMIN",
  },
  {
    id: "18",
    username: "jackson.carter",
    password: "Q6!nB4rHz2#p",
    role: "ADMIN",
  },
  {
    id: "19",
    username: "zoe.mitchell",
    password: "U9$kV5mTr1!x",
    role: "SUPER_ADMIN",
  },
  {
    id: "20",
    username: "aiden.roberts",
    password: "L4#pW8sGq6!v",
    role: "ADMIN",
  },
  {
    id: "21",
    username: "chloe.turner",
    password: "P2!rN7vLz9#k",
    role: "ADMIN",
  },
  {
    id: "22",
    username: "caleb.phillips",
    password: "M5$gT3pRq8!n",
    role: "SUPER_ADMIN",
  },
  { id: "23", username: "lara.evans", password: "H1#bK9tVc6!q", role: "ADMIN" },
  { id: "24", username: "owen.cole", password: "S8!mW4pLz2#v", role: "ADMIN" },
  {
    id: "25",
    username: "nora.foster",
    password: "R3$kV7nQp6!x",
    role: "SUPER_ADMIN",
  },
  {
    id: "26",
    username: "ryan.hughes",
    password: "D6!tB2pRw9#q",
    role: "ADMIN",
  },
  { id: "27", username: "ivy.morris", password: "F9$gL3sQv1!p", role: "ADMIN" },
  {
    id: "28",
    username: "leo.ross",
    password: "C7#pN8tMw2!v",
    role: "SUPER_ADMIN",
  },
  {
    id: "29",
    username: "sienna.ward",
    password: "A5!rK4vLz9#q",
    role: "ADMIN",
  },
];

const columns: Column[] = [
  {
    header: "Username",
    value: (user: User) => user.username,
  },
  {
    header: "Password",
    value: (user: User) => user.password,
  },
  {
    header: "Role",
    value: (user: User) => user.role,
  },
];

const Table = () => {
  return <DataTable items={testUsers} columns={columns} selection />;
};

export default Table;
