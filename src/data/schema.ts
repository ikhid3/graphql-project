export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  me?: Maybe<Project>;
  you?: Maybe<Root>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  projectPath?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Root>;
  you?: Maybe<Project>;
};

export type Root = {
  __typename?: 'Root';
  id: Scalars['ID'];
  path: Scalars['String'];
};
