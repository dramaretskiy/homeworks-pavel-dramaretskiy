import "../style.less";

import { sum } from "lodash";
import "jquery";

import { NotificationUI } from "./view/NotificationUI";
import { LoaderUI } from "./view/loaderUI";
import { NewsService } from "./services/news.service";
import { NewsUI } from "./view/newsUi.service";
import { countrySelect, categorySelect } from "./view/uiElements.config";
import { searchInput } from "./view/uiElements.config";

const newsService = new NewsService();
const newsUI = new NewsUI();
const loaderUI = new LoaderUI(".news-wrap .row");
const notificationUI = new NotificationUI(".news-wrap .row");

// Handlers for events -- пишем функции-обработчики, которые нужны для addEventListener
function onSelectChange() {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.log("Choose the category and country");

    loaderUI.setLoader();
    newsService.getNewsByCountryAndCatigory(
        ({ articles }) => {
            loaderUI.removeLoader();
            if (articles.length) {
                newsUI.addNewsToView(articles);
            } else {
                notificationUI.showNotification("Not results");
            }
        },
        country,
        category
    );
}

function onSearchChange() {
    const search = searchInput.value;

    if (search.length <= 2) return console.log("Введите больше трёх букв)");
    loaderUI.setLoader();
    newsService.getNewsBySearchQuery(({ articles }) => {
        loaderUI.removeLoader();
        newsUI.addNewsToView(articles);

        if (articles.length === 0) {
            return notificationUI.setNotification();
        }
    }, search);
}

// Event listeners
countrySelect.addEventListener("change", onSelectChange);
categorySelect.addEventListener("change", onSelectChange);
searchInput.addEventListener("keyup", onSearchChange);

console.log(sum([4, 2, 8, 6]));
