// Ждем полной загрузки DOM-дерева перед выполнением скрипта
document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем все кнопки вкладок и блоки контента
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Назначаем обработчик события клика для каждой кнопки
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Убираем класс 'active' у всех кнопок и блоков контента
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Добавляем класс 'active' только что нажатой кнопке
            button.classList.add('active');

            // 3. Получаем ID целевого контента из атрибута data-target
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // 4. Если контент найден, показываем его, добавляя класс 'active'
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
