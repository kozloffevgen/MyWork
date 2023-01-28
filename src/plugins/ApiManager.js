import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: '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',
});

const defaultOptions = {
  storage: 'kozloffevgen',
  storageName: 'db',
  fileName: 'index',
  content: [],
}

export default class ApiManager {
  constructor(options) {
    this.options = {
      ...defaultOptions,
      ...options,
    };


    this.urlTemplate = `https://api.github.com/repos/${this.options.storage}/${this.options.storageName}/contents/${this.options.fileName}.json`;
  }

  async get() {
    try {
      const result = 
        await octokit.request(`GET ${this.urlTemplate}`);

      return result.data;
    } catch(error) {
      console.log(error);
    }
  }

  async put() {
    try {
      const result = 
        await octokit.request(`PUT ${this.urlTemplate}`, {
          message: 'Update',
          content: btoa(JSON.stringify(this.options.content)),
          sha: this.options.sha
        });
      
      return result.data;
    } catch(error) {
      console.log(error);
    }
  }
}