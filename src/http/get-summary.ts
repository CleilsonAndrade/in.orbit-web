type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/summary`)
  const data = await response.json()
  return data.summary
}
