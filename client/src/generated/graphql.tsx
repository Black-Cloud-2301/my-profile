import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Gamble = {
  __typename?: 'Gamble';
  id: Scalars['ID'];
  image: Scalars['String'];
  suit: Scalars['Float'];
  suitValue: Scalars['Float'];
  value: Scalars['Float'];
};

export type Menu = {
  __typename?: 'Menu';
  category: Scalars['String'];
  desc: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type People = {
  __typename?: 'People';
  birthday: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  quote: Scalars['String'];
  title: Scalars['String'];
};

export type Projects = {
  __typename?: 'Projects';
  category: Scalars['String'];
  github: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  gamble?: Maybe<Array<Gamble>>;
  menu?: Maybe<Array<Menu>>;
  people?: Maybe<Array<People>>;
  projects?: Maybe<Array<Projects>>;
  questions?: Maybe<Array<Questions>>;
  tours?: Maybe<Array<Tours>>;
};

export type Questions = {
  __typename?: 'Questions';
  id: Scalars['ID'];
  info: Scalars['String'];
  title: Scalars['String'];
};

export type Tours = {
  __typename?: 'Tours';
  id: Scalars['ID'];
  image: Scalars['String'];
  info: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
};

export type PeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleQuery = { __typename?: 'Query', people?: Array<{ __typename?: 'People', id: string, name: string, birthday: any, image: string, title: string, quote: string }> | null | undefined };

export type GambleQueryVariables = Exact<{ [key: string]: never; }>;


export type GambleQuery = { __typename?: 'Query', gamble?: Array<{ __typename?: 'Gamble', id: string, image: string, value: number, suit: number, suitValue: number }> | null | undefined };

export type MenuQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuQuery = { __typename?: 'Query', menu?: Array<{ __typename?: 'Menu', id: string, title: string, category: string, price: number, image: string, desc: string }> | null | undefined };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Projects', id: string, name: string, image: string, link: string, github: string, category: string }> | null | undefined };

export type QuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionsQuery = { __typename?: 'Query', questions?: Array<{ __typename?: 'Questions', id: string, title: string, info: string }> | null | undefined };

export type ToursQueryVariables = Exact<{ [key: string]: never; }>;


export type ToursQuery = { __typename?: 'Query', tours?: Array<{ __typename?: 'Tours', id: string, name: string, info: string, image: string, price: string }> | null | undefined };


export const PeopleDocument = gql`
    query People {
  people {
    id
    name
    birthday
    image
    title
    quote
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const GambleDocument = gql`
    query Gamble {
  gamble {
    id
    image
    value
    suit
    suitValue
  }
}
    `;

/**
 * __useGambleQuery__
 *
 * To run a query within a React component, call `useGambleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGambleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGambleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGambleQuery(baseOptions?: Apollo.QueryHookOptions<GambleQuery, GambleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GambleQuery, GambleQueryVariables>(GambleDocument, options);
      }
export function useGambleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GambleQuery, GambleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GambleQuery, GambleQueryVariables>(GambleDocument, options);
        }
export type GambleQueryHookResult = ReturnType<typeof useGambleQuery>;
export type GambleLazyQueryHookResult = ReturnType<typeof useGambleLazyQuery>;
export type GambleQueryResult = Apollo.QueryResult<GambleQuery, GambleQueryVariables>;
export const MenuDocument = gql`
    query Menu {
  menu {
    id
    title
    category
    price
    image
    desc
  }
}
    `;

/**
 * __useMenuQuery__
 *
 * To run a query within a React component, call `useMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useMenuQuery(baseOptions?: Apollo.QueryHookOptions<MenuQuery, MenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
      }
export function useMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuQuery, MenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenuQuery, MenuQueryVariables>(MenuDocument, options);
        }
export type MenuQueryHookResult = ReturnType<typeof useMenuQuery>;
export type MenuLazyQueryHookResult = ReturnType<typeof useMenuLazyQuery>;
export type MenuQueryResult = Apollo.QueryResult<MenuQuery, MenuQueryVariables>;
export const ProjectsDocument = gql`
    query Projects {
  projects {
    id
    name
    image
    link
    github
    category
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const QuestionsDocument = gql`
    query Questions {
  questions {
    id
    title
    info
  }
}
    `;

/**
 * __useQuestionsQuery__
 *
 * To run a query within a React component, call `useQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, options);
      }
export function useQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, options);
        }
export type QuestionsQueryHookResult = ReturnType<typeof useQuestionsQuery>;
export type QuestionsLazyQueryHookResult = ReturnType<typeof useQuestionsLazyQuery>;
export type QuestionsQueryResult = Apollo.QueryResult<QuestionsQuery, QuestionsQueryVariables>;
export const ToursDocument = gql`
    query Tours {
  tours {
    id
    name
    info
    image
    price
  }
}
    `;

/**
 * __useToursQuery__
 *
 * To run a query within a React component, call `useToursQuery` and pass it any options that fit your needs.
 * When your component renders, `useToursQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToursQuery({
 *   variables: {
 *   },
 * });
 */
export function useToursQuery(baseOptions?: Apollo.QueryHookOptions<ToursQuery, ToursQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToursQuery, ToursQueryVariables>(ToursDocument, options);
      }
export function useToursLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToursQuery, ToursQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToursQuery, ToursQueryVariables>(ToursDocument, options);
        }
export type ToursQueryHookResult = ReturnType<typeof useToursQuery>;
export type ToursLazyQueryHookResult = ReturnType<typeof useToursLazyQuery>;
export type ToursQueryResult = Apollo.QueryResult<ToursQuery, ToursQueryVariables>;