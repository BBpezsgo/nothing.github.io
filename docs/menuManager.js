/** @param {string} menuId */
function ShowMenu(menuId) {
    const allMenu = document.getElementsByClassName('menu')

    for (let i = 0; i < allMenu.length; i++) {
        const menu = allMenu[i];
        
        if (menu.id == menuId) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }
}