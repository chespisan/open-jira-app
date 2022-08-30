interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente ljghkdfhgdflhgfhjgkmhj,',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'En-progreso 34876034298765034586',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      description: 'Terminadas wiutvgoehdulehf rkegkhdf,',
      status: 'finished',
      createdAt: Date.now()
    },
  ]
}