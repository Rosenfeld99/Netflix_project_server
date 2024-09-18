/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to user management.
 */

/**
 * @swagger
 * /user/info:
 *   get:
 *     summary: Get user information
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: User data without sensitive fields
 *       502:
 *         description: Server error
 *     security:
 *       - bearerAuth: []
 */
exports.userCtrl = {
    userInfo: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens:
     *   get:
     *     summary: Get all screens of the user
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: List of user screens
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *       502:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    getScreen: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{id}:
     *   get:
     *     summary: Get a specific screen by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen to retrieve
     *     responses:
     *       200:
     *         description: Screen details retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       404:
     *         description: User or screen not found
     *       502:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    getScreenById: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens:
     *   post:
     *     summary: Add a new screen to the user
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               userId:
     *                 type: string
     *               nameScreen:
     *                 type: string
     *               imageScreen:
     *                 type: string
     *               favs_ar:
     *                 type: array
     *                 items:
     *                   type: object
     *               lenguage:
     *                 type: string
     *     responses:
     *       200:
     *         description: Screen added successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Maximum number of screens reached or user not found
     *       500:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    addScreen: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}:
     *   put:
     *     summary: Edit an existing screen
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nameScreen:
     *                 type: string
     *               imageScreen:
     *                 type: string
     *               lenguage:
     *                 type: string
     *     responses:
     *       200:
     *         description: Screen updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       404:
     *         description: Screen not found
     *       500:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    editScreen: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}:
     *   delete:
     *     summary: Delete a specific screen
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen to delete
     *     responses:
     *       200:
     *         description: Screen deleted successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Cannot delete profile account or screen not found
     *       404:
     *         description: Screen or user not found
     *       500:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    deleteScreen: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}/favorites:
     *   patch:
     *     summary: Toggle a favorite item on a screen
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               fav:
     *                 type: object
     *     responses:
     *       200:
     *         description: Favorite item toggled successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       404:
     *         description: Screen or user not found
     *       500:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    toggel_Favs: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}/addresses:
     *   post:
     *     summary: Add a new address to a screen
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen to add an address to
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               city:
     *                 type: string
     *               entrance:
     *                 type: string
     *               num:
     *                 type: string
     *               phone:
     *                 type: string
     *               street:
     *                 type: string
     *               zipCode:
     *                 type: string
     *     responses:
     *       200:
     *         description: Address added successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *       400:
     *         description: Maximum number of addresses reached or screen not found
     *       404:
     *         description: User not found
     *       502:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    addAddress: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}/addresses:
     *   put:
     *     summary: Edit an existing address
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen containing the address
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               addressId:
     *                 type: string
     *               city:
     *                 type: string
     *               entrance:
     *                 type: string
     *               num:
     *                 type: string
     *               phone:
     *                 type: string
     *               street:
     *                 type: string
     *               zipCode:
     *                 type: string
     *     responses:
     *       200:
     *         description: Address updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       404:
     *         description: Address or screen not found
     *       502:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    editAddress: async (req, res) => {
      // Your code here
    },
  
    /**
     * @swagger
     * /user/screens/{screenId}/addresses/{addressId}:
     *   delete:
     *     summary: Delete an address from a screen
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: screenId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the screen containing the address
     *       - in: path
     *         name: addressId
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the address to delete
     *     responses:
     *       200:
     *         description: Address deleted successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       404:
     *         description: Address or screen not found
     *       502:
     *         description: Server error
     *     security:
     *       - bearerAuth: []
     */
    deleteAddress: async (req, res) => {
      // Your code here
    }
  };
  