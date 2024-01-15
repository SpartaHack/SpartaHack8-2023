import { useEffect } from "react"

export let amplitude: any
const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

const useAmplitudeInit = () => {
  useEffect(() => {
    const initAmplitude = async () => {
      amplitude = await import("@amplitude/analytics-browser")
      amplitude.init(AMPLITUDE_API_KEY, undefined, {
        logLevel: amplitude.Types.LogLevel.Warn,
        defaultTracking: {
          sessions: true,
        },
      })
    }
    initAmplitude()
  }, [])
}

export default useAmplitudeInit