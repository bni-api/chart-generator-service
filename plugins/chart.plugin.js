import fp from 'fastify-plugin';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

function plugin(app, options, done) {

  app.decorate('generateChartBase64', async (
    canvas = { width, height },
    chart = { type: '', data: {}, options: {}, plugins: [] }
  ) => {
    const chartJSNodeCanvas = new ChartJSNodeCanvas(canvas);
    return await chartJSNodeCanvas.renderToDataURL(chart);
  });

  app.decorate('generateChartBuffer', async (
    canvas = { width, height },
    chart = { type: '', data: {}, options: {}, plugins: [] }
  ) => {
    const chartJSNodeCanvas = new ChartJSNodeCanvas(canvas);
    return await chartJSNodeCanvas.renderToBuffer(chart);
  });

  done();
}

export default fp(plugin);