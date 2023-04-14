export async function generateChart(req, res) {
  try {
    const generated = await this.generateChartImage(req.body.canvas, req.body);
    return { statusCode: 200, message: this.lang('getSuccess'), data: generated };
  } catch (err) {
    return res.code(400).send({ statusCode: 400, message: err.message });
  }
}