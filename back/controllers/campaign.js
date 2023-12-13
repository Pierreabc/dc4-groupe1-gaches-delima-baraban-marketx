const uuid = require('uuid/v1');
const Campaign = require('../models/campaign');

exports.getAllProducts = (req, res, next) => {
  Campaign.find().then(
    (campaign) => {
      const mappedCampaigns = products.map((campaign) => {
        return product;
      });
      res.status(200).json(mappedCampaigns);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneProduct = (req, res, next) => {
  Product.findById(req.params.id).then(
    (product) => {
      if (!product) {
        return res.status(404).send(new Error('Product not found!'));
      }
      res.status(200).json(product);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  )
};

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */
  let queries = [];
  for (let productId of req.body.products) {
    const queryPromise = new Promise((resolve, reject) => {
      Product.findById(productId).then(
        (product) => {
          if (!product) {
            reject('Product not found: ' + productId);
          }

        }
      ).catch(
        () => {
          reject('Database error!');
        }
      )
    });
    queries.push(queryPromise);
  }
  Promise.all(queries).then(
    (products) => {
      const orderId = uuid();
      return res.status(201).json({
        contact: req.body.contact,
        products: products,
        orderId: orderId
      })
    }
  ).catch(
    (error) => {
      return res.status(500).json(new Error(error));
    }
  );
;
