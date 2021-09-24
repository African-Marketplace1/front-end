async function findProducts() {
  console.log(props);
  const results = await geocodeByAddress(props.searchLocation);
  const baseCoordinates = await getLatLng(results[0]);

  props.users.forEach(async (user) => {
    if (user.location) {
      const result = await geocodeByAddress(user.location);
      const userCoordinates = await getLatLng(result[0]);
      const distance_m = getDistance(baseCoordinates, userCoordinates);
      const distance_mi = distance_m * 0.000621371;
      console.log(props.sortingDistance);
      // console.log(distance_mi);
      if (distance_mi < props.sortingDistance) {
        user.products.forEach((prod) => {
          prod.distance = distance_mi;
          prod.seller = user.username;
        });
        sortedProducts.push(...user.products);
        console.log(sortedProducts);
      }
    }
  });
}

export default findProducts;
