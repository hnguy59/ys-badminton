export interface ViewApiResponse {
  data?: {
    total: string
  }
}

export interface SpotifyNowPlayingData {
  isPlaying: boolean
  songUrl?: string
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
}

export interface GithubRepository {
  stargazerCount: number
  description: string
  homepageUrl: string
  languages: {
    color: string
    name: string
  }[]
  name: string
  nameWithOwner: string
  url: string
  forkCount: number
  repositoryTopics: string[]
}

export interface TagsCount {
  [tag: string]: number
}

export interface PaginationType {
  currentPage: number
  totalPages: number
}

export interface TOC {
  value: string
  url: string
  depth: number
}

export interface RemarkTocHeadingOptions {
  exportRef: TOC[]
}
