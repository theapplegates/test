let storage;

const strip = (str) => str.trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o');

const checkAssignmentsStatus = (arr, supposedLength = 0) => {
    let count = 0;
    arr.forEach((element) => {
        if (element.completed === true) count += 1;
    });
    return supposedLength === count && count > 0 ? true : false;
};

const createProgress = (segments = 0, total = 0) => {
    const progress = document.createElement('div');
    progress.classList.add('progress');
    const bar = document.createElement('div');
    bar.classList.add('progress-bar');
    // bar.classList.add('progress-bar-striped');
    bar.classList.add('bg-theme');
    bar.setAttribute('style', `width: ${segments * total}%`);
    progress.appendChild(bar);
    return progress;
};

window.addEventListener('load', () => {
    const subject = strip(document.title);

    storage = JSON.parse(window.localStorage.getItem(subject));

    const sections = document.querySelectorAll('.accordion-item');

    let themes = [];
    
    sections.forEach((element) => {
        let h2 = element.querySelector('h2');
        if (h2) {
            let temp = {
                element: element,
                areas: 0,
                completed: 0
            };
            themes.push(temp);
        }

        let h3 = element.querySelector('h3');
        let area = h3 ? strip(h3.textContent) : false;
        if (area) {
            const container = document.querySelector(`#${area}`);
            const parts = container.querySelectorAll('li');

            themes[themes.length -1].areas = themes[themes.length -1].areas + parts.length;

            let total = 0;
            if (storage && storage[area]) {
                for (part in storage[area]) {
                    let basicCheck = checkAssignmentsStatus(
                        storage[area][part].basic,
                        storage[area][part].assignments?.basic
                    );
                    let extraCheck = checkAssignmentsStatus(
                        storage[area][part].extra,
                        storage[area][part].assignments?.extra
                    );
                    parts.forEach((element) => {
                        if (
                            strip(element.textContent) ===
                            part
                        ) {
                            if (basicCheck) {
                                total = total + 1;
                                const el = document.createElement('span');
                                el.classList.add('stars');
                                el.textContent = '⭐';
                                element.appendChild(el);
                            }
                            if (extraCheck) {
                                const el = document.createElement('span');
                                el.classList.add('stars');
                                el.textContent = '⭐⭐';
                                element.appendChild(el);
                            }
                        }
                    });
                }
            }
            themes[themes.length -1].completed = themes[themes.length -1].completed + total;

            element.insertAdjacentElement(
                'beforeend',
                createProgress(100 / parts.length, total)
            );
        }
    });

    themes.forEach(theme => {
        theme.element.insertAdjacentElement('beforeend', createProgress(100 / theme.areas, theme.completed));
    });
});
