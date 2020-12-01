const apiKey = 'IVHb3CsFEWNjfYaOQelbnLbum2n-6dklt3418N3iwof2Z_PNqAjkibPhCOdyA3Hjn0F9oa2RwvM0oAabW52J6GORCdplowhHQxGJb2oO66Aeo8vIG6tY58IRcWrGX3Yx'

export const Yelp = {
    search: function (term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:
            {Authorization: `Bearer ${apiKey}`}
        }).then(
            response => response.json()
        ).then(
            jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(
                        business => { return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }; }
                    )
                }
            }
        )
    },
}