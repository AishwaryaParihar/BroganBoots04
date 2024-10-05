const backendDomin = 'http://localhost:8081'


const SummaryApi = {
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : "get"
      },
}


export default SummaryApi;