/**
 * @Desc：   数据库基本配置
 * @Author： little.luo
 * @Date：   2018-08-24
 */

const mysql = require('mysql');
const env = require('../config-dev').env;
const config = require('../config/base').dbInfo[env];

// 数据库连接配置
const dbConfig = {
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPWD,
    port: config.dbPort,
    database: config.dbName
};
// 连接池
const pool = mysql.createPool(dbConfig);
// 执行方法
const dac = {
    // 单次连接
    do: function(sql){
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection(dbConfig);
            connection.connect();
            connection.query(sql, function(err, rows) {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
            connection.end();
        });
    },
    // 单次连接(有参)
    dop: function(sql, para){
        return new Promise((resolve, reject) => {
            let connection = mysql.createConnection(dbConfig);
            connection.connect();
            connection.query(sql, para, function(err, rows) {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            });
            connection.end();
        });
    },
    // 连接池
    query: function(sql, para) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err)
                }
                if (para) {
                    connection.query(sql, para, (err, rows) => {
                        connection.release();
                        if (err) {
                            return reject(err);
                        }
                        return resolve(rows);
                    });
                } else {
                    connection.query(sql, (err, rows) => {
                        connection.release();
                        if (err) {
                            return reject(err);
                        }
                        return resolve(rows);
                    });
                }
            });
        });
    },
    // 参数编码
    escape: function(para) {
        return mysql.escape(para);
    }
};
module.exports = dac;
