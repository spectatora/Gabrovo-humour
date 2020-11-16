const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
var serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gabrovo-humour.firebaseio.com"
});

const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));
app.use(express.json()) // for parsing application/json

// create joke
app.post('/api/jokes', (req, res) => {
    (async () => {
        try {
            await db.collection('jokes').get().then(snapshot => {
                let currentCount = snapshot.size + 1;
                let data = req.body;
                data.created = Date.now();
                db.collection('jokes').doc('/' + 'ninja' + '/')
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


// read all
app.get('/api/jokes', (req, res) => {
    (async () => {
        try {
            let itemsPerPage = 9;
            let currentPage = 1;
            let orderBy = "created";
            let orderByDirection = "asc";
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
                const docRef = db.collection('jokes').doc('/' + currentItem);
                const snapshot = await docRef.get();
                query = db.collection('jokes').orderBy(orderBy, orderByDirection).startAt(snapshot).limit(itemsPerPage);
            } else if (orderBy !== "created") {
                // we need to apply startAt
                let currentItem = Math.round(Math.random() * (totalItems - itemsPerPage));
                const docRef = db.collection('jokes').doc('/' + currentItem);
                const snapshot = await docRef.get();
                query = db.collection('jokes').orderByKey().startAt(snapshot).limit(itemsPerPage);
            } else {
                query = db.collection('jokes').orderBy(orderBy, orderByDirection).limit(itemsPerPage);
            }

            response.items = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        item: doc.data().item
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