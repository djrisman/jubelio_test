const db = require('./queries')
const Hapi = require('hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(require('inert'));

    server.route({
      method:'GET',
      path:'/',
      config: {
          cors: {
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
      },
      handler: function(request, h){
          console.log({"code":200, "message":"Bismillah, NodeJS and HapiJS API"});
          return {"code":200, "message":"Bismillah, NodeJS and HapiJS API"};
          //return h.file('upload.html');
      }
    });

    server.route({
      method:'GET',
      path:'/productlist',
      config: {
          cors: {
              origin: ['*']
          }
      },
      handler: function(request, h){
        return db.getProducts();
      }
    });

    server.route({
      method:'GET',
      path:'/productdetail/{id}',
      config: {
          cors: {
              origin: ['*']
          }
      },
      handler: function(request, h){
        const id = parseInt(request.params.id)
        return db.getProductById(id);
      }
    });

    server.route({
      method:'POST',
      path:'/add_product',
        config: {
          cors: {
              origin: ['*']
          }
      },
      handler: function(request, h){
        const {product_name, description, price, image, sku} = request.payload 
        //request.payload.image.pipe(fs.createWriteStream(__dirname + "/uploads/" + request.payload.image.hapi.filename)); 
        return db.addProducts(product_name, description, price, image, sku);
        /*console.log(request.payload);
        return request.payload;*/
      }
    });

    server.route({
      method:'PUT',
      path:'/update_product/{id}',
      config: {
          cors: {
              origin: ['*']
          }
      },
      handler: function(request, h){
        const id = parseInt(request.params.id)
        const {product_name, description, price, image, sku} = request.payload
        return db.updateProduct(product_name, description, price, image, sku, id);
      }
    });

    server.route({
      method:'DELETE',
      path:'/delete_product/{id}',
      config: {
          cors: {
              origin: ['*']
          }
      },
      handler: function(request, h){
        const id = parseInt(request.params.id)
        return db.deleteProduct(id);
      }
    });

    server.route({
        method: '*',
        path: '/{any*}',
        config: {
          cors: {
              origin: ['*']
          }
        },
        handler: function (request, h) {
            return {'code':404, 'message':'Not Found!'};
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
