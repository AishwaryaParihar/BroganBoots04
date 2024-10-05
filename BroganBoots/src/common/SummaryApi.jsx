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
}


export default SummaryApi;