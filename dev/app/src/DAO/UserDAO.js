// Nom du fichier: UserDAO.js
// Contexte de ce fichier: Ce fichier fait le lien entre le front-end et le back-end pour toutes les
//                         requêtes concernant les usagers
// Auteur : Nathaelle Fournier
// Autre auteurs: Quoc Huan Tran
// Date : Hiver 2023


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

  static create_user = ({ username, name, lastname, email, password, image, dob }, callback) => {
    fetch('http://127.0.0.1:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "username": username, "name": name, "lastname": lastname, "email": email, "password": password, "image": image, "dob": dob })
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
