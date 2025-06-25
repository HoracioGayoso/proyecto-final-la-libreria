import { Request, Response } from 'express';
import dayjs from 'dayjs';
import { getVentasDiarias } from '../services/OrdenVentaRepository';

export const getReporteVentasDiarias = async (req: Request, res: Response) => {
  const { since, until } = req.query;
  if (!since || !until) {
    return res.status(400).json({ error: 'Missing since or until query parameter' });
  }
  try {
    const startDate = dayjs(String(since));
    const endDate = dayjs(String(until)).add(1, 'day');
    if (!startDate.isValid() || !endDate.isValid()) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
    const ventasDiarias = await getVentasDiarias(startDate.format('YYYY-MM-DD'), endDate.subtract(1, 'day').format('YYYY-MM-DD'));
    const days = [];
    const salesMap: Record<string, number> = {};
    let current = startDate.clone();
    while (current.isBefore(endDate, 'day')) {
      const key = current.format('MM-DD');
      days.push(key);
      salesMap[key] = 0;
      current = current.add(1, 'day');
    }
    ventasDiarias.forEach((v: any) => {
      const key = v.fecha.slice(5);
      if (salesMap[key] !== undefined) {
        salesMap[key] = Number(v.total);
      }
    });
    const yAxis = days.map(d => salesMap[d]);
    const yAvg = yAxis.length > 0 ? Number((yAxis.reduce((a, b) => a + b, 0) / yAxis.length).toFixed(1)) : 0;
    let maxIdx = 0, minIdx = 0;
    let maxVal = yAxis[0], minVal = yAxis[0];
    let total = 0;
    yAxis.forEach((val, idx) => {
      if (val > maxVal) { maxVal = val; maxIdx = idx; }
      if (val < minVal) { minVal = val; minIdx = idx; }
      total += val;
    });
    const resumeTitles = [
      'Día con más ventas',
      'Día con menos ventas',
      'Total de ventas',
      'Ventas promedio'
    ];
    const resumeValue = [
      `${startDate.format('YYYY')}-${days[maxIdx]} (${maxVal})`,
      `${startDate.format('YYYY')}-${days[minIdx]} (${minVal})`,
      total,
      yAvg
    ];
    res.status(200).json({
      since: startDate.format('YYYY-MM-DD'),
      until: endDate.subtract(1, 'day').format('YYYY-MM-DD'),
      type: 'ventas-diarias',
      'x-axis-value': days,
      'y-axis-value': yAxis,
      'y-average': yAvg,
      'resume-titles': resumeTitles,
      'resume-value': resumeValue
    });
  } catch (err) {
    res.status(500).json({ error: 'Error generating report', details: err });
  }
}; 