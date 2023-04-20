export class UserDAO {
  static does_user_exist_username = (username, callback) => {
    if (username != null && callback != null) {
      console.log("username: " + username);
      fetch('http://127.0.0.1:3000/user_name/' + username, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          if (data != null) {
            callback(data)
          }
        })
        .catch(error => {
          console.error(error); // log any errors that occur during the request
        });
    }
  }

  static does_user_exist_email = (email, callback) => {
    if (email != null && callback != null) {
      console.log("email: " + email);
      fetch('http://127.0.0.1:3000/user_email/' + email, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          if (data != null) {
            callback(data)
          }
        })
        .catch(error => {
          console.error(error); // log any errors that occur during the request
        });
    }
  }
}
