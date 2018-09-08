const router = require('express')();

router.set('port', process.env.PORT || 5000);
router.set('view engine', 'ejs');
router.use(bodyParser.json());

router.listen(router.get('port'), () => console.log('Friendly Wagers Bot is running on port', router.get('port')));

module.exports = router;