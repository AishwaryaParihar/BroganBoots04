const backendDomin = 'http://localhost:5055'


const SummaryApi = {
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : "get"
      },
      categoryProduct : {
        url : `${backendDomin}/api/category`,
        method : "get"
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
}


export default SummaryApi;