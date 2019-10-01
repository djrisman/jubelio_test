const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dj_product',
  password: 'bismillah',
  port: 5432,
})

const getProducts = () => 
      pool.query('SELECT * FROM product ORDER BY id ASC')
          .then(res => { 
            let json = { "data" : res.rows, "code" :200, "message": "Success get data"};
            //console.log(json);
            return json;
          })
          .catch(e => {
            //console.error(e.stack);
            return e.stack;
          });

const getProductById = (id) => 
    pool.query('SELECT * FROM product WHERE id = $1 ORDER BY id ASC', [id])
        .then(res => { 
          let json = { "data" : res.rows, "code" :200, "message": "Success get data"};
          //console.log(json);
          return json;
        })
        .catch(e => {
          //console.error(e.stack);
          return e.stack;
        });

const addProducts = (product_name, description, price, image, sku) => 
  pool.query('INSERT INTO product (product_name, description, price, image, sku ) VALUES ($1, $2, $3, $4, $5)', [product_name, description, price, image, sku])
  .then(res => { 
    //console.log({"code":201, "message":"Success add product"});
    return {"code":201, "message":"Success add product"};
  })
  .catch(e => {
    //console.error(e.stack);
    return e.stack;
  });

const updateProduct = (product_name, description, price, image, sku, id) => 
  pool.query('UPDATE product SET product_name = $1, description = $2, price = $3, image = $4, sku = $5 WHERE id = $6', [product_name, description, price, image, sku, id])
  .then(res => { 
    //console.log({"code":201, "message":"Success update product"});
    return {"code":201, "message":"Success update product"};
  })
  .catch(e => {
    //console.error(e.stack);
    return e.stack;
  });

const deleteProduct = (id) =>
  pool.query('DELETE FROM product WHERE id = $1',[id])
        .then(res => { 
           //console.log({"code":200, "message":"Success delete product"});
           return {"code":200, "message":"Success delete product"};
        })
        .catch(e => {
          //console.error(e.stack);
          return e.stack;
        });

module.exports = {
  getProducts,
  getProductById,
  addProducts,
  updateProduct,
  deleteProduct
}