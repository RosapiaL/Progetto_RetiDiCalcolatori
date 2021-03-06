/**
 * @api {get} /api/getreview/bytitle/:title Richiesta lista recensioni di un libro tramite titolo
 * @apiName Getreviewbytitle
 * @apiGroup Titolo
 *
 * @apiParam title titolo del libro di cui si vuole avere la lista delle recensioni
 * @apiParamExample {text} Esempio-Richiesta:
 *      https://localhost/api/getreiew/bytitle/harry+potter
 * @apiSuccess {String} title titolo del libro trovato
 * @apiSuccess {String} picture copertina del libro trovato
 * @apiSuccess {String} esadecimal identificativo del libro del database (controllo) 
 * @apiSuccess {Number} number_of_reviews numero di recensioni totale
 * @apiSuccess {Array} reviews contenuto delle recensioni con star,recensione ed email
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "title": "Come stai?",
 *       "picture": "http://books.google.com/books/content?id=t_i_yQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
 *       "esadecimal": "l745f695f795145414341414a20",
 *       "number_of_reviews": 3,
 *       "reviews": [
 *           {
 *               "id": "1",
 *               "key": "1",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "3",
 *                   "ciao"
 *               ]
 *           },
 *           {
 *               "id": "2",
 *               "key": "2",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "3",
 *                   "Questo libro mi piace particolarmente"
 *               ]
 *           },
 *           {
 *               "id": "3",
 *               "key": "3",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "5",
 *                   "questo libro è cosi bello che lo vorrei leggere ogni singolo giorno della mia vita. troppo troppo interessante!!!!"
 *               ]
 *           }
 *        ]
 *       }
 *
 * @apiError attribute_not_declared title not declared
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {'error':"attribute title not declared"}
 *
 * @apiError database_offline database of this book not exist
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *      {
 *          "title": "Harry Potter e la Pietra Filosofale",
 *          "picture": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
 *          "esadecimal": "l39434a575462642d52596f4320",
 *          "number_of_reviews": 0,
 *          "reason": "no_reviews_for_this_book"
 *      }
 * 
 * @apiError No_books_for_the_title_searched If you search a book that is not found in google books database
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {'error':"No books with this title"}
 * 
 * 
 * 
 * 
 */
/**
 * @api {get} /api/getreview/byid/:id Richiesta lista recensioni di un libro tramite id_libro di google books
 * @apiName Getreviewbyid
 * @apiGroup Id
 *
 * @apiParam id identificativo del libro di cui si vuole avere la lista delle recensioni
 * @apiParamExample {text} Esempio-Richiesta:
 *      https://localhost/api/getreiew/byid/t_i_yQEACAAJ
 * @apiSuccess {String} title titolo del libro trovato
 * @apiSuccess {String} picture copertina del libro trovato
 * @apiSuccess {String} esadecimal identificativo del libro del database (controllo) 
 * @apiSuccess {Number} number_of_reviews numero di recensioni totale
 * @apiSuccess {Array} reviews contenuto delle recensioni con star,recensione ed email
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "title": "Come stai?",
 *       "picture": "http://books.google.com/books/content?id=t_i_yQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
 *       "esadecimal": "l745f695f795145414341414a20",
 *       "number_of_reviews": 3,
 *       "reviews": [
 *           {
 *               "id": "1",
 *               "key": "1",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "3",
 *                   "ciao"
 *               ]
 *           },
 *           {
 *               "id": "2",
 *               "key": "2",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "3",
 *                   "Questo libro mi piace particolarmente"
 *               ]
 *           },
 *           {
 *               "id": "3",
 *               "key": "3",
 *               "value": [
 *                   "example58@gmail.com",
 *                   "5",
 *                   "questo libro è cosi bello che lo vorrei leggere ogni singolo giorno della mia vita. troppo troppo interessante!!!!"
 *               ]
 *           }
 *        ]
 *       }
 *
 * @apiError attribute_not_declared title not declared
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {'error':"attribute id not declared"}
 * 
* @apiError database_offline database of this book not exist
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *      {
 *          "title": "Harry Potter e la Pietra Filosofale",
 *          "picture": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73rVE-11HuoHjzZ-Hl74nMpEy-sEtRNXf1E2tXPN-QXVWM26WvsP5lX41ioBOXkaAsJ9fOqu5yS8W4_1AvlbB_tOJJ1lGOTEqJj8r6EX52Gerc3tDCpDOvS4gmaFF4jHmr1fcrB&source=gbs_api",
 *          "esadecimal": "l39434a575462642d52596f4320",
 *          "error": "no_reviews_for_this_book"
 *      }
 * 
 *@apiError No_book_found_for_the_id_in_the_url  if you are searching for a book whit id that does not exists in the google book db
 *
 *@apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {'error':"No book for this id in google books"}
 * 
 */