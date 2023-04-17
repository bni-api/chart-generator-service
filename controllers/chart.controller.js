export async function generateChart(req, res) {
  try {
    if (req.query.type === 'image') {
      const buffer = await this.generateChartBuffer(req.body.canvas, req.body);
      res.type('image/png');
      res.send(buffer);
    } else if (req.query.type === 'base64') {
      const base64 = await this.generateChartBase64(req.body.canvas, req.body);
      return { statusCode: 200, message: this.lang('getSuccess'), data: base64 };
    }
  } catch (err) {
    return res.code(400).send({ statusCode: 400, message: err.message });
  }
}