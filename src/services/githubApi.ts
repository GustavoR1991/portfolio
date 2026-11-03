import axios from "axios";
import type { GitHubRepo, GitHubUser } from "../types/github";
import { profile } from "../constants/profile";

// Uma instância do axios com o endereço base já configurado
const api = axios.create({ baseURL: "https://api.github.com" });

// Posição do repositório na lista de destaques (fora da lista = vai pro fim)
function featuredRank(repo: GitHubRepo): number {
  const index = profile.featuredRepos.indexOf(repo.name);
  return index === -1 ? profile.featuredRepos.length : index;
}

export const githubApi = {
  async getUser(): Promise<GitHubUser> {
    const { data } = await api.get<GitHubUser>(`/users/${profile.githubUser}`);
    return data;
  },

  // Agora devolve TODOS os repositórios (sem limite)
  async getRepositories(): Promise<GitHubRepo[]> {
    const { data } = await api.get<GitHubRepo[]>(
      `/users/${profile.githubUser}/repos`,
      {
        params: { sort: "updated", per_page: 100 },
      },
    );

    return data
      .filter((repo) => !repo.fork) // tira os forks
      .sort(
        (a, b) =>
          featuredRank(a) - featuredRank(b) || // destaques primeiro
          Date.parse(b.updated_at) - Date.parse(a.updated_at), // depois os mais recentes
      );
  },
};
