class AuthController {
  static login(req, res) {
    res.status(200).json({
      message: 'Welcome to the API',
      status: 'success',
    });
  }
  static register(req, res) {
    res.status(200).json({
      message: 'Welcome to the API Registration',
      status: 'success',
    });
  }
}
module.exports = AuthController;
