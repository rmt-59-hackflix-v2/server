
class RootController {
  static getRoot(req, res) {
    res.status(200).json({
      message: 'Welcome to the API',
      status: 'success',
    });
  }
}
module.exports = RootController;
