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
      searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
      },
      addtoCart : {
        url : `${backendDomin}/api/addtoCart`,
        method : 'get'},
      productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : 'post'
      },
      categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
      },
      addToCartProduct : {
        url : `${backendDomin}/api/addtoCart`,
        method : 'post'
      },
}


export default SummaryApi;