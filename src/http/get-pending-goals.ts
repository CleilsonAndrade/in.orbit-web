type PendingGoalsResponse = {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL_API}/pending-goals`
  )
  const data = await response.json()
  return data.pendingGoals
}
