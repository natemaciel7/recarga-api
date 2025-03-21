export interface Carrier {
  id: number;
  name: string;
  code: number;
}

export interface Client {
  id: number;
  document: string;
  name: string;
}

export interface Phone {
  id: number;
  number: string;
  carrier_id: number;
  client_id: number;
  description: string;
}

export interface Recharge {
  id: number;
  phone_id: number;
  amount: number;
  created_at: Date;
}
