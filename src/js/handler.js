window.addEventListener('load', function () {
    let slider = document.getElementsByClassName('favorites__devices_slider').item(0),
        leftArrowsButton = document.getElementsByClassName('favorites_arrow_left').item(0),
        rightArrowsButton = document.getElementsByClassName('favorites_arrow_right').item(0),
        widthRight = 0;

    // TODO: Добавить подсчет реальных страниц
    let scenarios_pages = 3;
    let scenarios_pageIndex = 1;

    if (scenarios_pageIndex >= scenarios_pages) {
        rightArrowsButton.disabled = true;
        rightArrowsButton.classList.add('favorites__arrowButton_nohover');
    }

    rightArrowsButton.onclick = function () {
        scenarios_pageIndex += 1;
        widthRight -= 206;
        slider.style.left = widthRight + 'px';

        if (scenarios_pageIndex === scenarios_pages) {
            rightArrowsButton.disabled = true;
            rightArrowsButton.classList.add('favorites__arrowButton_nohover');
            leftArrowsButton.disabled = false;
            leftArrowsButton.classList.remove('favorites__arrowButton_nohover');
        }
    };

    leftArrowsButton.onclick = function () {
        scenarios_pageIndex -= 1;
        widthRight += 206;
        slider.style.left = widthRight + 'px';

        if (scenarios_pageIndex === 1) {
            rightArrowsButton.disabled = false;
            rightArrowsButton.classList.remove('favorites__arrowButton_nohover');
            leftArrowsButton.disabled = true;
            leftArrowsButton.classList.add('favorites__arrowButton_nohover');
        }
    };
})