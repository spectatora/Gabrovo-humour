const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var serviceAccount = require("./permissions.json");
const { check, body, validationResult } = require('express-validator');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gabrovo-humour.firebaseio.com"
});

const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));
app.use(express.json()) // for parsing application/json

// create joke
app.post('/api/jokes', [
    body('title').isLength({ min: 5 }),
    body('content').custom((val, {req}) => {
        if (!Array.isArray(val)) {
            throw new Error('Content should consist of array of the jokes');
        }
        if (val.length < 1) {
            throw new Error("Content should should not be empty");
        }
        return true;
    })
], (req, res) => {
    (async () => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            await db.collection('jokes').get().then(snapshot => {
                let currentCount = snapshot.size + 1;
                let data = req.body;
                data.created = Date.now();
                db.collection('jokes').doc('/' + 'ninja' + currentCount + '/')
                    .create(req.body);
            });
            return res.status(200).send();
        } catch (error) {
            console.log(req.body);
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


// read joeks
app.get('/api/jokes', [
    check('itemsPerPage').trim().isNumeric().isInt({min:1, max:30}),
    check('orderBy').trim().isIn(['created', 'random']),
    check('orderByDirection').optional().isIn(['asc', 'desc']).custom((val, {req}) => {
        if (val && req.query.orderBy == 'random') {
            throw new Error("OrderByDirection is not supported on random order");
        }
        return true;
    }),
    check('currentPage').optional().isInt()
], (req, res) => {
    (async () => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            let itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
            let currentPage = req.query.currentPage || 1;
            let orderBy = req.query.orderBy || "created";
            let orderByDirection = req.query.orderByDirection || "asc";
            let response = {};
            let totalItems = 0;
            let query;
            await db.collection('jokes').get().then(snapshot => {
                totalItems = snapshot.size;
                response.totalItems = snapshot.size;
                response.totalPages = Math.round(response.totalItems / itemsPerPage);
                response.currentPage = currentPage;
            });

            if (currentPage !== 1) {
                let currentItem = (currentPage - 1) * itemsPerPage + 1;
                if (orderBy == "created" && orderByDirection == "desc") {
                    currentItem = totalItems - currentItem + 1;
                }
                const docRef = db.collection('jokes').doc('/' + currentItem);
                const snapshot = await docRef.get();
                query = db.collection('jokes').orderBy(orderBy, orderByDirection).startAt(snapshot).limit(itemsPerPage);
            } else if (orderBy !== "created") {
                // we need to apply startAt
                let currentItem = Math.round(Math.random() * (totalItems - itemsPerPage));
                const docRef = db.collection('jokes').doc('/' + currentItem);
                const snapshot = await docRef.get();
                query = db.collection('jokes').startAt(snapshot).limit(itemsPerPage);
            } else {
                query = db.collection('jokes').orderBy(orderBy, orderByDirection).limit(itemsPerPage);
            }

            response.items = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        content: doc.data().content,
                        created: doc.data().created,
                        title: doc.data().title,
                    };
                    response.items.push(selectedItem);
                }
            });
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});
exports.app = functions.https.onRequest(app);