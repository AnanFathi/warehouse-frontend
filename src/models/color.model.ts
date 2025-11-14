export type Color = {
  _id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

export type ColorsPayload = {
  search?: string;
};

export type CreateColorPayload = {
  name?: string;
  color?: string;
};

export type EditColorPayload = {
  _id: string;
  name?: string;
  color?: string;
};