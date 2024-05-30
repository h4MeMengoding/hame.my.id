import { formatDate } from '@/common/helpers';

import OverviewItem from './OverviewItem';

interface OverviewProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}

const Overview = ({ data }: OverviewProps) => {
  const dailyTotal = data?.human_readable_total || 'N/A';
  const dailyAverage = data?.human_readable_daily_average || 'N/A';
  const bestDayText = data?.best_day?.text || 'N/A';
  const bestDayDate = data?.best_day?.date;
  const allTimeSinceToday = data?.all_time_since_today?.text || 'N/A';
  const startDate = data?.start_date ? formatDate(data.start_date) : '';
  const endDate = data?.end_date ? formatDate(data.end_date) : '';
  const bestDay = bestDayDate
    ? `${formatDate(bestDayDate)} (${bestDayText})`
    : 'N/A';

  return (
    <div className='mb-1 grid gap-3 py-2 md:grid-cols-2'>
      <OverviewItem label='Tanggal Dimulai' value={startDate} />
      <OverviewItem label='Tanggal Berakhir' value={endDate} />
      <OverviewItem label='Rata-rata Harian' value={dailyAverage} />
      <OverviewItem label='Mingu Ini' value={dailyTotal} />
      <OverviewItem label='Hari Terlama' value={bestDay} />
      <OverviewItem label='Total Waktu' value={allTimeSinceToday} />
    </div>
  );
};

export default Overview;
