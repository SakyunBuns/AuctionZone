export class UserDAO {
  static does_user_exist_username = (username) => {
    if (username != null) {
      fetch('http://127.0.0.1:3000/users_name/' + username, {
        method: 'GET',
      })
      .then(response => response.json())
        .then(data => {
          console.log(data); // log the data returned by the API
          if (data != []) {
            return true;
          }
          else {
            return false;
          }
        })
        .catch(error => {
          console.error(error); // log any errors that occur during the request
        });
    }
  }

  static does_user_exist_email = (email) => {
    if (email != null) {
      fetch('http://127.0.0.1:3000/user_email/' + email, {
        method: 'GET',
      })
      .then(response => response.json())
        .then(data => {
          console.log(data); // log the data returned by the API
          if (data != []) {
            return true;
          }
          else {
            return false;
          }
        })
        .catch(error => {
          console.error(error); // log any errors that occur during the request
        });
    }
  } 
  
}
