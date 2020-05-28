module.exports = async (req, res) => {
  try {
    /* eslint-disable no-console */
    await console.log(req.params)
  } catch (e) {
    return res.json(e)
  }
}
