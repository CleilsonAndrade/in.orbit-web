export async function createGoalCompletion(goalId: string) {
  await fetch(`${import.meta.env.VITE_BASE_URL_API}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
