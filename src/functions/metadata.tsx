import { Metadata } from "next"

export function constructMetadata({
    title = "YouLearn - AI companion for learning",
    description = "YouLearn is reimagining the future of learning by building AI software for students, teachers, and communities to democratize quality education worldwide.",
    image = "/spaceIcon.png",
    icons = "/icon.ico",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image
          }
        ]
      },
      icons,
      metadataBase: new URL('https://dev.youlearn.ai/'),
      themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }