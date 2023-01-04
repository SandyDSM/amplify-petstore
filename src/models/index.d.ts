import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPet = {
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly breed?: string | null;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPet = {
  readonly id: string;
  readonly name: string;
  readonly age?: number | null;
  readonly breed?: string | null;
  readonly about?: string | null;
  readonly image?: string | null;
  readonly color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pet = LazyLoading extends LazyLoadingDisabled ? EagerPet : LazyPet

export declare const Pet: (new (init: ModelInit<Pet, PetMetaData>) => Pet) & {
  copyOf(source: Pet, mutator: (draft: MutableModel<Pet, PetMetaData>) => MutableModel<Pet, PetMetaData> | void): Pet;
}