// import express
import express from "express";
// import controllers
import { getTraffics,
    createTraffic,
    getTrafficByName } from "../controllers/trafficController.js";
 
    // express router
const router = express.Router();
 
// Route get All Traffic
router.get('/getTraffics', getTraffics);
// Route get single Traffic
router.get('/getTrafficByName', getTrafficByName);
// Route create Traffic
router.post('/createTraffic', createTraffic);

router.get('/', (req, res) => {
    res.send('Welcome Traffic')
  })
 
// export router
export default router;