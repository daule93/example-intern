
class Controller {
  constructor() {

  }

  /**
   * successResponse function
   * @param res
   * @param options
   * @returns {*}
   */
  successResponse(res, options) {
    let { error, status, data, message } = options;
    console.log(options);
    error = error || 0;
    status = status || 200;
    message = message || 'success';
    data = data || null;
    return res.json({
      error,
      data,
      message,
      status
    });
  }

  /**
   * createdResponse function
   * @param res
   * @param options
   * @returns {*}
   */

  createdResponse(res, options) {
    let { error, status, data, message } = options;
    error = error || 0;
    status = status || 201;
    message = message || 'success';
    data = data || null;
    return res.status(status).json({
      error,
      data,
      message,
      status
    });
  }

  /**
   * errorResponse function
   * @param res
   * @param options
   * @returns {*}
   */
  errorResponse(res, options) {
    let { error, status, data, message } = options;
    error = error || 400;
    status = status || 400;
    message = message || 'success';
    data = data || null;
    return res.json({
      error,
      data,
      message,
      status
    });
  }

  /**
   *
   * @param res
   * @param options
   * @returns {*}
   */
  inValidResponse(res, options) {
    let { error, status, data, message } = options;
    error = error || 400;
    status = status || 400;
    message = message || 'success';
    data = data || null;
    return res.json({
      error,
      data,
      message,
      status
    });
  }
}

module.exports = Controller;