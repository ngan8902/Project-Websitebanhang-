'use strict'

const { con } = require('../model/index')

class CustomerModel {

    static create = async ({ email, password, fullname }) => {
        return new Promise((resolve, reject) => {
            const test = con.query('INSERT INTO customer SET ?', {
                email, password, fullname
            }, function (error, results, fields) {
                if(error) reject(error)

                resolve(results)
            });
        })
    }

    static getCustomerByEmail = async (email) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM customer WHERE email = ?', [email], function (error, results, fields) {
                if (error) {
                    reject(reject)
                }
        
                const foundShop = results[0] ? results[0] : null
                resolve(foundShop)
            });
        })
    }

    static initTableToDB = async () => {
        var sql = 'CREATE TABLE customer (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, fullname VARCHAR(255) NOT NULL, token VARCHAR(255))';
        con.query(sql, function (err, result){
            if(err) throw err;
            console.log("Table Customer created!")
        });
    }

}

module.exports = CustomerModel