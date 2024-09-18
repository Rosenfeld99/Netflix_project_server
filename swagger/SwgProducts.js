/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Fetch products with optional filters, sorting, and pagination.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: perPage
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Number of products per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: _id
 *         description: Field to sort by
 *       - in: query
 *         name: reverse
 *         schema:
 *           type: string
 *           enum: [yes, no]
 *           default: no
 *         description: Sort order (yes for ascending, no for descending)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by product category
 *       - in: query
 *         name: s
 *         schema:
 *           type: string
 *         description: Search term to filter products by name or info
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *         description: Filter products by user ID
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   info:
 *                     type: string
 *                   category_url:
 *                     type: string
 *                   user_id:
 *                     type: string
 *       400:
 *         description: Bad Request
 *       502:
 *         description: Bad Gateway Error
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: A single product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 info:
 *                   type: string
 *                 category_url:
 *                   type: string
 *                 user_id:
 *                   type: string
 *       404:
 *         description: Product not found
 *       502:
 *         description: Bad Gateway Error
 */


/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               info:
 *                 type: string
 *               category_url:
 *                 type: string
 *               img_url:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad Request
 *       502:
 *         description: Bad Gateway Error
 */


/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 *       502:
 *         description: Bad Gateway Error
 */
