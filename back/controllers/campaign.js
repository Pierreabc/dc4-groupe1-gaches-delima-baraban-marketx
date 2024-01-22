
const Campaign = require('../models/campaign');

exports.getAllCampaigns = (req, res, next) => {
  Campaign.find().then(
    (Campaigns) => {
      const mappedCampaigns = products.map((campaign) => {
        return campaign;
      });
      res.status(200).json(mappedCampaigns);
    }
  ).catch(
    () => {
      res.status(500).send(new Error('Database error!'));
    }
  );
};

exports.getOneCampaign = (req, res, next) => {
  Campaign.findById(req.params.id).then(
    (campaign) => {
      if (!campaign) {
        return res.status(404).send(new Error('Campagne non trouvée'));
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
//   let queries = [];
//   for (let campaignId of req.body.campaigns) {
//     const queryPromise = new Promise((resolve, reject) => {
//       Campaign.findById(campaignId).then(
//         (campaign) => {
//           if (!campaign) {
//             reject('Product not found: ' + campaignId);
//           }

//         }
//       ).catch(
//         () => {
//           reject('Database error!');
//         }
//       )
//     });
//     queries.push(queryPromise);
//   }
//   Promise.all(queries).then(
//     (products) => {
//       const orderId = uuid();
//       return res.status(201).json({
//         contact: req.body.contact,
//         products: products,
//         orderId: orderId
//       })
//     }
//   ).catch(
//     (error) => {
//       return res.status(500).json(new Error(error));
//     }
//   );
// ;
