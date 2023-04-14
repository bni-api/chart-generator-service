import fp from 'fastify-plugin';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

function plugin(app, options, done) {

  app.decorate('generateChartImage', async (
    canvas = { width, height, backgroundColor },
    chart = { type: '', data: {}, options: {}, plugins: [] }
  ) => {
    const chartJSNodeCanvas = new ChartJSNodeCanvas(canvas);
    return await chartJSNodeCanvas.renderToDataURL(chart);
  });

  done();
}

export default fp(plugin);