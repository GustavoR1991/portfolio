import { useEffect, useState } from "react"
import type { GitHubRepo } from "../../../types/GitHub"
import { githubApi } from "../../../services/githubAPi"

export function Repositories() {


  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const reposData = await githubApi.getFeaturedRepositories()
        setRepos(reposData)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }



  return (
    <main className="px-4 md:px-6 lg:px-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-center mt-6">
          Repositórios em Destaque ({repos.length})
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-blue-600 mb-2 hover:text-blue-800">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-600 font-bold text-sm mb-4 h-12 overflow-hidden">
              {repo.description || 'Sem descrição disponível'}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3">
                {repo.language && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {repo.language}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="flex items-center">
                  ⭐ {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  🍴 {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}