type PendingGoalsResponse = {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('')
  const data = await response.json()
  return data.pendingGoals
}
