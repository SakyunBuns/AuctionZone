export class UserDAO {
  static does_user_exist = (username) => {
    if (username != null) {
      fetch('http://127.0.0.1:3000/users_name/' + username, {
        method: 'GET',
      })
      .then(response => response.json())
        .then(data => {
          console.log(data); // log the data returned by the API
          if (data != []) {
            console.log('allo');
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
