const apiKey = 'XAq5f6j0yuuVRZJa2n-23xBxrWtNgbsgxmKG21g9eMBOnqGiBJwT3HzrncBwU1g3gqnjcWXApnHla4pGrE-94ODYwcIok5DR6yC6rCrUUv9y3uR8G16e0ucQqW8eYXYx';

const Yelp = {
  search(term, location, sortBy) {
    console.log(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
}

export default Yelp;
