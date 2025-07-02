import axios from 'axios'
import { GitHubRepo, GitHubUser, RepoFilterParams } from '../types/GitHub';

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'GustavoR1991'



export const githubApi = {
  async getUser(): Promise<GitHubUser> {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    return response.data
  },

  async getRepositories(params?: RepoFilterParams): Promise<GitHubRepo[]> {
    const queryParams = new URLSearchParams({
      sort: params?.sort || 'updated',
      direction: params?.direction || 'desc',
      per_page: String(params?.per_page || 50),
      page: String(params?.page || 1)
    });

    const responde = await axios.get(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?${queryParams.toString()}`
    );
    return responde.data;
  },

  async getFeaturedRepositories(): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories({
      sort: 'updated',
      per_page: 50,
    })
    return repos
      .filter(repo => !repo.name.includes('fork'))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 11);
  }


}