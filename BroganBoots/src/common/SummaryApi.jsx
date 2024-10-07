const backendDomin = 'http://localhost:6060'


const SummaryApi = {
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : "get"
      },
      createContact : {
        url : `${backendDomin}/api/createContact`,
        method : "post"
      },
      addToCartProduct : {
        url : `${backendDomin}/api/addtoCart`,
        method : "post"
      },
      current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
      },
      addToCartProductCount : {
        url : `${backendDomin}/api/countAddToCartProduct`,
        method : "get"
      },
      categoryWiseProduct : {
        url : `${backendDomin}/api/category-product`,
        method : 'post'
      },
      productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post'
      },
      categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
      },
}


export default SummaryApi;