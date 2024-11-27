declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface SuccessResponse {
  data: any;
  message: string;
  success: boolean;
}

interface ErrorResponse extends SuccessResponse {
  error_code: number;
}

interface User {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  role: string;
  payment: boolean;
  scratchCards: boolean[];
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  active: boolean;
}

interface RegisterResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      _id: string;
      name: string;
      email: string;
      active: boolean;
      role: string;
      payment: boolean;
      scratchCards: boolean[];
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
  message: string;
  success: boolean;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      _id: string;
      name: string;
      email: string;
      active: boolean;
      role: string;
      payment: boolean;
      scratchCards: boolean[];
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
  success: boolean;
}

interface UpdateRequest {
  userId: string;
  payment?: boolean;
  active?: boolean;
  scratchCards?: boolean[];
}

interface UpdateResponse {
  data: {
    _id: string;
    name: string;
    email: string;
    active: boolean;
    role: string;
    payment: boolean;
    scratchCards: boolean[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  message: string;
  success: boolean;
}

interface GetUserByIdResponse {
  data: {
    _id: string;
    name: string;
    email: string;
    active: boolean;
    role: string;
    payment: boolean;
    scratchCards: boolean[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  success: boolean;
}
