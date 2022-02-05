export type AddressGeo = {
  lat: string;
  lng: string;
};

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserModel = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: Company;
};
