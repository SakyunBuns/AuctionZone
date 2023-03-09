var pg = require('pg');

function connectDB(){
    var connectionString = "postgres://userName:password@serverName/ip:port/nameOfDatabase";
    var pgClient = new pg.Client(connectionString);
    pgClient.connect();
}



// https://www.tothenew.com/blog/connect-to-postgresql-using-javascript/ ressource