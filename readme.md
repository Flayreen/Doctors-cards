## Collaborators
`Олег Вакарчук` — картки, дизайн.

`Олександра Усик` — header, login, localStorage.

`Ед Білокопитов` — filters, структура проекту.


## Commands
`npm install` — один раз перед початком наробити собі локально Node модулів.

`npm run dev` — запустити процес роботи над проектом (те саме, шо `gulp dev`).

`npm run build` — збудувати все перед комітом (те саме, шо `gulp build`).

`npm run publish` — опублікувати свіже [демо на Github Pages](https://whitehoof.github.io/fe23-step-cards/) (є сенс робити це _після_ `npm run build` та `git push`). 

<blockquote>
Необовʼязкові знання:

Демо генерується з окремої гілки `gh-pages`, яку ми взагалі не чіпаємо, бо працюємо з гілкою main. Команда `npm run publish` заганяє свіжий вміст папки `dist` до гілки `gh-pages`, оновлюючи таким чином нашу демо вебку. 

Оновлення Github Pages чомусь займає від 1 до 5 хвилин після виконання команди, тому не хвилюймося, якщо демка довго не оновлюється.
</blockquote>

## Important selectors
`.mainblock .container` —  контейнер для карток.
