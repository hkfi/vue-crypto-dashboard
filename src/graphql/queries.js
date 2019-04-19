import gql from 'graphql-tag'

export const GET_ME = gql`
  query {
    me {
      id
      username
      displayName
      email
      favCryptos
      following {
        id
        username
      }
    }
  }
`

export const GET_USER = gql`
  query($data:UserWhereUniqueInput!) {
    user(where: $data) {
      id
      username
      displayName
      email
      bio
      location
      favCryptos
      posts {
        id
        content
        category
        createdAt
        upvotes {
          id
        }
        downvotes {
          id
        }
        author {
          id
          username
          displayName
        }
      }
      followers {
        id
        username
        email
      }
      following {
        id
        username
        email
      }
    }
  }
`

export const GET_USERS_SEARCH = gql`
  query($query: String) {
    users(query: $query) {
      id
      username
      displayName
      bio
      location
      favCryptos
    }
  }
`

export const GET_POSTS = gql`
  query($first: Int, $skip: Int) {
    posts(where: {
      parent: null
    },
    orderBy: createdAt_DESC,
    first: $first,
    skip: $skip) {
      id
      content
      category
      createdAt
      upvotes {
        id
      }
      downvotes {
        id
      }
      posts {
        id
      }
      author {
        id
        username
        displayName
      }
    }
  }
`

export const GET_POSTS_SEARCH = gql`
  query($first: Int, $skip: Int, $query: String) {
    posts(query: $query,
    orderBy: createdAt_DESC,
    first: $first,
    skip: $skip) {
      id
      content
      category
      createdAt
      upvotes {
        id
      }
      downvotes {
        id
      }
      posts {
        id
      }
      author {
        id
        username
        displayName
      }
    }
  }
`

export const GET_POST = gql`
  query($id:ID!) {
    post(id: $id) {
      id
      content
      category
      createdAt
      upvotes {
        id
        username
      }
      downvotes {
        id
        username
      }
      posts {
        id
        content
        category
        author {
          id
          username
          displayName
        }
        upvotes {
          id
        }
        downvotes {
          id
        }
        createdAt
      }
      parent {
        id
        content
        category
        author {
          id
          username
          displayName
        }
      }
      author {
        id
        username
        displayName
      }
    }
  }
`

export const GET_USERS_CONVERSED = gql`
  query {
    usersConversed {
      id
      username
    }
  }
`

export const GET_MESSAGES = gql`
  query($otherUserId: ID!) {
    messages(otherUserId: $otherUserId) {
      id
      content
      author {
        id
        username
      }
      receiver {
        id
        username
      }
      createdAt
    }
  }
`
