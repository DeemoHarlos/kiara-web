export type VideoInfo = {
  ID: string
  url: string
  title: string
  time: string
  type: string
  subtype: string
  isSponsored: boolean
  streamHost: string
  members: string[]
  customTags: string[]
  language: string
}

export type MusicInfo = {
  name: string
  members: string[]
  type: string
  composer: string
  publishDate: string
  url: string
  imageUrl: string
}

export type TimelineInfo = {
  date: string
  type: string
  description: string
}
