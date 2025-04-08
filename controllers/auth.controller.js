class AuthController {
  static login(req, res) {
    res.status(200).json({
      message: 'Welcome to the API',
      status: 'success',
    });
  }
}
module.exports = AuthController;
