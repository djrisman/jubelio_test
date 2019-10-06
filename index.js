const db = require('./queries')
const Hapi = require('hapi');
const axios = require('axios');
var parser = require('fast-xml-parser');
var he = require('he');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(require('inert'));

    var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
    };
 

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
      path:'/tesapi',
      config: {
          cors: {
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
      },
      handler: function(request, h){

        return axios.get('http://api.elevenia.co.id/rest/prodservices/product/listing', {
                   headers: {
                      'Content-type' : 'application/xml',
                      'Accept-Charset' : 'utf-8',
                      openapikey: '721407f393e84a28593374cc2b347a98'
                   }
                  })
                  .then((response) => {
                    console.log(response.data, "dattt");
                    var tObj = parser.getTraversalObj(response.data,options);
                    var jsonObj = parser.convertToJson(tObj,options);
                                    
                    return jsonObj.Products.product;

                  }).catch((e) => {
                    //console.error(e.stack);
                    return e;
                  });

        //return 'adakah acara?';
          
      }
    });

    server.route({
      method:'GET',
      path:'/prod_detail/{id_prod}',
      config: {
          cors: {
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
      },
      handler: function(request, h){
        const id = parseInt(request.params.id_prod);
        
        return axios.get(`http://api.elevenia.co.id/rest/prodservices/product/details/${id}`, {
                   headers: {
                      'Content-type' : 'application/xml',
                      'Accept-Charset' : 'utf-8',
                      openapikey: '721407f393e84a28593374cc2b347a98'
                   }
                  })
                  .then((response) => {
                    //console.log(response.data, "det");
                    var tObj = parser.getTraversalObj(response.data,options);
                    var jsonObj = parser.convertToJson(tObj,options);
                    
                    return jsonObj.Product;

                  }).catch((e) => {
                    //console.error(e.stack);
                    return e;
                  });
          
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
