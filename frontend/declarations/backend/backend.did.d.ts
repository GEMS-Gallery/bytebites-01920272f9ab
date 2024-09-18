import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getAddress' : ActorMethod<[], string>,
  'getHours' : ActorMethod<[], Array<[string, string]>>,
  'getMenu' : ActorMethod<[], Array<[string, string, bigint]>>,
  'getRestaurantInfo' : ActorMethod<[], [string, string]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
