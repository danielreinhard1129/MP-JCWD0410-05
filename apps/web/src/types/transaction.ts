// export interface Transactions extends Event {
//   id: number;
//   qty: number;
//   total: number;
//   status: StatusPayment;
//   name: string;
//   payment_method: string;
//   payment_proof: string;
//   voucher_used: string;
//   reward_used: string;
//   point_used: number;
//   createdAt: string;
//   updatedAt: string;
//   event: {
//     id: number;
//     name: string;
//     thumbnail: string;
//     start_date: string;
//     end_date: string;
//     location: string;
//     price: number;
//   };
//   user: {
//     name: string;
//     email: string;
//   };

//   // enum PaymentMethod {
//   //   QRIS
//   //   Bank_Transfer
//   // }
// }
export interface Transaction {
  id: number;
  userId: number;
  eventId: number;
  qty: number;
  total: number;
  status: Status;
  price: number;
  paymentProof: string;
  paymentMethod: string;
  pointUsed: number;
  voucherUsed: number;
  rewardUsed: number;
  createdAt: string;
  updateAt: string;
  event: {
    id: number;
    thumbnail: string;
    name: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  user: {
    name: string;
    email: string;
  };
}

export enum Status {
  WAIITNG_FOR_PAYMENT = 'WAIITNG_FOR_PAYMENT',
  WAITING_FOR_ADMIN_CONFIRMATION = 'WAITING_FOR_ADMIN_CONFIRMATION',
  DONE = 'DONE',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
  CANCELED = 'CANCELED',
}

export enum StatusPayment {
  waiting_for_payment = 'waiting_for_payment',
  waiting_for_admin_confirmation = '  waiting_for_admin_confirmation',
  done = 'done',
  rejected = 'rejected',
  expired = 'expired',
  canceled = 'canceled',
}
