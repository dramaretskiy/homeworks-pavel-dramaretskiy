import { AuthService } from "./../services/auth.service";
import { NewsService } from "./../services/news.service";

export class NewsComponent {
  constructor() {
    this._authService = new AuthService();
    this._newsService = new NewsService();

    this.beforeRender = this.beforeRender.bind(this);
    this.render = this.render.bind(this);

    this._authUserToken = this._authService.token;
    this._news = {};
  }

  async beforeRender() {
    this._news = await this._newsService.getNews(this._authUserToken);
  }

  render() {
    let template = "";

    this._news.news.forEach(element => {
      template += `
      <div class="card" style="width: 80%; margin: 30px auto;">
        <img src="${element.pictures[0].url}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${element.owner.full_name}</p>
        </div>
      </div>
      `;
    });

    return `${template}`;
  }
}
