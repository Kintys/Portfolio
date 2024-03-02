export function getNewRouterList(routeItems, menuItemsRoutes = []) {
    for (const routeItem of routeItems) {
        if (routeItem.children)
            getNewRouterList(routeItem.children, menuItemsRoutes);
        else {
            menuItemsRoutes.push({
                path: routeItem.path,
            });
        }
    }
    return menuItemsRoutes;
}
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve({
//               el: `#${to.name}`,
//               top: -150,
//               behavior: "smooth",
//           });
//       }, 500);
//   });
