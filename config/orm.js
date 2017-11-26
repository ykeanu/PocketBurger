// ==============================================================================
// IMPORTS
// ==============================================================================

const connection = require('./connection.js');

// ==============================================================================
// HELPER FUNCTIONS
// ==============================================================================

// Converts values into SQL queries
function translateToSQL(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Pushes question marks into queries
function questionsToSQL(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// ==============================================================================
// ORM OBJECT
// ==============================================================================

let orm = {
    selectAll: function (tableValue, cb) {
        let queryString = "SELECT * FROM " + tableValue + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, values, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionsToSQL(values.length);
        queryString += ") ";

        connection.query(queryString, values, function (error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColValues, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += translateToSQL(objColValues);
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            cb(result);
        });
    }
};

// ==============================================================================
// EXPORT -> ../models/burger.js
// ==============================================================================

module.exports = orm;