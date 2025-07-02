import { useEffect, useState } from "react"
import type { GitHubUser } from "../../../types/GitHub"
import { githubApi } from "../../../services/githubAPi"

export function Header() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const userData = await githubApi.getUser()
        setUser(userData)
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchHeader()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Portfolio GitHub - {user?.name || 'GustavoR1991'}
          </h1>
        </div>
        {user && (
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left" >
              <img
                src={user.avatar_url}
                alt={user.name || user.login}
                className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-lg"
              />
              <div className="flex-1">
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {user.bio}
                </p>
                <a
                  href="https://www.linkedin.com/in/gustavo-rosa-de-sousa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>

  )
}