module.exports = class AuthController {
  static register(req, res) {
    res.status(200).json({
      message: 'Welcome to the API Registration',
      status: 'success',
    });
  }
}
